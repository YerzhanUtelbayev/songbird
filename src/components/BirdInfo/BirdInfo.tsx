import React, { FunctionComponent } from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle, CardText,
} from 'reactstrap';

import { IBirdData } from '../../store/reducers/game';
import ImageBox from '../UI/ImageBox/ImageBox';

interface Props {
  birdData: IBirdData;
}

const BirdInfo: FunctionComponent<Props> = ({ birdData }) => {
  const {
    image, name, species, description,
  } = birdData;

  return (
    <Card>
      <div className="d-flex flex-row">
        <ImageBox image={image} title={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{species}</CardSubtitle>
        </CardBody>
      </div>
      <CardText>{description}</CardText>
    </Card>
  );
};

export default BirdInfo;
