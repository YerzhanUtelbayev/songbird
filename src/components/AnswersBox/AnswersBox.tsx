import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './AnswersBox.css';
import { IBirdData } from '../../store/reducers/game';
import { RootState } from '../../store/configureStore';
import { handleCorrectAnswer, handleIncorrectAnswer } from '../../store/actions/gameActions';

interface Props extends PropsFromRedux {
  stageBirdsList: IBirdData[];
  showBirdInfo: (index: number) => void;
}

const AnswersBox: FunctionComponent<Props> = ({
  stageBirdsList,
  showBirdInfo,
  correctAnswerId,
  hasAnsweredCorrectly,
  onCorrectAnswer,
  onIncorrectAnswer,
}) => {
  const handleAnswer = (birdId: number, arrayIndex: number) => {
    showBirdInfo(arrayIndex);

    if (hasAnsweredCorrectly) return;

    if (birdId === correctAnswerId) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }
  };

  return (
    <ListGroup>
      {stageBirdsList && Array.isArray(stageBirdsList)
        ? stageBirdsList.map(({ id, name }, index) => (
          <ListGroupItem
            className="AnswersBox-listItem"
            key={id}
            onClick={() => handleAnswer(id, index)}
          >
            {name}
          </ListGroupItem>
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

export default connector(AnswersBox);
