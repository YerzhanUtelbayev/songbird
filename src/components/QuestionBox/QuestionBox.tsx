import React, { FunctionComponent } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';

import './QuestionBox.css';

interface Props {
  image: string;
  audio: string;
  title: string;
}

const QuestionBox: FunctionComponent<Props> = ({ image, audio, title }) => (
  <Card className="d-flex flex-row">
    <div className="QuestionBox-imageBox">
      <CardImg src={image} alt={title} className="QuestionBox-image" />
    </div>
    <CardBody>
      <CardTitle>{title}</CardTitle>
    </CardBody>
  </Card>
);

export default QuestionBox;
