import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './counter.module.css';
import { incrementAction, decrimentAction } from '../../redux/Actions/counter';

import { useTypeSelector } from '../../hooks/useTypeSelector';

const Counter: React.FC = () => {
  const { value } = useTypeSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementAction());
  };

  const decrimentHandler = () => {
    dispatch(decrimentAction());
  };

  return (
    <div className={styles.row}>
      <button onClick={incrementHandler}>+</button>
      <p>{value}</p>
      <button onClick={decrimentHandler}>-</button>
    </div>
  );
};
export default Counter;
