import React from 'react';
import { CardWrapper, SharedProps } from '../styled/sharedStyled';

const Card = (props: SharedProps) => {
  return (
    <CardWrapper className={`${props.className ? props.className : ''}`}>
      {props.children}
    </CardWrapper>
  );
};

export default Card;
