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
