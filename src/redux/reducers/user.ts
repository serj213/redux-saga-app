import { stateUserType, userFetchTypeAction, userTypeAction } from '../../types/userTypes';

const initialState: stateUserType = {
  user: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: userTypeAction) => {
  switch (action.type) {
    case userFetchTypeAction.FETCH_USER:
      return {
        loading: true,
      };

    case userFetchTypeAction.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case userFetchTypeAction.FETCH_USER_ERROR:
      return {
        user: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
