import { call, delay, put, takeLatest } from '@redux-saga/core/effects';
import {
  generateDummySUCCESS,
  SignUpData,
  SignUpRequest,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '@src/reducers/user/singup';

// function signUpAPI(data) {
//   //return axios.post('/api/v1/user/join', data);
// }

function* signUp(action: SignUpRequest) {
  // action.data = { email, password, name, birthday, phone }
  try {
    yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
      data: generateDummySUCCESS(), // 확인용 가짜 데이터
    });

    // 실제 사용할 데이터
    // const result = yield call(signUpAPI, action.data);
    // yield put({ type: SIGNUP_SUCCESS, data: result.data });
  } catch (e) {
    console.error(e);
    yield put({ type: SIGNUP_FAILURE, error: e.response.data });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default watchSignUp;
