import produce from 'immer';

import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, LOAD_USER, LOGOUT, SignInActions } from './signin';
import { SignUp, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './singup';

export interface UserInfo {
  token: string;
  userid: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
}

export interface UserInitialState {
  info: UserInfo | null;
  authError: null | Error;
  signUpError: null | Error;
}

const initialState: UserInitialState = {
  info: null,
  authError: null,
  signUpError: null,
};

type ReducerAction = SignInActions | SignUp;

//모든 user 상태 처리
const user = (state: UserInitialState = initialState, action: ReducerAction) =>
  produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      case SIGNIN_REQUEST:
        draft.info = null;
        draft.authError = null;
        break;
      case SIGNIN_SUCCESS:
        draft.info = Object.assign({ token: action.payload.token }, action.payload.user);
        break;
      case SIGNIN_FAILURE:
        draft.authError = action.payload.error;
        break;
      case SIGNUP_REQUEST:
        draft.info = null;
        break;
      case SIGNUP_SUCCESS:
        draft.info = null;
        // signUp request를 통해 서버에서 데이터를 받아올 경우 추가로 넣어줘야 할 듯 합니다.
        break;
      case SIGNUP_FAILURE:
        draft.signUpError = action.error;
        break;
      case LOAD_USER:
        draft.info = action.payload.info;
        break;
      case LOGOUT:
        draft.info = null;
        break;
      default:
    }
  });

export default user;
