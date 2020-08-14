import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/configureStore';

const QuestionBox = ({
  birdsList,
  activeStage,
  correctAnswer,
}: PropsFromRedux) => <div>Question will be here</div>;

const mapStateToProps = (state: RootState) => ({
  birdsList: state.game.birdsList,
  activeStage: state.game.activeStage,
  correctAnswer: state.game.correctAnswer,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(QuestionBox);
