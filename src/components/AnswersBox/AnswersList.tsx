import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './AnswersList.css';
import { IBirdData } from '../../store/reducers/game';
import { RootState } from '../../store/configureStore';
import { handleCorrectAnswer, handleIncorrectAnswer } from '../../store/actions/gameActions';
import AnswerVariant from './AnswerVariant/AnswerVariant';

interface Props extends PropsFromRedux {
  stageBirdsList: IBirdData[];
  showBirdInfo: (index: number) => void;
}

const AnswersList: FunctionComponent<Props> = ({
  stageBirdsList,
  showBirdInfo,
  correctAnswerId,
  hasAnsweredCorrectly,
  onCorrectAnswer,
  onIncorrectAnswer,
}) => {
  const handleAnswer = (birdId: string, arrayIndex: number) => {
    showBirdInfo(arrayIndex);

    if (hasAnsweredCorrectly) return;

    if (birdId === correctAnswerId) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }
  };

  return (
    <ListGroup className="AnswersList-container">
      {stageBirdsList && Array.isArray(stageBirdsList)
        ? stageBirdsList.map(({ id, name }, index) => (
          <AnswerVariant
            key={id}
            title={name}
            handleClick={() => handleAnswer(id, index)}
            isCorrect={id === correctAnswerId}
            isStageOver={hasAnsweredCorrectly}
            className="AnswersList-listItem"
          />
        ))
        : null}
    </ListGroup>
  );
};

const mapStateToProps = (state: RootState) => ({
  correctAnswerId: state.game.correctAnswerId,
  hasAnsweredCorrectly: state.game.hasAnsweredCorrectly,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCorrectAnswer: () => dispatch(handleCorrectAnswer()),
  onIncorrectAnswer: () => dispatch(handleIncorrectAnswer()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AnswersList);
