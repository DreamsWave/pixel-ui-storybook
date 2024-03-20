import React from 'react';
import { ButtonProps } from '../../types';
import { ButtonVariants } from './variants';

const Button: React.FC<ButtonProps> = (props) => {
  const ButtonComponent = ButtonVariants[props.type || 'basic'];
  return <ButtonComponent {...props} />;
};

export default Button;
