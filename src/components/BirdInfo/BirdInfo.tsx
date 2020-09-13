import React, { FunctionComponent } from 'react';

import { IBirdData } from '../../store/types/reducerTypes';
import BirdCard from '../UI/BirdCard/BirdCard';
import { PLAYER } from '../../utilities/constants';

interface Props {
  birdData: IBirdData;
}

const BirdInfo: FunctionComponent<Props> = ({ birdData }) => {
  const {
    image, thumbnail, name, species, description, audio,
  } = birdData;

  return (
    <BirdCard
      image={image}
      thumbnail={thumbnail}
      audio={audio}
      title={name}
      subtitle={species}
      cardText={description}
      parentType={PLAYER.INFO_BLOCK}
    />
  );
};

export default BirdInfo;
