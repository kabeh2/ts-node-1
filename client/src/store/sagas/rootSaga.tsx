import { call, all } from 'redux-saga/effects';
import appSaga from './appSaga';

export default function* rootSaga() {
  yield all([call(appSaga)]);
}
