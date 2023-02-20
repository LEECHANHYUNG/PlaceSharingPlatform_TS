import React, { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { InputWrapper } from '../styled/sharedStyled';

interface InputProps {
  type: string | null;
  name: string | null;
  placeholder: string | null;
  className: string;
  onChange: () => void;
  onBlur: () => void;
  required: true;
  value?: string | null;
  ref: HTMLInputElement;
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <InputWrapper
      type={props.type || ''}
      name={props.name || ''}
      placeholder={props.placeholder || ''}
      className={props.className}
      onChange={props.onChange || null}
      onBlur={props.onBlur || null}
      required={props.required || null}
      value={props.value || undefined}
      ref={ref || null}
    />
  )
);

export default Input;
