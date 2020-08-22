import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/configureStore';
import BirdCard from '../UI/BirdCard/BirdCard';
import BirdDefaultImage from '../../assets/images/birds.webp';
import './QuestionBox.css';
import { PLAYER } from '../../utilities/constants';

interface Props extends PropsFromRedux {
  image: string;
  audio: string;
  title: string;
}

const QuestionBox: FunctionComponent<Props> = ({
  image, audio, title, hasAnsweredCorrectly,
}) => (
  <div className="QuestionBox p-4 rounded">
    <BirdCard
      image={hasAnsweredCorrectly ? image : BirdDefaultImage}
      audio={audio}
      title={hasAnsweredCorrectly ? title : '******'}
      parentType={PLAYER.QUESTION_BLOCK}
    />
  </div>
);

const mapStateToProps = (state: RootState) => ({
  hasAnsweredCorrectly: state.game.hasAnsweredCorrectly,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(QuestionBox);
