import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/configureStore';
import { MAX_OVERALL_SCORE } from '../../utilities/constants';

const FinalScore: FunctionComponent<PropsFromRedux> = ({ score }) => (
  <div>
    <p>Поздравляем!</p>
    <p>{`Вы прошли викторину и набрали ${score} из ${MAX_OVERALL_SCORE} возможных баллов`}</p>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  score: state.game.score,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FinalScore);
