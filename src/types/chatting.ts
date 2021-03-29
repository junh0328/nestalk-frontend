export type ChatType = 'individualChat' | 'groupChat';

//채팅방 리스트 목록
export interface RoomListData {
  room_id: number;
  room_name: string;
  type: ChatType | string;
  participant: number[]; //참여자 id를 받아옴
  last_chat: string;
  not_read_chat: number;
  updatedAt: Date;
}

//채팅방 생성
export interface CreateRoomData {
  my_id?: number;
  room_name: string;
  type: ChatType;
  participant: number[];
}
