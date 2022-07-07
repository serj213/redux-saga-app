import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from '../saga';

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);
