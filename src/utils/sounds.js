const CLIPS = {
  enter: "/audio/enter.mp3",
  nav: "/audio/nav.mp3",
  menu: "/audio/menu.mp3",
  select: "/audio/select.mp3",
  open: "/audio/open.mp3",
  close: "/audio/close.mp3",
  send: "/audio/send.mp3",
  success: "/audio/success.mp3",
  error: "/audio/error.mp3",
  toggle: "/audio/toggle.mp3",
};

const MUSIC = {
  intro: "/audio/music-intro.mp3",
  main: "/audio/music-main.mp3",
  work: "/audio/music-work.mp3",
  contact: "/audio/music-contact.mp3",
};

const HOVER_SRC = "/audio/hover-swoosh.wav";

const MUSIC_RANK = { intro: 0, main: 1, work: 2, contact: 3 };

/** Start position in seconds for each track */
const MUSIC_START_AT = {
  intro: 0,
  main: 0,
  work: 0,
  contact: 2.3,
};

class SoundEngine {
  constructor() {
    this.enabled = localStorage.getItem("portfolio-sound") !== "off";
    this.audioUnlocked = false;
    this.audioCtx = null;
    this.onBlockedListeners = new Set();
    this.onStartedListeners = new Set();
    this.lastPlayed = {};
    this.sfxVolume = 0.88;
    this.musicVolume = 0.65;
    this.musicAudio = null;
    this.currentMusicTrack = null;
    this.musicPlaying = false;
    this.fadeTimer = null;
    this.pendingTrack = null;
    this.musicLock = Promise.resolve();
    this.introMusicStarted = false;
    /** Highest section music reached while scrolling (never downgrade). */
    this.highestMusicRank = 0;

    this.hoverAudio = null;
    this.hoverCommitted = false;

    this.preloadedMusic = {};
    Object.entries(MUSIC).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.loop = true;
      audio.preload = "auto";
      audio.load();
      this.preloadedMusic[key] = audio;
    });
  }

  unlock() {
    this.audioUnlocked = true;
  }

  onMusicBlocked(listener) {
    this.onBlockedListeners.add(listener);
    return () => this.onBlockedListeners.delete(listener);
  }

  onMusicStarted(listener) {
    this.onStartedListeners.add(listener);
    return () => this.onStartedListeners.delete(listener);
  }

  notifyMusicBlocked(track) {
    this.onBlockedListeners.forEach((listener) => listener(track));
  }

  notifyMusicStarted(track) {
    this.onStartedListeners.forEach((listener) => listener(track));
  }

  runMusicLocked(fn) {
    const run = this.musicLock.then(fn, fn);
    this.musicLock = run.catch(() => {});
    return run;
  }

  /** Resume Web Audio + mark unlocked (required by Chrome/Safari/Firefox before playback). */
  async unlockAudio() {
    this.unlock();

    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) {
        this.audioCtx = this.audioCtx || new Ctx();
        if (this.audioCtx.state === "suspended") {
          await this.audioCtx.resume();
        }
      }
    } catch {
      /* ignore */
    }

    return this.audioUnlocked;
  }

  setEnabled(value) {
    this.enabled = value;
    localStorage.setItem("portfolio-sound", value ? "on" : "off");
    if (!value) {
      this.stopAllMusic();
      this.stopHover();
      this.pendingTrack = null;
      this.introMusicStarted = false;
      this.highestMusicRank = 0;
    } else if (this.musicPlaying && this.musicAudio) {
      this.musicAudio.volume = this.musicVolume;
    } else if (this.pendingTrack) {
      void this.playMusicFromGesture(this.pendingTrack);
    }
  }

  canPlay(key, cooldownMs = 100) {
    if (!this.enabled) return false;
    const now = Date.now();
    if (now - (this.lastPlayed[key] || 0) < cooldownMs) return false;
    this.lastPlayed[key] = now;
    return true;
  }

  playClip(src, volume = this.sfxVolume) {
    if (!this.enabled || !src) return Promise.resolve();
    const audio = new Audio(src);
    audio.volume = volume;
    return audio.play().catch(() => {});
  }

  hoverEnter() {
    if (!this.enabled || this.hoverCommitted) return;
    this.stopHover(false);
    this.hoverAudio = new Audio(HOVER_SRC);
    this.hoverAudio.volume = this.sfxVolume;
    this.hoverAudio.play().catch(() => {});
  }

  hoverLeave() {
    if (this.hoverCommitted) return;
    this.stopHover(false);
  }

  hoverCommit() {
    if (!this.enabled) return;
    this.hoverCommitted = true;
    if (this.hoverAudio) {
      this.hoverAudio.onended = () => {
        this.hoverCommitted = false;
        this.hoverAudio = null;
      };
    } else {
      this.hoverCommitted = false;
    }
  }

  stopHover(resetCommit = true) {
    if (this.hoverAudio) {
      this.hoverAudio.onended = null;
      this.hoverAudio.pause();
      this.hoverAudio.currentTime = 0;
      this.hoverAudio = null;
    }
    if (resetCommit) this.hoverCommitted = false;
  }

  pauseTrackElement(track) {
    const audio = this.preloadedMusic[track];
    if (!audio) return;
    audio.pause();
    try {
      audio.currentTime = MUSIC_START_AT[track] ?? 0;
    } catch {
      /* ignore seek errors */
    }
  }

  stopMusicElement() {
    if (this.fadeTimer) {
      cancelAnimationFrame(this.fadeTimer);
      this.fadeTimer = null;
    }
    if (this.musicAudio) {
      this.musicAudio.pause();
    }
    if (this.currentMusicTrack) {
      this.pauseTrackElement(this.currentMusicTrack);
    }
    this.musicAudio = null;
  }

  stopAllMusic() {
    this.musicPlaying = false;
    this.currentMusicTrack = null;
    this.stopMusicElement();
    Object.keys(this.preloadedMusic).forEach((track) => this.pauseTrackElement(track));
  }

  fadeVolumeTo(audio, target, durationSec = 0.8) {
    if (this.fadeTimer) cancelAnimationFrame(this.fadeTimer);
    const start = audio.volume;
    const startTime = performance.now();
    const durationMs = durationSec * 1000;

    const step = (now) => {
      const t = Math.min(1, (now - startTime) / durationMs);
      audio.volume = start + (target - start) * t;
      if (t < 1) {
        this.fadeTimer = requestAnimationFrame(step);
      }
    };
    this.fadeTimer = requestAnimationFrame(step);
  }

  playMusic(track, { force = false, immediate = false } = {}) {
    if (!this.enabled) return Promise.resolve(false);

    const currentRank = MUSIC_RANK[this.currentMusicTrack] ?? -1;
    const nextRank = MUSIC_RANK[track] ?? -1;

    if (!force && this.currentMusicTrack === track && this.musicPlaying) {
      return Promise.resolve(true);
    }
    if (!force && nextRank < currentRank) return Promise.resolve(true);

    if (this.currentMusicTrack && this.currentMusicTrack !== track) {
      this.pauseTrackElement(this.currentMusicTrack);
    }

    this.stopMusicElement();

    const audio = this.preloadedMusic[track];
    if (!audio) return Promise.resolve(false);

    audio.volume = immediate ? this.musicVolume : 0;
    audio.currentTime = MUSIC_START_AT[track] ?? 0;
    this.musicAudio = audio;
    this.currentMusicTrack = track;

    const targetVol = this.musicVolume;

    return audio
      .play()
      .then(() => {
        this.musicPlaying = true;
        this.pendingTrack = null;
        this.audioUnlocked = true;
        if (track === "intro") this.introMusicStarted = true;
        this.notifyMusicStarted(track);

        if (immediate) {
          audio.volume = targetVol;
        } else {
          audio.volume = 0;
          this.fadeVolumeTo(audio, targetVol, 0.8);
        }
        return true;
      })
      .catch(() => {
        if (this.musicAudio === audio) {
          audio.pause();
          this.musicAudio = null;
        }
        this.currentMusicTrack = null;
        this.musicPlaying = false;
        this.pendingTrack = track;
        this.notifyMusicBlocked(track);
        return false;
      });
  }

  /** User-gesture playback — always unlocks first. */
  playMusicFromGesture(track) {
    return this.runMusicLocked(async () => {
      if (!this.enabled) return false;
      await this.unlockAudio();
      this.pendingTrack = null;
      return this.playMusic(track, { force: true, immediate: true });
    });
  }

  /** First soundtrack on intro (mouse move, click, or tap — not Enter). */
  startIntroFromGesture() {
    if (!this.enabled) return Promise.resolve(false);
    if (this.introMusicStarted || (this.musicPlaying && this.currentMusicTrack === "intro")) {
      return Promise.resolve(true);
    }
    if (this.highestMusicRank > 0) return Promise.resolve(false);
    return this.playMusicFromGesture("intro");
  }

  /** Try autoplay on load; browsers usually block until a gesture. */
  tryAutoplayIntro() {
    if (!this.enabled) return;
    void this.playMusic("intro", { force: true, immediate: true }).then((ok) => {
      if (!ok) this.pendingTrack = "intro";
    });
  }

  /** Only upgrade music when scrolling forward into a new section. */
  onSectionMusic(sectionId) {
    if (!this.enabled) return;

    const track =
      sectionId === "work" ? "work" : sectionId === "contact" ? "contact" : null;
    if (!track) return;

    const rank = MUSIC_RANK[track];
    if (rank <= this.highestMusicRank) return;

    this.highestMusicRank = rank;
    void this.playMusic(track, { force: true, immediate: true });
  }

  async play(name) {
    if (!this.enabled) return;

    const cooldowns = {
      enter: 800,
      nav: 120,
      menu: 100,
      select: 150,
      open: 180,
      close: 180,
      send: 280,
      success: 450,
      error: 350,
      toggle: 180,
    };

    if (!this.canPlay(name, cooldowns[name] ?? 120)) return;

    const src = CLIPS[name];
    if (src) await this.playClip(src);
  }

  /** Enter portfolio — switch to main music (runs on Enter click; must not block navigation). */
  enterExperience() {
    this.unlock();
    if (!this.enabled) this.setEnabled(true);

    this.pendingTrack = null;
    this.introMusicStarted = false;

    if (this.currentMusicTrack === "intro") {
      this.pauseTrackElement("intro");
    }

    this.hoverCommit();
    void this.play("enter");
    void this.unlockAudio();

    return this.playMusic("main", { force: true, immediate: true }).then((ok) => {
      if (ok) this.highestMusicRank = MUSIC_RANK.main;
      return ok;
    });
  }
}

export const soundEngine = new SoundEngine();
