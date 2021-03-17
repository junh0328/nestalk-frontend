import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    #__next{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
`;

const CardWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 20px;

  .title {
    margin-top: 20px;
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 90px;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 10px;
  cursor: pointer;

  .top {
    margin-top: 10px;
    color: black;
  }

  :first-child {
    border-bottom: none;
    height: 60px;
    cursor: auto;
  }

  :last-child {
    margin-top: 20px;
    border-bottom: none;
    height: 60px;
    font-size: 0.6rem;
    cursor: auto;
  }

  p {
    color: gray;
  }
`;

const Email = () => {
  return (
    <>
      <Global />
      <div style={{ textAlign: 'center', marginBottom: 30, fontSize: '2rem' }}> Kakao</div>
      <CardWrapper>
        <Card className="title">카카오 계정을 찾을 방법을 선택해주세요</Card>
        <Card onClick={() => alert('본인 인증으로 이동')}>
          <p className="top">본인 인증</p>
          <p style={{ marginTop: 20 }}>휴대폰에 등록된 본인 확인 정보로 찾습니다.</p>
        </Card>
        <Card onClick={() => alert('이메일 찾기로 이동')}>
          <p className="top">이메일로 찾기</p>
          <p style={{ marginTop: 20 }}>카카오 서비스에서 이용한 프로필 및 계정의 연락처 이메일로 계정을 찾습니다.</p>
        </Card>
        <Card className="footer">비즈니스 계정을 찾으시나요?</Card>
      </CardWrapper>
    </>
  );
};

export default Email;
