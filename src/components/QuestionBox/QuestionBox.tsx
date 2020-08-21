import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/configureStore';
import BirdCard from '../UI/BirdCard/BirdCard';
import BirdDefaultImage from '../../assets/images/birds.webp';

interface Props extends PropsFromRedux {
  image: string;
  audio: string;
  title: string;
}

const QuestionBox: FunctionComponent<Props> = ({
  image, audio, title, hasAnsweredCorrectly,
}) => (
  <BirdCard
    image={hasAnsweredCorrectly ? image : BirdDefaultImage}
    audio={audio}
    title={hasAnsweredCorrectly ? title : '******'}
  />
);

const mapStateToProps = (state: RootState) => ({
  hasAnsweredCorrectly: state.game.hasAnsweredCorrectly,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(QuestionBox);
