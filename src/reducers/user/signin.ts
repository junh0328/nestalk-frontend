import { UserInfo } from '.';

export const SIGNIN_REQUEST = `user/SIGNIN` as const;
export const SIGNIN_SUCCESS = `user/SIGNIN_SUCCESS` as const;
export const SIGNIN_FAILURE = `user/SIGNIN_FAILURE` as const;
export const LOAD_USER = `user/LOAD_USER` as const;
export const LOGOUT = `user/LOGOUT` as const;

export const signInRequest = (email: string, password: string) => {
  return {
    type: SIGNIN_REQUEST,
    payload: { email, password },
  } as const;
};
export const signInSuccess = (token: string, user: UserInfo) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: { token, user },
  } as const;
};
export const signInFailure = (error: Error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: { error },
  } as const;
};
export const loadUser = (info: UserInfo) => {
  return {
    type: LOAD_USER,
    payload: { info },
  } as const;
};
export const logout = () => {
  return {
    type: LOGOUT,
  } as const;
};

export type SignInActions =
  | ReturnType<typeof signInRequest>
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInFailure>
  | ReturnType<typeof loadUser>
  | ReturnType<typeof logout>;
