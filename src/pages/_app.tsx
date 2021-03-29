import React from 'react';
import { AppProps, AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '@theme/.';
import GlobalStyle from '@theme/globalStyle';
import wrapper from '@store/configureStore';

const KakaoMain = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>Kakaotalk</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
        ></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(KakaoMain);
