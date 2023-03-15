import { BasicBox } from './variants/BasicBox';
import { NeonBox } from './variants/NeonBox';
import { WithShadowBox } from './variants/WithShadowBox';

export interface BoxProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  borderColor: string;
  shadowColor: string;
  fontColor: string;
  variant: 'basic' | 'neon' | 'withShadow';
  pixelSize: number;
  children?: React.ReactNode;
}

export function Box(props: BoxProps) {
  const { variant = 'basic', children } = props;
  return (
    <>
      {variant === 'basic' && <BasicBox {...props}>{children}</BasicBox>}
      {variant === 'neon' && <NeonBox {...props}>{children}</NeonBox>}
      {variant === 'withShadow' && <WithShadowBox {...props}>{children}</WithShadowBox>}
    </>
  );
}
