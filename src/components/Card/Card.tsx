import styled from 'styled-components';
import { BasicCard } from './variants/BasicCard';
import { CyberCard } from './variants/CyberCard';
import { DimensionalCard } from './variants/DimensionalCard';
import { NeonCard } from './variants/NeonCard';
import { OutlineCard } from './variants/OutlineCard';

export interface CardProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  borderColor: string;
  shadowColor: string;
  fontColor: string;
  variant: 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';
  pixelSize: number;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const { variant = 'basic', children } = props;
  return (
    <>
      {variant === 'basic' && <BasicCard {...props}>{children}</BasicCard>}
      {variant === 'neon' && <NeonCard {...props}>{children}</NeonCard>}
      {variant === 'outline' && <OutlineCard {...props}>{children}</OutlineCard>}
      {variant === 'cyber' && <CyberCard {...props}>{children}</CyberCard>}
      {variant === 'dimensional' && <DimensionalCard {...props}>{children}</DimensionalCard>}
    </>
  );
}

type BaseCardProps = {
  pixelSize: number;
};

export const CardBase = styled.div<BaseCardProps>`
  font-family: 'Press Start 2P', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  display: inline-flex;
  background: transparent;
  border: none;
  padding: 0;
  margin-bottom: ${({ pixelSize }) => pixelSize * 6}px;
`;

type ContentProps = {
  fontColor: string;
  fontSize: number;
  children?: React.ReactNode;
  pixelSize: number;
};

export const CardContent = styled.span<ContentProps>`
  z-index: 10;
  position: relative;
  top: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 400;
  padding: ${({ pixelSize }) => pixelSize * 6}px;
  color: ${({ fontColor }) => fontColor};
  line-height: 1.5;
`;
