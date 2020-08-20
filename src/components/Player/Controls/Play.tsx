import React, { FunctionComponent } from 'react';
import PlayCircleOutlineIcon from '../../../assets/icons/play_circle_outline-24px.svg';

import './PlayerButton.css';

interface Props {
  handleClick: () => void;
}

const Play: FunctionComponent<Props> = ({ handleClick }) => (
  <button className="Player-button" onClick={() => handleClick()} type="button">
    <PlayCircleOutlineIcon fill="#00BC8C" />
  </button>
);

export default Play;
