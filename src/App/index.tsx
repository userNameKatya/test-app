import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import { ClickCounter } from '../ClickCounter';

const STORAGE_KEY = 'click-count';

export const App = () => {
  const [count, setCount] = useState(Number(localStorage.getItem(STORAGE_KEY)));

  const clickHandler = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  return (
    <div className="app">
      <ClickCounter onClick={clickHandler} count={count} />
    </div>
  );
};
