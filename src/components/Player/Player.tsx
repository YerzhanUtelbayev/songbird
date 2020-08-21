/* eslint-disable jsx-a11y/media-has-caption */
import React, { FunctionComponent, useEffect } from 'react';

import './Player.css';

import useAudioPlayer from '../../hooks/useAudioPlayer';
import ProgressBar from './ProgressBar/ProgressBar';
import Pause from './Controls/Pause';
import Play from './Controls/Play';

interface Props {
  audio: string;
}

const Player: FunctionComponent<Props> = ({ audio }) => {
  const {
    audioRef, currentTime, duration, playing, setPlaying, setClickedTime,
  } = useAudioPlayer();

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl && audioEl.src !== audio) {
      audioEl.src = audio;
    }
  }, [audio, audioRef]);

  return (
    <div className="Player">
      <audio ref={audioRef}>
        Your browser does not support the
        {' '}
        <code>audio</code>
        {' '}
        element.
      </audio>
      <div className="Player-controls d-flex flex-row align-items-center">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <ProgressBar curTime={currentTime} duration={duration} onTimeUpdate={setClickedTime} />
      </div>
    </div>
  );
};

export default Player;
