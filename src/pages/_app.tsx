import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import GlobalStyle from '../components/styled/globalStyled';
import MainHeader from '../components/layout/MainHeader';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <MainHeader />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
