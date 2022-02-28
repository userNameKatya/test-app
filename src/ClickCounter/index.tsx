import React, { useCallback, useEffect, useState } from 'react';
import './index.css';

const STORAGE_KEY = 'click-count';

export const ClickCounter = () => {
  const [count, setCount] = useState(Number(localStorage.getItem(STORAGE_KEY)));

  const clickHandler = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  return <div className="clickCounter" onClick={clickHandler}>{count}</div>
};
