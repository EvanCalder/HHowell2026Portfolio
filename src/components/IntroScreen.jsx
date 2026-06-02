import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";

import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";
import ShootingStars from "./ShootingStars";

const IntroScreen = ({ onEnter }) => {
  const { enterExperience, needsAudioUnlock, startIntroFromGesture } = useSound();
  const hoverSound = useButtonHoverSound();
  const introMusicAttempted = useRef(false);

  const tryStartIntroMusic = useCallback(() => {
    if (introMusicAttempted.current) return;
    introMusicAttempted.current = true;
    void startIntroFromGesture().then((ok) => {
      if (ok === false) introMusicAttempted.current = false;
    });
  }, [startIntroFromGesture]);

  const handleIntroTap = (e) => {
    if (e.target.closest("[data-intro-enter]")) return;
    tryStartIntroMusic();
  };

  const handleIntroMouseMove = () => {
    tryStartIntroMusic();
  };

  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    hoverSound.onMouseDown();
    onEnter();
    void enterExperience();
  };

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      onMouseMove={handleIntroMouseMove}
      onPointerDown={handleIntroTap}
      className="intro-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
    >
      <div className="intro-starfield pointer-events-none" />
      <ShootingStars />
      <div className="intro-twinkle pointer-events-none" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl pointer-events-auto"
      >
        <h1 className="intro-name text-white font-black tracking-tight">
          <span className="intro-name-glow">Timothy</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-white/80 text-[14px] sm:text-[18px] md:text-[20px] font-light tracking-wide max-w-2xl leading-relaxed">
          Senior AI / ML Engineer · Distributed Systems &amp; Enterprise Platforms
        </p>

        {needsAudioUnlock && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-white/55 text-[12px] sm:text-[13px] tracking-wide"
          >
            Move your mouse to start the soundtrack
          </motion.p>
        )}

        <motion.button
          type="button"
          data-intro-enter
          {...hoverSound}
          onClick={handleEnter}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="intro-enter-btn mt-10 sm:mt-14 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full text-white text-[13px] sm:text-[15px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-shadow duration-300"
        >
          Enter the Experience
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
