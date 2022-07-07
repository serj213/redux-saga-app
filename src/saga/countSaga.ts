import { put, takeEvery } from 'redux-saga/effects';
import { incrementAction, decrimentAction } from '../redux/Actions/counter';
import { counterActionConstants } from '../types/counterTypes';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementAction());
}

function* decrimentWorker() {
  yield delay(1000);
  yield put(decrimentAction());
}

export function* counterWatcher() {
  yield takeEvery(counterActionConstants.ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(counterActionConstants.ASYNC_DECREMENT, decrimentWorker);
}
