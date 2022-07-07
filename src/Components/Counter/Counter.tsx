import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './counter.module.css';
import { asyncIncrementAction, asyncDecrimentAction } from '../../redux/Actions/counter';

import { useTypeSelector } from '../../hooks/useTypeSelector';

const Counter: React.FC = () => {
  const { value } = useTypeSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(asyncIncrementAction());
  };

  const decrimentHandler = () => {
    dispatch(asyncDecrimentAction());
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
