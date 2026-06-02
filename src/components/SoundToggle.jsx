import React from "react";
import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const SoundToggle = () => {
  const { enabled, toggleSound } = useSound();
  const hoverSound = useButtonHoverSound();

  return (
    <button
      type="button"
      onClick={toggleSound}
      {...hoverSound}
      aria-label={enabled ? "Mute sound effects" : "Enable sound effects"}
      title={enabled ? "Mute sounds" : "Enable sounds"}
      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-black-200/60 hover:border-[#915EFF]/50 hover:bg-[#915EFF]/10 transition-all duration-200"
    >
      {enabled ? (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#c4b5fd]" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07M18.07 5.93a9 9 0 010 12.14" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-secondary" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 9l-6 6M17 9l6 6" />
        </svg>
      )}
    </button>
  );
};

export default SoundToggle;
