import { ButtonProps } from './types';

export const COLORS: string[] = [
  '#f7fbf2',
  '#E9F5DB',
  '#CFE1B9',
  '#B5C99A',
  '#97A97C',
  '#87986A',
  '#718355',
  '#4f5c3b',
];

export const defaultButtonProps: ButtonProps = {
  backgroundColor: COLORS[1],
  backgroundSecondaryColor: COLORS[4],
  borderColor: COLORS[6],
  fontColor: COLORS[6],
  fontSize: 32,
  type: 'basic',
  pixelSize: 4,
  uppercase: false,
  children: 'Button',
  textOutlineColor: null,
  compact: false,
  offsetSidePixels: 0,
};
