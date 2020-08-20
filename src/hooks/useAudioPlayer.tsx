import React, {
  useState, useLayoutEffect, useRef, SetStateAction, useEffect,
} from 'react';

interface UseAudioPlayerHook {
  audioRef: React.RefObject<HTMLAudioElement>;
  currentTime: number;
  duration: number;
  playing: boolean;
  setPlaying: React.Dispatch<SetStateAction<boolean>>;
  clickedTime: number;
  setClickedTime: React.Dispatch<SetStateAction<number>>;
}

const useAudioPlayer = (): UseAudioPlayerHook => {
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [clickedTime, setClickedTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (clickedTime && clickedTime !== currentTime && currentTime !== duration) {
      audio.currentTime = clickedTime;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedTime]);

  useLayoutEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const setAudioData = () => {
      setDuration(audio.duration);
    };
    const setAudioTime = () => {
      setCurTime(audio.currentTime);
    };

    const handlePlayEnding = () => {
      setPlaying(false);
      audio.currentTime = 0;
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handlePlayEnding);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handlePlayEnding);
    };
  }, []);

  return {
    audioRef,
    currentTime,
    duration,
    playing,
    setPlaying,
    clickedTime,
    setClickedTime,
  };
};

export default useAudioPlayer;
