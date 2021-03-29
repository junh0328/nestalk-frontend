import { END } from 'redux-saga';
import { GetServerSideProps } from 'next';

import wrapper from '@store/configureStore';
import { roomListRequest } from '@src/reducers/chat/roomList';

//화면 components
// export { default } from '@pages/Home';
// export { default } from '@pages/Home';
// export { default } from '@pages/Regists';
export { default } from '@pages/Email';

//ssr renderings
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch(roomListRequest(1));

  context.store.dispatch(END);
  await (context.store as any).sagaTask.toPromise();
});
