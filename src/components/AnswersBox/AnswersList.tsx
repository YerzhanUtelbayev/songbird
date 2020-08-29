import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ListGroup } from 'reactstrap';

import './AnswersList.css';
import errorSound from '../../assets/media/wrong.mp3';
import winSound from '../../assets/media/correct.mp3';
import { IBirdData } from '../../store/reducers/game';
import { RootState } from '../../store/configureStore';
import { handleCorrectAnswer, handleIncorrectAnswer } from '../../store/actions/gameActions';
import AnswerVariant from './AnswerVariant/AnswerVariant';

interface Props extends PropsFromRedux {
  stageBirdsList: IBirdData[];
  showBirdInfo: (index: number) => void;
}

const AnswersList: FunctionComponent<Props> = ({
  stageBirdsList,
  showBirdInfo,
  correctAnswerId,
  hasAnsweredCorrectly,
  onCorrectAnswer,
  onIncorrectAnswer,
  playingComponentType,
}) => {
  const [errorSoundAudio] = useState<HTMLAudioElement>(new Audio(errorSound));
  const [winSoundAudio] = useState<HTMLAudioElement>(new Audio(winSound));
  const [answeredIndexesList, setAnsweredIndexes] = useState<number[]>([]);

  const handleAnswer = (birdId: string, arrayIndex: number) => {
    showBirdInfo(arrayIndex);

    if (hasAnsweredCorrectly || answeredIndexesList.includes(arrayIndex)) {
      return;
    }

    setAnsweredIndexes([...answeredIndexesList, arrayIndex]);

    if (birdId === correctAnswerId) {
      onCorrectAnswer();
      errorSoundAudio.pause();
      winSoundAudio.play().catch(() => {});
    } else {
      onIncorrectAnswer();
      errorSoundAudio.currentTime = 0;
      errorSoundAudio.play().catch(() => {});
    }
  };

  useEffect(() => {
    setAnsweredIndexes([]);
  }, [correctAnswerId]);

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

  return (
    <ListGroup className="AnswersList-container">
      {stageBirdsList && Array.isArray(stageBirdsList)
        ? stageBirdsList.map(({ id, name }, index) => (
          <AnswerVariant
            key={id}
            title={name}
            handleClick={() => handleAnswer(id, index)}
            isCorrect={id === correctAnswerId}
            isStageOver={hasAnsweredCorrectly}
            className="AnswersList-listItem"
          />
        ))
        : null}
    </ListGroup>
  );
};

const mapStateToProps = (state: RootState) => ({
  correctAnswerId: state.game.correctAnswerId,
  hasAnsweredCorrectly: state.game.hasAnsweredCorrectly,
  playingComponentType: state.game.playingComponentType,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCorrectAnswer: () => dispatch(handleCorrectAnswer()),
  onIncorrectAnswer: () => dispatch(handleIncorrectAnswer()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AnswersList);
