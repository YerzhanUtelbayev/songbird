import React, { FunctionComponent } from 'react';

import './ImageBox.css';
import Image from './Image';

interface Props {
  image: string;
  title: string;
  thumbnail?: string;
}

const ImageBox: FunctionComponent<Props> = ({ image, title, thumbnail }) => (
  <div className="ImageBox-container mr-3">
    <Image src={image} thumb={thumbnail} alt={title} />
  </div>
);

export default ImageBox;
