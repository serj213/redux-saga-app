import { combineReducers } from 'redux';
import { userReducer } from './user';
import { counterReducer } from './counter';

export const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
