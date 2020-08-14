import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../store/configureStore';
import { IBirdData } from '../../store/reducers/game';
import { setCorrectAnswerNumber } from '../../store/actions/gameActions';
import QuestionBox from '../../components/QuestionBox/QuestionBox';

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
    const currentStageData: IBirdData[] = [...birdsList[activeStage]];
    const randomInt = getRandomIntInclusive(1, currentStageData.length);
    onSetCorrectAnswer(randomInt);
  }, [activeStage, onSetCorrectAnswer, birdsList]);

  useEffect(() => {
    if (correctAnswer) {
      const currentStageData: IBirdData[] = [...birdsList[activeStage]];
      const index = correctAnswer - 1;
      const correctAnswerData = { ...currentStageData[index] };
      setBird(correctAnswerData);
    }
  }, [correctAnswer, birdsList, activeStage]);

  return (
    <>
      {currentBird && (
        <QuestionBox
          image={currentBird.image}
          title={currentBird.name}
          audio={currentBird.audio}
        />
      )}
    </>
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
