//signup reducer
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' as const;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE' as const;

export const generateDummySUCCESS = () => {
  alert('회원가입 성공 로그인페이지로 이동합니다.');
};

export interface SignUpData {
  id: number;
  name: string;
  email: string;
  birthday: string;
  phone: string;
}

export interface SignUpRequest {
  type: typeof SIGNUP_REQUEST;
  data: SignUpData;
}

export interface SignUpSuccess {
  type: typeof SIGNUP_SUCCESS;
  data: SignUpData;
}

export interface SignUpFailure {
  type: typeof SIGNUP_FAILURE;
  error: string;
}

//signup request
export const signUpRequest = (data: SignUpData) => ({
  type: SIGNUP_REQUEST,
  data,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
  type: SIGNUP_FAILURE,
  error,
});

export type SignUp =
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>;
