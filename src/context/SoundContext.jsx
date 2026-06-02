import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { soundEngine } from "../utils/sounds";

const SoundContext = createContext(null);

export const SoundProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(soundEngine.enabled);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [needsAudioUnlock, setNeedsAudioUnlock] = useState(false);

  const syncMusicState = useCallback(() => {
    setMusicPlaying(soundEngine.musicPlaying);
    setNeedsAudioUnlock(
      soundEngine.enabled &&
        !soundEngine.musicPlaying &&
        soundEngine.pendingTrack === "intro" &&
        !soundEngine.introMusicStarted
    );
  }, []);

  useEffect(() => {
    const unsubBlocked = soundEngine.onMusicBlocked(() => syncMusicState());
    const unsubStarted = soundEngine.onMusicStarted(() => syncMusicState());

    soundEngine.tryAutoplayIntro();
    syncMusicState();

    return () => {
      unsubBlocked();
      unsubStarted();
    };
  }, [syncMusicState]);

  const play = useCallback((name, options) => {
    soundEngine.play(name, options);
  }, []);

  const hoverEnter = useCallback(() => soundEngine.hoverEnter(), []);
  const hoverLeave = useCallback(() => soundEngine.hoverLeave(), []);
  const hoverCommit = useCallback(() => soundEngine.hoverCommit(), []);

  const startIntroMusic = useCallback(() => {
    void soundEngine.startIntroFromGesture().then(syncMusicState);
  }, [syncMusicState]);

  const onSectionMusic = useCallback((sectionId) => {
    soundEngine.onSectionMusic(sectionId);
    syncMusicState();
  }, [syncMusicState]);

  const enterExperience = useCallback(() => {
    return soundEngine.enterExperience().then(() => {
      setEnabled(soundEngine.enabled);
      syncMusicState();
    });
  }, [syncMusicState]);

  const startIntroFromGesture = useCallback(() => {
    return soundEngine.startIntroFromGesture().then((ok) => {
      syncMusicState();
      return ok;
    });
  }, [syncMusicState]);

  const toggleSound = useCallback(() => {
    soundEngine.unlock();
    const next = !soundEngine.enabled;
    soundEngine.setEnabled(next);
    setEnabled(next);
    if (next) {
      soundEngine.play("toggle");
      const track = soundEngine.currentMusicTrack || soundEngine.pendingTrack || "main";
      void soundEngine.playMusicFromGesture(track).then(syncMusicState);
    } else {
      soundEngine.stopAllMusic();
      soundEngine.stopHover();
      setMusicPlaying(false);
      setNeedsAudioUnlock(false);
    }
  }, [syncMusicState]);

  return (
    <SoundContext.Provider
      value={{
        enabled,
        musicPlaying,
        play,
        hoverEnter,
        hoverLeave,
        hoverCommit,
        startIntroMusic,
        onSectionMusic,
        toggleSound,
        enterExperience,
        needsAudioUnlock,
        startIntroFromGesture,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return ctx;
};
