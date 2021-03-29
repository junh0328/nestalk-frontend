import produce from 'immer';
import { RoomListData } from '@src/types/chatting';
import { chatRoomType, CHATTING_ROOM_LIST_SUBMIT, CHATTING_ROOM_ADD_SUBMIT } from '../loadingType';
import {
  RoomList,
  LOAD_CHATTING_LIST_REQUEST,
  LOAD_CHATTING_LIST_SUCCESS,
  LOAD_CHATTING_LIST_FAILURE,
} from './roomList';
import { RoomAdd, CHATTING_ROOM_ADD_REQUEST, CHATTING_ROOM_ADD_SUCCESS, CHATTING_ROOM_ADD_FAILURE } from './roomAdd';

export const dumyRoomList = [
  {
    room_id: 1,
    room_name: 'kyungmin',
    type: 'individualChat',
    participant: [1, 2],
    last_chat: '확인 바랍니다',
    not_read_chat: 3,
    updatedAt: new Date().toString(),
  },
  {
    room_id: 2,
    room_name: 'hyojin',
    type: 'individualChat',
    participant: [1, 3, 4],
    last_chat: '테스트 입니다',
    not_read_chat: 1,
    updatedAt: new Date().toString(),
  },
];

export interface ChatRoomInitialState {
  //채팅방관련 상태저장 정보 여기에 작성
  roomListInfo: RoomListData[] | null;
  isLoading: {
    id: number | null;
    name: chatRoomType | null;
  };
}

const initialState: ChatRoomInitialState = {
  roomListInfo: [],
  isLoading: {
    id: null,
    name: null,
  },
};

type ReducerAction = RoomList | RoomAdd;

const chat = (state: ChatRoomInitialState = initialState, action: ReducerAction) =>
  produce(state, (draft: ChatRoomInitialState) => {
    switch (action.type) {
      //chatting room list
      case LOAD_CHATTING_LIST_REQUEST:
        draft.isLoading.name = CHATTING_ROOM_LIST_SUBMIT;
        break;
      case LOAD_CHATTING_LIST_SUCCESS:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        //roomListInfo 초기화 이후 push 작성하기
        draft.roomListInfo.push(action.data);
        break;
      case LOAD_CHATTING_LIST_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;

      //chatting room add
      case CHATTING_ROOM_ADD_REQUEST:
        draft.isLoading.name = CHATTING_ROOM_ADD_SUBMIT;
        break;
      case CHATTING_ROOM_ADD_SUCCESS:
      case CHATTING_ROOM_ADD_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;
    }
  });

export default chat;
