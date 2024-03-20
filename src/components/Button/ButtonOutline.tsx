import styled from 'styled-components';
import { ButtonPosition, ButtonType } from '../../types';
export type ButtonOutlineProps = {
  type: ButtonType;
  position: ButtonPosition;
  pixelSize: number;
  isMouseClicked: boolean;
  colors: string[];
  svg: string;
  borderImageSlice: number;
  offsetFromTopPixels?: number;
  borderWidthPixels: number;
  offsetSidePixels?: number;
};

export const ButtonOutline = styled.div<ButtonOutlineProps>`
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
  border-width: ${({ pixelSize, borderWidthPixels = 3 }) => pixelSize * borderWidthPixels}px;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
  ${({ offsetSidePixels, pixelSize }) =>
    offsetSidePixels &&
    `width: calc(100% - ${pixelSize * (offsetSidePixels * 2)}px); left: ${pixelSize * offsetSidePixels}px;`}
`;

export const ButtonOutlineBottom = styled(ButtonOutline)`
  top: auto;
  bottom: -${({ pixelSize, offsetFromTopPixels = 3 }) => pixelSize * offsetFromTopPixels}px;
`;

export default ButtonOutline;
