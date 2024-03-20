import styled from 'styled-components';
import { getContrastColor } from '../../utils';

export type ButtonBaseProps = {
  pixelSize: number;
};
export const ButtonBase = styled.button<ButtonBaseProps>`
  font-family: 'Press Start 2P', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  display: inline-flex;
  background: transparent;
  border: none;
  padding: 0;
  margin-bottom: ${({ pixelSize }) => pixelSize * 6}px;
  cursor: pointer;
`;

export type ButtonContentProps = {
  fontColor: string;
  fontSize: number;
  backgroundColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
  children?: React.ReactNode;
  pixelSize: number;
  uppercase: boolean;
  compact?: boolean;
  textOutlineColor?: string | null;
};
export const ButtonContent = styled.span<ButtonContentProps>`
  z-index: 10;
  position: relative;
  top: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 400;
  white-space: nowrap;
  transition: all 200ms;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'initial')};
  text-shadow: none;
  padding: ${({ pixelSize, compact = false }) =>
    `${pixelSize * (compact ? 4 : 6)}px ${pixelSize * (compact ? 10 : 16)}px`};
  color: ${({ fontColor, backgroundColorShades }) =>
    fontColor ? fontColor : getContrastColor(backgroundColorShades[3])};
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
  ${({ textOutlineColor = '', pixelSize }) =>
    textOutlineColor &&
    `text-shadow: ${`-${pixelSize}px -${pixelSize}px 0 ${textOutlineColor},`}
        ${`${pixelSize}px -${pixelSize}px 0 ${textOutlineColor},`}
        ${`-${pixelSize}px ${pixelSize}px 0 ${textOutlineColor},`}
        ${`${pixelSize}px ${pixelSize}px 0 ${textOutlineColor};`};`}
`;
