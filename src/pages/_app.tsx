import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import MainHeader from '../components/layout/MainHeader';
import GlobalStyle from '../components/styled/globalStyled';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <MainHeader />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
