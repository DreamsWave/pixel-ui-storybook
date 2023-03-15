import { BasicBox } from './variants/BasicBox';
import { NeonBox } from './variants/NeonBox';

export interface BoxProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  variant: 'basic' | 'neon';
  pixelSize: number;
  children?: React.ReactNode;
}

export function Box(props: BoxProps) {
  const { variant = 'basic', children } = props;
  return (
    <>
      {variant === 'basic' && <BasicBox {...props}>{children}</BasicBox>}
      {variant === 'neon' && <NeonBox {...props}>{children}</NeonBox>}
    </>
  );
}
