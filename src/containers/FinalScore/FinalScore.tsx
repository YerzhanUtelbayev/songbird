import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Button, Jumbotron } from 'reactstrap';

import './FinalScore.css';
import { RootState } from '../../store/configureStore';
import { MAX_OVERALL_SCORE } from '../../utilities/constants';
import { restartGame } from '../../store/actions/gameActions';

const FinalScore: FunctionComponent<PropsFromRedux> = ({ score, onRestartGame }) => {
  const handleGameRestart = () => {
    onRestartGame();
  };

  return (
    <Jumbotron className="FinalScore">
      <div className="text-center">
        <p className="h1">Поздравляем!</p>
        {score !== MAX_OVERALL_SCORE ? (
          <p className="lead">{`Вы прошли викторину и набрали ${score} из ${MAX_OVERALL_SCORE} возможных баллов`}</p>
        ) : (
          <>
            <p className="lead">
              Вы прошли викторину и набрали максимально возможное количество баллов
            </p>
            <p>
              Вот вам ссылка на бесплатную библиотеку книг по JS в подарок
              {' '}
              <a href="https://jsbooks.revolunet.com/" rel="noreferrer noopener" target="_blank">
                JSbooks
              </a>
            </p>
          </>
        )}
        <hr className="mt-4 mb-5" />
        <Button className="FinalScore-button" block size="lg" onClick={handleGameRestart}>
          Попробовать ещё раз!
        </Button>
      </div>
    </Jumbotron>
  );
};

const mapStateToProps = (state: RootState) => ({
  score: state.game.score,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRestartGame: () => dispatch(restartGame()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FinalScore);
