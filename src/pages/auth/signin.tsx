import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Email from '../../components/auth/Email';
import AuthHeader from '../../components/layout/AuthHeader';
import { SigninWrapper } from '../../components/styled/Auth.styles';

const signin = () => {
  return (
    <SigninWrapper>
      <Head>
        <title>Place Sharing - 로그인</title>
        <meta name="description" content={`공간 대여 플랫폼, 로그인`} />
      </Head>
      <header>
        <AuthHeader />
      </header>
      <section className="signInForm">
        <form>
          <Email />
          {/*<Password signIn={true} />
          <Button
            type="submit"
            onClick={loginHanlder}
            disabled={isLoading || !formIsValid}
          >
            로그인
          </Button>*/}
          <p className="navLink">
            계정이 없으신가요?<Link href="/auth/signup">회원가입</Link>
          </p>
          <p className="navLink">
            <Link href="/auth/findUserInfo">아이디/비밀번호 찾기</Link>
          </p>
        </form>
      </section>
    </SigninWrapper>
  );
};

export default signin;
