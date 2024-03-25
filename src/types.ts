export type ButtonType = 'basic' | 'bulk' | 'squared' | 'minimalistic' | 'glassmorphism';

export type ButtonPosition = 'top' | 'bottom';

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

export type CardType = 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';

export type CardOutlineType = 'basic' | 'neon' | 'outline' | 'cyber' | 'dimensional';

export type SVGOutlineProps = {
  colors: string[];
};

export type SVGButtonOutline = {
  generateSVG: (props: SVGOutlineProps) => string;
  borderImageSlice: number;
  borderWidthPixels: number;
  offsetFromTopPixels?: number;
  cornerLength: number;
  offsetSidePixels?: number;
};

export type SVGButtonOutlinesType = {
  [K in ButtonType]: {
    [P in ButtonPosition]: SVGButtonOutline;
  };
};

export type ButtonProps = {
  backgroundColor: string;
  backgroundSecondaryColor: string;
  borderColor: string;
  fontColor: string;
  fontSize: number;
  type: ButtonType;
  pixelSize: number;
  uppercase: boolean;
  children: React.ReactNode;
  textOutlineColor: string | null;
  compact: boolean;
  offsetSidePixels: number;
  isMouseHover: boolean;
  isMouseClicked: boolean;
  disabled: boolean;
};
