import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Row, Col } from 'reactstrap';

import { RootState } from '../../store/configureStore';
import { IBirdData } from '../../store/reducers/game';
import { setCorrectAnswerNumber } from '../../store/actions/gameActions';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import AnswersBox from '../../components/AnswersBox/AnswersBox';

const Main: FunctionComponent<PropsFromRedux> = ({
  birdsList,
  activeStage,
  correctAnswerId,
  onSetCorrectAnswer,
}) => {
  const [currentBird, setBird] = useState<IBirdData | undefined>(undefined);

  const getRandomIntInclusive = (min: number, max: number): number => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  };

  useEffect(() => {
    const currentStageData: IBirdData[] = [...birdsList[activeStage - 1]];
    const randomInt = getRandomIntInclusive(1, currentStageData.length);
    const randomBirdId = currentStageData[randomInt - 1].id;
    onSetCorrectAnswer(randomBirdId);
  }, [activeStage, onSetCorrectAnswer, birdsList]);

  useEffect(() => {
    if (correctAnswerId) {
      const currentStageData: IBirdData[] = [...birdsList[activeStage - 1]];
      const correctAnswerData = currentStageData.find(
        ({ id }) => id === correctAnswerId,
      );
      setBird(correctAnswerData);
    }
  }, [correctAnswerId, birdsList, activeStage]);

  return (
    <>
      {currentBird && (
        <QuestionBox
          image={currentBird.image}
          title={currentBird.name}
          audio={currentBird.audio}
        />
      )}
      <Row>
        <Col sm={12} md={6}>
          <AnswersBox stageBirdsList={birdsList[activeStage - 1]} />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  birdsList: state.game.birdsList,
  activeStage: state.game.activeStage,
  correctAnswerId: state.game.correctAnswerId,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetCorrectAnswer: (answerNumber: number) => dispatch(setCorrectAnswerNumber(answerNumber)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Main);
