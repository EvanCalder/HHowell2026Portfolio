import { useCallback } from "react";
import { useSound } from "../context/SoundContext";

/**
 * Hover: plays swoosh; stops on mouse leave.
 * Use onMouseDown on the same element to let swoosh finish on click.
 * Does NOT set onClick — attach your own onClick handler separately.
 */
export const useButtonHoverSound = () => {
  const { hoverEnter, hoverLeave, hoverCommit } = useSound();

  return {
    onMouseEnter: useCallback(() => hoverEnter(), [hoverEnter]),
    onMouseLeave: useCallback(() => hoverLeave(), [hoverLeave]),
    onMouseDown: useCallback(() => hoverCommit(), [hoverCommit]),
  };
};

export default useButtonHoverSound;
