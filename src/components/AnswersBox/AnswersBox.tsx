import React, { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { IBirdData } from '../../store/reducers/game';

interface Props {
  stageBirdsList: IBirdData[];
}

const AnswersBox: FunctionComponent<Props> = ({ stageBirdsList }) => (
  <ListGroup>
    {stageBirdsList && Array.isArray(stageBirdsList)
      ? stageBirdsList.map(({ name }) => <ListGroupItem>{name}</ListGroupItem>)
      : null}
  </ListGroup>
);

export default AnswersBox;
