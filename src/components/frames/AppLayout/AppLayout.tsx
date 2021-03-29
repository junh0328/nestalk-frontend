import React, { memo, useCallback } from 'react';

import Menu from '../Menu';
import MainLayout from './styled';
import { useChatRoom } from '@src/hooks/useChatRoom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = memo(({ children }) => {
  const roomListInfo = useChatRoom();
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
