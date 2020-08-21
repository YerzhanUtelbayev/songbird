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
  className?: string;
}

const BirdCard: FunctionComponent<Props> = ({
  image, audio, title, subtitle, cardText,
}) => (
  <div className="BirdCard-box">
    <Card className="BirdCard d-flex flex-row border-0">
      <ImageBox image={image} title={title} />
      <CardBody className="p-2">
        <CardTitle className="h3 ml-3">{title}</CardTitle>
        {subtitle && <CardSubtitle className="ml-3">{subtitle}</CardSubtitle>}
        <Player audio={audio} />
      </CardBody>
    </Card>
    {cardText && <CardText>{cardText}</CardText>}
  </div>
);

export default BirdCard;
