import React from 'react';
import { BasicButton } from './variants/BasicButton';
import { BulkButton } from './variants/BulkButton';
import { SquaredButton } from './variants/SquaredButton';
import { MinimalisticButton } from './variants/MinimalisticButton';
import { GlassmorphismButton } from './variants/GlassmorphismButton';
import { ButtonType } from '../../types';

export type ButtonProps = {
  backgroundColor?: string;
  backgroundSecondaryColor?: string;
  borderColor?: string;
  fontColor?: string;
  type?: ButtonType;
  pixelSize?: number;
  uppercase?: boolean;
  children?: React.ReactNode;
};

const buttonFactory = (type: ButtonType = 'basic', props: React.PropsWithChildren<ButtonProps>) => {
  switch (type) {
    case 'basic':
      return <BasicButton {...props} />;
    case 'bulk':
      return <BulkButton {...props} />;
    case 'squared':
      return <SquaredButton {...props} />;
    case 'minimalistic':
      return <MinimalisticButton {...props} />;
    case 'glassmorphism':
      return <GlassmorphismButton {...props} />;
    default:
      throw new Error(`Invalid button type: ${type}`);
  }
};

export const Button: React.FC<ButtonProps> = (props) => {
  return buttonFactory(props.type, props);
};
