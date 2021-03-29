import Modal from '@src/components/frames/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { CardWrapper, Card, Global, Input } from './styled';

const Email = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const onClickPhoneModal = useCallback((prev) => {
    setShowPhoneModal((prev) => !prev);
  }, []);

  const onClickEmailModal = useCallback((prev) => {
    setShowEmailModal((prev) => !prev);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowEmailModal(false);
    setShowPhoneModal(false);
  }, []);

  return (
    <>
      <Global />
      <div style={{ textAlign: 'center', marginBottom: 30, fontSize: '2rem' }}> Kakao</div>
      <CardWrapper>
        <Card className="title">카카오 계정을 찾을 방법을 선택해주세요</Card>
        <Card onClick={onClickPhoneModal}>
          <p className="top">본인 인증</p>
          <p style={{ marginTop: 20 }}>휴대폰에 등록된 본인 확인 정보로 찾습니다.</p>
        </Card>
        <Card onClick={onClickEmailModal}>
          <p className="top">이메일로 찾기</p>
          <p style={{ marginTop: 20 }}>카카오 서비스에서 이용한 프로필 및 계정의 연락처 이메일로 계정을 찾습니다.</p>
        </Card>
        <Card className="footer">비즈니스 계정을 찾으시나요?</Card>
      </CardWrapper>
      {showPhoneModal && (
        <Modal show={showPhoneModal} onCloseModal={onCloseModal}>
          <form>
            <span>가입하신 휴대폰 번호를 입력해주세요</span>
            <div>
              <Input />
            </div>
            <button type="submit" style={{ marginTop: 200, width: 100, height: 30 }}>
              본인 인증하기
            </button>
          </form>
        </Modal>
      )}
      {showEmailModal && (
        <Modal show={showEmailModal} onCloseModal={onCloseModal}>
          <form>
            <span>가입하신 이메일 정확히 입력해주세요</span>
            <div>
              <Input />
            </div>
            <button type="submit" style={{ marginTop: 200, width: 100, height: 30 }}>
              본인 인증하기
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Email;
