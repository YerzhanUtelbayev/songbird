import React, { FunctionComponent } from 'react';
import { CardImg } from 'reactstrap';

import './ImageBox.css';

interface Props {
  image?: string;
  title?: string;
}

const ImageBox: FunctionComponent<Props> = ({ image, title }) => (
  <div className="ImageBox-container mr-3">
    <CardImg src={image} alt={title} className="ImageBox-image" />
  </div>
);

export default ImageBox;
