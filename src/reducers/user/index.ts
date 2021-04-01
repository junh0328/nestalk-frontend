import produce from 'immer';

import { SignIn, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './signin';
import { SignUp, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './singup';

export interface UserInfo {
  id: number;
  name: string;
  userId: string;
  gender: string;
  phone: string;
}

export interface UserInitialState {
  info: UserInfo | null;
}

const initialState: UserInitialState = {
  info: null,
};

type ReducerAction = SignIn | SignUp;

//모든 user 상태 처리
const user = (state: UserInitialState = initialState, action: ReducerAction) =>
  produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      case SIGNIN_REQUEST:
        draft.info = null;
        break;

      case SIGNUP_REQUEST:
        draft.info = null;
        break;
      case SIGNUP_SUCCESS:
        draft.info = null;
        break;
      case SIGNUP_FAILURE:
        draft.info = null;
        break;
      default:
        break;
    }
  });

export default user;
