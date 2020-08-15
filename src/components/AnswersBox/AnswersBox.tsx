import React, { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { IBirdData } from '../../store/reducers/game';

interface Props {
  stageBirdsList: IBirdData[];
  showBirdInfo: (index: number) => void;
}

const AnswersBox: FunctionComponent<Props> = ({
  stageBirdsList,
  showBirdInfo,
}) => (
  <ListGroup>
    {stageBirdsList && Array.isArray(stageBirdsList)
      ? stageBirdsList.map(({ id, name }, index) => (
        <ListGroupItem key={id} onClick={() => showBirdInfo(index)}>
          {name}
        </ListGroupItem>
      ))
      : null}
  </ListGroup>
);

export default AnswersBox;
