import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Row, Col, Button } from 'reactstrap';

import { RootState } from '../../store/configureStore';
import { IBirdData } from '../../store/reducers/game';
import { setCorrectAnswerId, proceedToNextStage } from '../../store/actions/gameActions';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import AnswersList from '../../components/AnswersBox/AnswersList';
import BirdInfo from '../../components/BirdInfo/BirdInfo';
import './Main.css';
import Logger from '../../utilities/fancyLogger';

const Main: FunctionComponent<PropsFromRedux> = ({
  birdsList,
  activeStage,
  correctAnswerId,
  onSetCorrectAnswer,
  onProceedToNextStage,
  hasAnsweredCorrectly,
}) => {
  const [questionedBird, setQuestionedBird] = useState<IBirdData | undefined>(undefined);
  const [shownBirdIndex, setBirdIndex] = useState<number | null>(null);

  const getRandomIntInclusive = (min: number, max: number): number => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  };

  const showBirdInfo = (birdIndex: number) => {
    setBirdIndex(birdIndex);
  };

  const handleProceedToNextLevel = () => {
    setBirdIndex(null);
    onProceedToNextStage();
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
      const correctAnswerData = currentStageData.find(({ id }) => id === correctAnswerId);
      Logger.logBirdName(correctAnswerData);
      setQuestionedBird(correctAnswerData);
    }
  }, [correctAnswerId, birdsList, activeStage]);

  return (
    <>
      {questionedBird && (
        <QuestionBox
          image={questionedBird.image}
          thumbnail={questionedBird.thumbnail}
          title={questionedBird.name}
          audio={questionedBird.audio}
        />
      )}
      <Row className="my-3 my-md-5">
        <Col sm={12} md={6}>
          <div className="Main-content-block rounded">
            <AnswersList stageBirdsList={birdsList[activeStage - 1]} showBirdInfo={showBirdInfo} />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="Main-content-block Main-height-adjusted p-3 rounded">
            {shownBirdIndex || shownBirdIndex === 0 ? (
              <BirdInfo birdData={birdsList[activeStage - 1][shownBirdIndex]} />
            ) : (
              <>
                <p>Послушайте плеер</p>
                <p>Выберите птицу из списка</p>
              </>
            )}
          </div>
        </Col>
      </Row>
      <div>
        <Button
          className="Main-proceed-button mb-5"
          block
          onClick={handleProceedToNextLevel}
          disabled={!hasAnsweredCorrectly}
        >
          Next Level
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  birdsList: state.game.birdsList,
  activeStage: state.game.activeStage,
  correctAnswerId: state.game.correctAnswerId,
  hasAnsweredCorrectly: state.game.hasAnsweredCorrectly,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetCorrectAnswer: (birdId: string) => dispatch(setCorrectAnswerId(birdId)),
  onProceedToNextStage: () => dispatch(proceedToNextStage()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Main);
