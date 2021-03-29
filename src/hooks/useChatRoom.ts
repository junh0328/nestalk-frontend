import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '@src/reducers/';

//ChatRoom List
export const useChatRoom = () => {
  const { roomListInfo } = useSelector((state: RootState) => state.chat, shallowEqual);
  return roomListInfo;
};
