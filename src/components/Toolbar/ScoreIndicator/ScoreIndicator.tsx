import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavbarText } from 'reactstrap';
import { RootState } from '../../../store/configureStore';

const ScoreIndicator: FunctionComponent<PropsFromRedux> = ({ score }) => (
  <NavbarText>
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
