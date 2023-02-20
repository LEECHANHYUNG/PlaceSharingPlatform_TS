import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../store/hook';
import Input from '../layout/Input';
import { EmailWrapper } from '../styled/sharedStyled';

const Email = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [emailBlur, setEmailBlur] = useState(false);
  const emailIsValid = useAppSelector(
    (state) => state.authReducer.emailIsValid
  );
  const emailChangeHandler = () => {};
  const validateEmailHandler = () => {};

  return (
    <EmailWrapper>
      <div className="validity-comment">
        {!emailIsValid && emailBlur && '이메일 양식으로 입력 해주세요'}
      </div>
      <label htmlFor="email"></label>
      <Input
        type="email"
        name="email"
        placeholder="아이디(이메일 형식)*"
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        className={`${emailIsValid === false ? ' invalid' : ''}`}
        ref={emailInputRef}
        required
      />
    </EmailWrapper>
  );
};

export default Email;
