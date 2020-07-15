import { call, all } from 'redux-saga/effects';
import appSaga from './appSaga';

export default function* rootSage() {
  yield all([call(appSaga)]);
}
