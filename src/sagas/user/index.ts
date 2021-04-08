import { all, fork } from 'redux-saga/effects';
import watchSignUp from './signup';
import authSaga from './signIn';

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(authSaga)]);
}
