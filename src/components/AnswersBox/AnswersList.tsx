import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ListGroup } from 'reactstrap';

import './AnswersList.css';
import { IBirdData } from '../../store/types/reducerTypes';
import { RootState } from '../../store/configureStore';
import { handleAnswerById, resetPlayingComponent } from '../../store/actions/gameActions';
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
  onAnswer,
  onResetPlayingComponent,
}) => {
  const [answeredIndexesList, setAnsweredIndexes] = useState<number[]>([]);

  const { playErrorSound, playWinSound } = useSounds();

  const handleAnswer = (birdId: IBirdData['id'], arrayIndex: number) => {
    showBirdInfo(arrayIndex);

    if (hasAnsweredCorrectly || answeredIndexesList.includes(arrayIndex)) {
      return;
    }

    setAnsweredIndexes([...answeredIndexesList, arrayIndex]);
    onAnswer(birdId);

    if (birdId === correctAnswerId) {
      playWinSound();
      onResetPlayingComponent();
    } else {
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
  onAnswer: (birdId: IBirdData['id']) => dispatch(handleAnswerById(birdId)),
  onResetPlayingComponent: () => dispatch(resetPlayingComponent()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AnswersList);
