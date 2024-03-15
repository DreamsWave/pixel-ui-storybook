import React from 'react';
import { BasicButton } from './variants/BasicButton';
import { BulkButton } from './variants/BulkButton';
import { SquaredButton } from './variants/SquaredButton';
import { MinimalisticButton } from './variants/MinimalisticButton';

export type ButtonVariant = 'basic' | 'bulk' | 'squared' | 'minimalistic';

export interface ButtonProps {
  primaryColor?: string;
  secondaryColor?: string;
  borderColor?: string;
  fontColor?: string;
  variant?: ButtonVariant;
  pixelSize?: number;
  uppercase?: boolean;
  children?: React.ReactNode;
}

const buttonFactory = (variant: ButtonVariant = 'basic', props: React.PropsWithChildren<ButtonProps>) => {
  switch (variant) {
    case 'basic':
      return <BasicButton {...props} />;
    case 'bulk':
      return <BulkButton {...props} />;
    case 'squared':
      return <SquaredButton {...props} />;
    case 'minimalistic':
      return <MinimalisticButton {...props} />;
    default:
      throw new Error(`Invalid button variant: ${variant}`);
  }
};

export const Button: React.FC<ButtonProps> = (props) => {
  return buttonFactory(props.variant, props);
};
