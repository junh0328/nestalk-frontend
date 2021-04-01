import { all, fork } from 'redux-saga/effects';
import watchSignUp from './signup';

//user redux middleware
export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
