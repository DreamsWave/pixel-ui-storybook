import styled from 'styled-components';
import { createInlineSVG } from '../utils';
import { ButtonPositions, ButtonTypes } from '../types';
import { useButtonOutlineSVG } from '../hooks';
import svgButtonOutlines from '../svgButtonOutlines';

type ButtonOutlineBaseProps = {
  pixelSize: number;
  svg: string;
  borderImageSlice: number;
  isMouseClicked?: boolean;
  offsetFromTopPixels?: number;
};
export const ButtonOutlineBase = styled.div<ButtonOutlineBaseProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg }) => svg});
  border-image-slice: ${({ borderImageSlice }) => borderImageSlice};
  border-width: ${({ pixelSize }) => pixelSize * 3}px;
  transition: all 200ms;
`;

export const ButtonOutlineBaseTop = styled(ButtonOutlineBase)`
  z-index: 9;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

export const ButtonOutlineBaseBottom = styled(ButtonOutlineBase)`
  z-index: 7;
  top: auto;
  bottom: -${({ pixelSize, offsetFromTopPixels = 3 }) => pixelSize * offsetFromTopPixels}px;
`;

export type ButtonOutlineProps = {
  type: ButtonTypes;
  position: ButtonPositions;
  pixelSize: number;
  isMouseClicked: boolean;
  colors: string[];
};
function ButtonOutline({ type, position, pixelSize, isMouseClicked, colors }: ButtonOutlineProps) {
  const buttonOutlineConfig = svgButtonOutlines[type][position];
  const borderImageSlice = buttonOutlineConfig.borderImageSlice;
  const offsetFromTopPixels = buttonOutlineConfig.offsetFromTopPixels;
  const svg = useButtonOutlineSVG({ type, position, colors });
  const inlineSVG = createInlineSVG(svg);

  if (position === 'bottom') {
    return (
      <ButtonOutlineBaseBottom
        pixelSize={pixelSize}
        svg={inlineSVG}
        borderImageSlice={borderImageSlice}
        offsetFromTopPixels={offsetFromTopPixels}
      ></ButtonOutlineBaseBottom>
    );
  }

  return (
    <ButtonOutlineBaseTop
      pixelSize={pixelSize}
      svg={inlineSVG}
      borderImageSlice={borderImageSlice}
      isMouseClicked={isMouseClicked}
    ></ButtonOutlineBaseTop>
  );
}

export default ButtonOutline;
