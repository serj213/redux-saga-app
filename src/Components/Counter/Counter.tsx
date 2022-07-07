import React from 'react';
import styles from './counter.module.css';

import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const Counter: React.FC = () => {
  const { value } = useTypeSelector((state) => state.counter);

  console.log('value', value);

  return (
    <div className={styles.row}>
      <button>+</button>
      <p>{value}</p>
      <button>-</button>
    </div>
  );
};
export default Counter;
