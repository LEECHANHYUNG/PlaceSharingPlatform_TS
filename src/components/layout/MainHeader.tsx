import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/svg/logo.svg';
import { Header } from '../styled/sharedStyled';
const MainHeader = (): JSX.Element => {
  return (
    <Header>
      <Link href="/" className="logo">
        <Logo />
        <h2>PlaceSharing</h2>
      </Link>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link href="/auth/signin">로그인</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/auth/signup">회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default MainHeader;
