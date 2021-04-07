import produce from 'immer';

import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, LOAD_USER, LOGOUT, SignInActions } from './signIn';

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
}

const initialState: UserInitialState = {
  info: null,
  authError: null,
};

type ReducerAction = SignInActions;

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
      case LOAD_USER:
        draft.info = action.payload.info;
        break;
      case LOGOUT:
        draft.info = null;
        break;
    }
  });

export default user;
