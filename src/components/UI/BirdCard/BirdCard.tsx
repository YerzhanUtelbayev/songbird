import React, { FunctionComponent } from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

import ImageBox from '../ImageBox/ImageBox';
import Player from '../../Player/Player';
import './BirdCard.css';

interface Props {
  image?: string;
  audio: string;
  title: string;
  subtitle?: string;
}

const BirdCard: FunctionComponent<Props> = ({
  image, audio, title, subtitle,
}) => (
  <Card className="d-flex flex-row BirdCard-box">
    <ImageBox image={image} title={title} />
    <CardBody>
      <CardTitle className="h3">{title}</CardTitle>
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      <Player audio={audio} />
    </CardBody>
  </Card>
);

export default BirdCard;
