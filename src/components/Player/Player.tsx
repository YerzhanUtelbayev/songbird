/* eslint-disable jsx-a11y/media-has-caption */
import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import './Player.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import ProgressBar from './ProgressBar/ProgressBar';
import Pause from './Controls/Pause';
import Play from './Controls/Play';
import { RootState } from '../../store/configureStore';
import { setPlayingComponent, resetPlayingComponent } from '../../store/actions/gameActions';

interface Props extends PropsFromRedux {
  audio: string;
  parentType: string;
}

const Player: FunctionComponent<Props> = ({
  audio,
  parentType,
  playingComponentType,
  onSetParentType,
  onResetParentType,
}) => {
  const {
    audioRef, currentTime, duration, playing, setPlaying, setClickedTime,
  } = useAudioPlayer();

  const handlePlay = () => {
    setPlaying(true);
    onSetParentType(parentType);
  };

  const handlePause = useCallback(() => {
    onResetParentType();
    setPlaying(false);
  }, [onResetParentType, setPlaying]);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl && audioEl.src !== audio) {
      audioEl.src = audio;
    }
  }, [audio, audioRef]);

  useEffect(() => {
    if (playing) {
      handlePause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio, handlePause]);

  useEffect(() => {
    if (playingComponentType !== parentType || !playingComponentType) {
      setPlaying(false);
    }
  }, [playingComponentType, parentType, setPlaying]);

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
        {playing ? <Pause handleClick={handlePause} /> : <Play handleClick={handlePlay} />}
        <ProgressBar curTime={currentTime} duration={duration} onTimeUpdate={setClickedTime} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  playingComponentType: state.game.playingComponentType,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetParentType: (parentType: string) => dispatch(setPlayingComponent(parentType)),
  onResetParentType: () => dispatch(resetPlayingComponent()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Player);
