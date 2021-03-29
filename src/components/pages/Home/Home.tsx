import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import AppLayout from '@src/components/frames/AppLayout';
import { useRootState } from '@src/hooks/useRootState';

const Home = () => {
  const router = useRouter();
  const { info } = useRootState((state) => state.user); //현재 로그인 한 유저정보

  //테스트를 위해 작성(romeList 조회)
  useEffect(() => {
    //false
    if (info) {
      //loginPage redirect
      router.push('/');
    }
  }, [info]);

  return <AppLayout>testCode</AppLayout>;
};

export default Home;
