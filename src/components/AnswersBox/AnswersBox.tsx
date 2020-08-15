import React, { FunctionComponent } from 'react';
import { IBirdData } from '../../store/reducers/game';

interface Props {
  stageBirdsList: IBirdData[];
}

const AnswersBox: FunctionComponent<Props> = ({ stageBirdsList }) => (
  <>
    {stageBirdsList && Array.isArray(stageBirdsList)
      ? stageBirdsList.map(({ name }, index) => <p>{name}</p>)
      : null}
  </>
);

export default AnswersBox;
