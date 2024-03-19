export type ButtonTypes = 'basic' | 'bulk' | 'squared' | 'minimalistic' | 'glassmorphism';
export type ButtonPositions = 'top' | 'bottom';

export type ButtonOutlineTypes =
  | 'basic-top'
  | 'basic-bottom'
  | 'bulk-top'
  | 'bulk-bottom'
  | 'squared-top'
  | 'squared-bottom'
  | 'minimalistic-top'
  | 'minimalistic-bottom'
  | 'glassmorphism';

export type CardTypes = 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';

export type CardOutlineTypes = 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';

export type SVGOutlineProps = {
  colors: string[];
};

export type SVGButtonOutline = {
  generateSVG: (props: SVGOutlineProps) => string;
  borderImageSlice: number;
  offsetFromTopPixels?: number;
};

export type SVGButtonOutlinesType = {
  [K in ButtonTypes]: {
    [P in ButtonPositions]: SVGButtonOutline;
  };
};
