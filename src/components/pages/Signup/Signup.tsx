import React, { useCallback, useMemo, useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { mailJ, pwJ, nameJ, phoneJ, birthdayJ } from '@util/pattern';
import SignupStyle from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/reducers';
import { SIGNUP_REQUEST } from '@src/reducers/user/singup';
import 'antd/dist/antd.less';
import { message } from 'antd';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const style = useMemo(() => ({ width: 250, marginTop: 5, marginBottom: 5 }), []);
  const colorRed = useMemo(() => ({ color: 'red' }), []);
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setpasswordCheckError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      if (!email.match(mailJ)) {
        setEmailError(true);
      } else if (email.match(mailJ)) {
        setEmailError(false);
      }
    },
    [email, emailError],
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      if (!password.match(pwJ)) {
        setPasswordError(true);
      } else if (password.match(pwJ)) {
        setPasswordError(false);
      }
    },
    [password, passwordError],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setpasswordCheckError(e.target.value !== password);
    },
    [password, passwordCheckError],
  );

  const onChangeName = useCallback(
    (e) => {
      setName(e.target.value);
      if (!name.match(nameJ)) {
        setNameError(true);
      } else if (name.match(nameJ)) {
        setNameError(false);
      }
    },
    [name, nameError],
  );

  const onChangeBirthday = useCallback(
    (e) => {
      setBirthday(e.target.value);
      if (!birthday.match(birthdayJ)) {
        setBirthdayError(true);
      } else if (birthday.match(birthdayJ)) {
        setBirthdayError(false);
      }
    },
    [birthday],
  );

  const onChangePhone = useCallback(
    (e) => {
      setPhone(e.target.value);
      if (!phone.match(phoneJ)) {
        setPhoneError(true);
      } else if (phone.match(phoneJ)) {
        setPhoneError(false);
      }
    },
    [phone, phoneError],
  );

  const onSubmit = useCallback(() => {
    if (!emailError || !passwordError || !passwordCheckError || !nameError || !birthdayError || !phoneError) {
      message.info('회원가입 요청중')!;
      dispatch({
        type: SIGNUP_REQUEST,
        data: { email, name, password, birthday, phone },
      });
    } else {
      message.error('에러 메세지를 확인해주세요');
    }
  }, [emailError, passwordError, passwordCheckError, nameError, birthdayError, phoneError]);

  return (
    <>
      <SignupStyle />
      <div>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input
              style={style}
              name="user-email"
              type="email"
              value={email}
              required
              onChange={onChangeEmail}
              placeholder=" '@' 를 포함한 이메일을 입력해주세요"
            />
            {emailError && <ErrorMessage style={colorRed}>올바른 형식의 이메일을 입력하세요</ErrorMessage>}
          </div>

          <div>
            <label>비밀번호</label>
            <br />
            <Input
              style={style}
              type="password"
              value={password}
              required
              onChange={onChangePassword}
              placeholder="비밀번호는 8자 이상입니다."
            />
            {passwordError && <ErrorMessage style={colorRed}>올바른 형식의 비밀번호를 입력하세요</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="user-password2">비밀번호 확인</label>
            <br />
            <Input
              style={style}
              name="user-password-check"
              type="password"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
              placeholder="비밀번호는 8자 이상입니다."
            />
            {passwordCheckError && <ErrorMessage style={colorRed}>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="user-name">이름</label>
            <br />
            <Input
              style={style}
              name="user-name"
              value={name}
              required
              onChange={onChangeName}
              placeholder="사용하실 닉네임을 입력해주세요"
            />
            {nameError && <ErrorMessage style={colorRed}>이름은 한글만 사용 가능합니다.</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="user-birthday">생년월일</label>
            <br />
            <Input
              style={style}
              name="user-birthday"
              value={birthday}
              required
              onChange={onChangeBirthday}
              placeholder="6자리에 맞춰 입력해주세요 예) 970328"
            />
            {birthdayError && <ErrorMessage style={colorRed}>유효하지 않은 생년월일입니다.</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="user-phone">휴대전화</label>
            <br />
            <Input
              style={style}
              name="user-phone"
              value={phone}
              required
              onChange={onChangePhone}
              placeholder="(-)를 빼고 입력해주세요"
            />
            {phoneError && <ErrorMessage style={colorRed}>유효하지 않은 휴대폰 번호입니다.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;

/*
email, name, password, phone, birthday
*/
