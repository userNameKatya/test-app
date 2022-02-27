import React from 'react';
import './index.css';

type ClickCounterProps = {
  onClick: () => void;
  count: number;
};

export const ClickCounter = ({ onClick, count }: ClickCounterProps) => {
  return <div className="clickCounter" onClick={onClick}>{count}</div>
};
