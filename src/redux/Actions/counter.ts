import { counterActionConstants } from '../../types/counterTypes';

export const incrementAction = () => {
  return {
    type: counterActionConstants.INCREMENT,
  };
};

export const decrimentAction = () => {
  return {
    type: counterActionConstants.DECREMENT,
  };
};

export const asyncIncrementAction = () => {
  return {
    type: counterActionConstants.ASYNC_INCREMENT,
  };
};

export const asyncDecrimentAction = () => {
  return {
    type: counterActionConstants.ASYNC_DECREMENT,
  };
};
