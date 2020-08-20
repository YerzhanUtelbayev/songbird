/* eslint-disable jsx-a11y/media-has-caption */
import React, { FunctionComponent } from 'react';

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

  return (
    <div className="Player">
      <audio ref={audioRef}>
        <source src={audio} />
        Your browser does not support the
        {' '}
        <code>audio</code>
        {' '}
        element.
      </audio>
      <div className="Player-controls">
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