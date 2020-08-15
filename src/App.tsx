import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from './store/configureStore';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import FinalScore from './containers/FinalScore/FinalScore';

const App: FunctionComponent<PropsFromRedux> = ({ isGameOver }) => (
  <Layout>{!isGameOver ? <Main /> : <FinalScore />}</Layout>
);

const mapStateToProps = (state: RootState) => ({
  isGameOver: state.game.isGameOver,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
