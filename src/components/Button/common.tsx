import styled from 'styled-components';
import { getContrastColor } from './utils';

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
  primaryColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
  children?: React.ReactNode;
  pixelSize: number;
  uppercase: boolean;
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
  padding: ${({ pixelSize }) => `${pixelSize * 6}px ${pixelSize * 16}px`};
  color: ${({ fontColor, primaryColorShades }) => (fontColor ? fontColor : getContrastColor(primaryColorShades[3]))};
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

export type ButtonTopOutlineProps = {
  pixelSize: number;
  svg: string;
  isMouseHover: boolean;
  isMouseClicked: boolean;
  primaryColorShades: string[];
};
export const ButtonTopOutline = styled.div<ButtonTopOutlineProps>`
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg }) => svg}) 3;
  border-width: ${({ pixelSize }) => pixelSize * 3}px;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
  ${({ isMouseHover }) => isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
  ${({ isMouseHover, isMouseClicked }) => isMouseHover && isMouseClicked && `filter: brightness(0.92) saturate(1.3);`}
`;

export type ButtonTopBackgroundProps = {
  cornerLength: number;
  pixelSize: number;
  primaryColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
};
export const ButtonTopBackground = styled.div<ButtonTopBackgroundProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 8;
  background-color: ${(props) => props.primaryColorShades[3]};
  clip-path: polygon(
    0 calc(0% + ${(props) => props.cornerLength}px),
    calc(0% + ${(props) => props.cornerLength}px) 0,
    calc(100% - ${(props) => props.cornerLength}px) 0,
    100% ${(props) => props.cornerLength}px,
    100% calc(100% - ${(props) => props.cornerLength}px),
    calc(100% - ${(props) => props.cornerLength}px) 100%,
    ${(props) => props.cornerLength}px 100%,
    0% calc(100% - ${(props) => props.cornerLength}px),
    0% ${(props) => props.cornerLength}px
  );
  transition: all 200ms;
  ${({ isMouseHover }) => isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
	${({ isMouseHover, isMouseClicked }) => isMouseHover && isMouseClicked && `filter: brightness(0.92) saturate(1.3);`}
`;

export type ButtonBottomOutlineProps = {
  pixelSize: number;
  svg: string;
};
export const ButtonBottomOutline = styled.div<ButtonBottomOutlineProps>`
  z-index: 7;
  position: absolute;
  bottom: -${({ pixelSize }) => pixelSize * 3}px;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg }) => svg}) 3;
  border-width: ${({ pixelSize }) => pixelSize * 3}px;
  transition: all 200ms;
`;

export type ButtonBottomBackgroundProps = {
  pixelSize: number;
  cornerLength: number;
  primaryColorShades: string[];
};
export const ButtonBottomBackground = styled.div<ButtonBottomBackgroundProps>`
  position: absolute;
  bottom: -${({ pixelSize }) => pixelSize * 3}px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 6;
  background-color: ${({ primaryColorShades }) => primaryColorShades[1]};
  clip-path: polygon(
    0 calc(0% + ${({ cornerLength }) => cornerLength}px),
    calc(0% + ${({ cornerLength }) => cornerLength}px) 0,
    calc(100% - ${({ cornerLength }) => cornerLength}px) 0,
    100% ${({ cornerLength }) => cornerLength}px,
    100% calc(100% - ${({ cornerLength }) => cornerLength}px),
    calc(100% - ${({ cornerLength }) => cornerLength}px) 100%,
    ${({ cornerLength }) => cornerLength}px 100%,
    0% calc(100% - ${({ cornerLength }) => cornerLength}px),
    0% ${({ cornerLength }) => cornerLength}px
  );
  transition: all 200ms;
`;
