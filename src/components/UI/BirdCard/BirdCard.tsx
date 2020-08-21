import React, { FunctionComponent } from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle, CardText,
} from 'reactstrap';

import ImageBox from '../ImageBox/ImageBox';
import Player from '../../Player/Player';
import './BirdCard.css';

interface Props {
  image?: string;
  audio: string;
  title: string;
  subtitle?: string;
  cardText?: string;
}

const BirdCard: FunctionComponent<Props> = ({
  image, audio, title, subtitle, cardText,
}) => (
  <div className="BirdCard-box p-3 rounded">
    <Card className="BirdCard d-flex flex-row border-0">
      <ImageBox image={image} title={title} />
      <CardBody>
        <CardTitle className="h3">{title}</CardTitle>
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        <Player audio={audio} />
      </CardBody>
    </Card>
    {cardText && <CardText>{cardText}</CardText>}
  </div>
);

export default BirdCard;
