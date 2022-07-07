import { all } from 'redux-saga/effects';
import { counterWatcher } from './countSaga';

export function* rootSaga() {
  yield all([counterWatcher()]);
}
