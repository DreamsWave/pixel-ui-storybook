import { BasicCard } from './variants/BasicCard';
import { CyberCard } from './variants/CyberCard';
import { DimensionalCard } from './variants/DimensionalCard';
import { NeonCard } from './variants/NeonCard';
import { OutlineCard } from './variants/OutlineCard';

export type CardVariant = 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';

export interface CardProps {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  fontColor?: string;
  variant?: CardVariant;
  pixelSize?: number;
  children?: React.ReactNode;
}

const cardFactory = (variant: CardVariant = 'basic', props: React.PropsWithChildren<CardProps>) => {
  switch (variant) {
    case 'basic':
      return <BasicCard {...props} />;
    case 'neon':
      return <NeonCard {...props} />;
    case 'outline':
      return <OutlineCard {...props} />;
    case 'cyber':
      return <CyberCard {...props} />;
    case 'dimensional':
      return <DimensionalCard {...props} />;
    default:
      throw new Error(`Invalid card variant: ${variant}`);
  }
};

export const Card: React.FC<CardProps> = (props) => {
  return cardFactory(props.variant, props);
};
