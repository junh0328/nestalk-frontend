import React, { memo, useEffect, useCallback } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import Menu from '../Menu';
import MainLayout from './styled';

import { useChatRoom } from '@src/hooks/useChatRoom';
import { useRootState } from '@src/hooks/useRootState';
import { roomListRequest } from '@src/reducers/chat/roomList';

interface AppLayouProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayouProps> = memo(({ children }) => {
  const dispatch = useDispatch();
  const roomListInfo = useChatRoom();

  const { info } = useRootState((state) => state.user); //현재 로그인 한 유저정보(채팅방리스트 컴포넌트로 옮길 예정)

  //테스트를 위해 작성(romeList 조회)
  useEffect(() => {
    //false
    if (info) {
      //loginPage redirect
      Router.push('/');
    } else {
      dispatch(roomListRequest(1)); //현재 로그인한 계정 id로 요청
    }
  }, [info]);

  const logout = useCallback(() => {}, []);

  return (
    <>
      <MainLayout>
        <Menu roomList={roomListInfo} logout={logout} />
        {children}
      </MainLayout>
    </>
  );
});

export default AppLayout;
