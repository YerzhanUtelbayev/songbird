import React, { FunctionComponent } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import ImageBox from '../UI/ImageBox/ImageBox';
import Player from '../Player/Player';

interface Props {
  image: string;
  audio: string;
  title: string;
}

const QuestionBox: FunctionComponent<Props> = ({ image, audio, title }) => (
  <Card className="d-flex flex-row">
    <ImageBox image={image} title={title} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <Player audio={audio} />
    </CardBody>
  </Card>
);

export default QuestionBox;
