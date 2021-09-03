import React, { FC } from 'react';
import { PrimaryButton, BaseButton } from './Button.styles';

type Props = {
  onClick: () => void,
  type: 'primary' | 'secondary',
  children: React.ReactNode
};

const Button: FC<Props> = ({ onClick, children, type }: Props) => {
  switch (type) {
    case 'primary':
      return <PrimaryButton type="button" onClick={onClick}>{children}</PrimaryButton>;
    default:
      return <BaseButton type="button" onClick={onClick}>{children}</BaseButton>;
  }
};

export default Button;
