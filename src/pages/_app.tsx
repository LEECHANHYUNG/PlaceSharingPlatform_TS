import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import GlobalStyle from '../components/styled/globalStyled';
import { Provider } from 'react-redux';
import store from '../store';
import MainHeader from '../components/layout/MainHeader';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <MainHeader />
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
