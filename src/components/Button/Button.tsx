import React from 'react';
import { BasicButton } from './variants/BasicButton';
import { BulkButton } from './variants/BulkButton';
import { SquaredButton } from './variants/SquaredButton';
import { MinimalisticButton } from './variants/MinimalisticButton';

export const defaults = {
  backgroundColor: '#fdcbb0',
  borderColor: '#2e222f',
  fontColor: '#313638',
};

export interface ButtonProps {
  primaryColor?: string;
  secondaryColor?: string;
  borderColor?: string;
  fontColor?: string;
  variant?: 'basic' | 'bulk' | 'squared' | 'minimalistic';
  pixelSize?: number;
  uppercase?: boolean;
  children?: React.ReactNode;
}

const buttonFactory = (variant = 'basic', props: React.PropsWithChildren<ButtonProps>) => {
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

export const Button: React.FC<ButtonProps> = ({
  primaryColor = defaults.backgroundColor,
  secondaryColor = defaults.backgroundColor,
  borderColor = defaults.borderColor,
  fontColor = defaults.fontColor,
  variant = 'basic',
  uppercase = true,
  pixelSize = 4,
  children,
}) => {
  return buttonFactory(variant, {
    primaryColor,
    secondaryColor,
    borderColor,
    fontColor,
    pixelSize,
    uppercase,
    children,
  });
};
