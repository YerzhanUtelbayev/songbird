import React, { FunctionComponent, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from './store/configureStore';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import FinalScore from './containers/FinalScore/FinalScore';
import Logger from './utilities/fancyLogger';

const App: FunctionComponent<PropsFromRedux> = ({ isGameOver }) => {
  useEffect(() => {
    console.log('rerender');
    Logger.logTitle();
    Logger.logIntro();
  }, []);
  return <Layout>{!isGameOver ? <Main /> : <FinalScore />}</Layout>;
};

const mapStateToProps = (state: RootState) => ({
  isGameOver: state.game.isGameOver,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
