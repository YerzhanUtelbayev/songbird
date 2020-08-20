import React, { FunctionComponent } from 'react';
import PauseCircleOutlineIcon from '../../../assets/icons/pause_circle_outline-black-18dp.svg';

import './PlayerButton.css';

interface Props {
  handleClick: () => void;
}

const Pause: FunctionComponent<Props> = ({ handleClick }) => (
  <button className="Player-button" onClick={() => handleClick()} type="button">
    <PauseCircleOutlineIcon fill="#00BC8C" />
  </button>
);

export default Pause;
