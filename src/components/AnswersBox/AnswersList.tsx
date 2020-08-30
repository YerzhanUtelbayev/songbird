import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ListGroup } from 'reactstrap';

import './AnswersList.css';
import { IBirdData } from '../../store/reducers/game';
import { RootState } from '../../store/configureStore';
import {
  handleCorrectAnswer,
  handleIncorrectAnswer,
  resetPlayingComponent,
} from '../../store/actions/gameActions';
import AnswerVariant from './AnswerVariant/AnswerVariant';
import useSounds from '../../hooks/useSounds';

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
  onResetPlayingComponent,
}) => {
  const [answeredIndexesList, setAnsweredIndexes] = useState<number[]>([]);

  const { playErrorSound, playWinSound } = useSounds();

  const handleAnswer = (birdId: string, arrayIndex: number) => {
    showBirdInfo(arrayIndex);

    if (hasAnsweredCorrectly || answeredIndexesList.includes(arrayIndex)) {
      return;
    }

    setAnsweredIndexes([...answeredIndexesList, arrayIndex]);

    if (birdId === correctAnswerId) {
      onCorrectAnswer();
      playWinSound();
      onResetPlayingComponent();
    } else {
      onIncorrectAnswer();
      playErrorSound();
    }
  };

  useEffect(() => {
    setAnsweredIndexes([]);
  }, [correctAnswerId]);

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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCorrectAnswer: () => dispatch(handleCorrectAnswer()),
  onIncorrectAnswer: () => dispatch(handleIncorrectAnswer()),
  onResetPlayingComponent: () => dispatch(resetPlayingComponent()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AnswersList);
