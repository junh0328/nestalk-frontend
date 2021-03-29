import React, { useCallback } from 'react';
import Link from 'next/link';
import { MenuLayout, MenuItem } from './styled';
import { faUser, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RoomListData } from '@src/types/chatting';

interface MenuProps {
  roomList: Array<RoomListData>;
  logout: () => void;
}

const Menu: React.FC<MenuProps> = ({ roomList, logout }) => {
  const onLogout = useCallback(() => {
    //소켓연결 제거
    logout();
  }, []); //로그인 상태 변경 시

  return (
    <MenuLayout>
      <ul>
        <MenuItem>
          <li title="친구목록">
            <FontAwesomeIcon icon={faUser} />
            {/* 클릭 시 친구목록 컴포넌트 */}
          </li>
        </MenuItem>
        <MenuItem>
          <li title="채팅목록">
            <FontAwesomeIcon icon={faComment} />
            {/* 클릭 시 채팅목록 컴포넌트 */}
          </li>
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <li title="로그아웃" onClick={onLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </li>
        </MenuItem>
      </ul>
    </MenuLayout>
  );
};

export default Menu;
