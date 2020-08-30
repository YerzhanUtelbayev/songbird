import { useState } from 'react';

import errorSound from '../assets/media/wrong.mp3';
import winSound from '../assets/media/correct.mp3';

interface UseSoundsHook {
  playErrorSound: () => void;
  playWinSound: () => void;
}

const useSounds = (): UseSoundsHook => {
  const [errorSoundAudio] = useState<HTMLAudioElement>(new Audio(errorSound));
  const [winSoundAudio] = useState<HTMLAudioElement>(new Audio(winSound));

  errorSoundAudio.volume = 0.3;
  winSoundAudio.volume = 0.3;

  const playErrorSound = () => {
    errorSoundAudio.currentTime = 0;
    errorSoundAudio.play().catch(() => {});
  };

  const playWinSound = () => {
    errorSoundAudio.pause();
    winSoundAudio.play().catch(() => {});
  };

  return { playErrorSound, playWinSound };
};

export default useSounds;
