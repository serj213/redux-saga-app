import { counterState, counterActionConstants, counterActionType } from '../../types/counterTypes';

const initialState: counterState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: counterActionType) => {
  switch (action.type) {
    case counterActionConstants.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case counterActionConstants.DECREMENT:
      return {
        ...state,
        value: state.value > 1 ? state.value - 1 : state.value,
      };

    default:
      return state;
  }
};
