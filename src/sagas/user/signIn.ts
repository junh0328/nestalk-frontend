import { SIGNIN_REQUEST } from '@src/reducers/user/signIn';
import { createRequestSaga } from '@src/util/saga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '@apis/auth';

const signInSaga = createRequestSaga(SIGNIN_REQUEST, authAPI.signIn);

export default function* authSaga() {
  yield takeLatest(SIGNIN_REQUEST, signInSaga);
}
