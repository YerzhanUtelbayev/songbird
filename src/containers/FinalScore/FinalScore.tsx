import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'reactstrap';

import { RootState } from '../../store/configureStore';
import { MAX_OVERALL_SCORE } from '../../utilities/constants';
import { restartGame } from '../../store/actions/gameActions';

const FinalScore: FunctionComponent<PropsFromRedux> = ({ score, onRestartGame }) => {
  const handleGameRestart = () => {
    onRestartGame();
  };

  return (
    <div className="text-center">
      <p>Поздравляем!</p>
      <p>{`Вы прошли викторину и набрали ${score} из ${MAX_OVERALL_SCORE} возможных баллов`}</p>
      <Button color="success" block onClick={handleGameRestart}>
        Попробовать ещё раз!
      </Button>
    </div>
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
