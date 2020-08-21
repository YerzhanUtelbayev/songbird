import React, { FunctionComponent } from 'react';

import { IBirdData } from '../../store/reducers/game';
import BirdCard from '../UI/BirdCard/BirdCard';

interface Props {
  birdData: IBirdData;
}

const BirdInfo: FunctionComponent<Props> = ({ birdData }) => {
  const {
    image, name, species, description, audio,
  } = birdData;

  return (
    <BirdCard image={image} audio={audio} title={name} subtitle={species} cardText={description} />
  );
};

export default BirdInfo;
