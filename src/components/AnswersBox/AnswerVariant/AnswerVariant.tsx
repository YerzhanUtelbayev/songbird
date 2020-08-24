import React, { FunctionComponent, useState, useEffect } from 'react';
import { ListGroupItem } from 'reactstrap';

import './AnswerVariant.css';

interface Props {
  title: string;
  handleClick: () => void;
  isStageOver: boolean;
  isCorrect: boolean;
  className?: string;
}

const AnswerVariant: FunctionComponent<Props> = ({
  title,
  handleClick,
  isStageOver,
  isCorrect,
  className,
}) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const styleNames = className ? [`${className}`] : [];

  const handleAnswerCheck = () => {
    handleClick();

    if (!isStageOver) {
      setChecked(true);
    }
  };

  const handleStylesChange = () => {
    const result = [...styleNames];
    let conditionalStyle = null;
    if (isChecked) {
      conditionalStyle = isCorrect ? 'AnswerVariant-correct' : 'AnswerVariant-incorrect';
    }
    return [...result, conditionalStyle].join(' ').trim();
  };

  return (
    <ListGroupItem className={`AnswerVariant ${handleStylesChange()}`} onClick={handleAnswerCheck}>
      {title}
    </ListGroupItem>
  );
};

export default AnswerVariant;
