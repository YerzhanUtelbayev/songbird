import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import errorSound from '../assets/media/wrong.mp3';
import winSound from '../assets/media/correct.mp3';
import { RootState } from '../store/configureStore';

interface UseSoundsHook {
  playErrorSound: () => void;
  playWinSound: () => void;
}

const useSounds = (): UseSoundsHook => {
  const [errorSoundAudio] = useState<HTMLAudioElement>(new Audio(errorSound));
  const [winSoundAudio] = useState<HTMLAudioElement>(new Audio(winSound));
  const playingComponentType = useSelector((state: RootState) => state.game.playingComponentType);

  const playErrorSound = () => {
    errorSoundAudio.currentTime = 0;
    errorSoundAudio.play().catch(() => {});
  };

  const playWinSound = () => {
    errorSoundAudio.pause();
    winSoundAudio.play().catch(() => {});
  };

  useEffect(() => {
    if (playingComponentType) {
      errorSoundAudio.loop = false;
    } else {
      errorSoundAudio.loop = true;
    }

    if (playingComponentType && !errorSoundAudio.paused) {
      errorSoundAudio.pause();
    }
  }, [playingComponentType, errorSoundAudio]);

  return { playErrorSound, playWinSound };
};

export default useSounds;
