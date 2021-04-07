import { all } from 'redux-saga/effects';
import authSaga from './signIn';

export default function* userSaga() {
  yield all([authSaga()]);
}
