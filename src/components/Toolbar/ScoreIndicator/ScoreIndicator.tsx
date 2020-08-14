import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavbarText } from 'reactstrap';
import { RootState } from '../../../store/configureStore';

interface Props extends PropsFromRedux {
  score: number;
}

const ScoreIndicator = ({ score }: Props) => (
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
