import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../store/configureStore';
import { IBirdData } from '../../store/reducers/game';
import { setCorrectAnswerNumber } from '../../store/actions/gameActions';

const Main: FunctionComponent<PropsFromRedux> = ({
  birdsList,
  activeStage,
  correctAnswer,
  onSetCorrectAnswer,
}) => {
  const [currentBird, setBird] = useState<IBirdData | undefined>(undefined);

  const getRandomIntInclusive = (min: number, max: number): number => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  };

  useEffect(() => {
    const randomInt = getRandomIntInclusive(1, 6);
    onSetCorrectAnswer(randomInt);
  }, [activeStage, onSetCorrectAnswer]);

  useEffect(() => {
    const currentStageData: IBirdData[] = [...birdsList[activeStage]];
    if (correctAnswer) {
      const correctAnswerData = { ...currentStageData[correctAnswer] };
      setBird(correctAnswerData);
    }
  }, [birdsList, activeStage, correctAnswer]);

  return (
    <div>
      Main page content will be here
      {currentBird && currentBird.name}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  birdsList: state.game.birdsList,
  activeStage: state.game.activeStage,
  correctAnswer: state.game.correctAnswer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetCorrectAnswer: (answerNumber: number) => dispatch(setCorrectAnswerNumber(answerNumber)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Main);
