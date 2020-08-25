import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavbarText } from 'reactstrap';
import { RootState } from '../../../store/configureStore';

import './ScoreIndicator.css';

const ScoreIndicator: FunctionComponent<PropsFromRedux> = ({ score }) => (
  <NavbarText className="ScoreIndicator">
    {'Score: '}
    {score}
  </NavbarText>
);

const mapStateToProps = (state: RootState) => ({
  score: state.game.score,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ScoreIndicator);
