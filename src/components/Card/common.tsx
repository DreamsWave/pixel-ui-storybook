import styled from 'styled-components';
import { createInlineSVG } from './utils';

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

export type CardOutlineProps = {
  pixelSize: number;
  borderSlice: number;
  svg: string;
};

export const CardOutline = styled.div<CardOutlineProps>`
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
  border-image: url(${({ svg }) => createInlineSVG(svg)});
  border-image-slice: ${({ borderSlice }) => borderSlice};
  border-width: ${({ pixelSize, borderSlice }) => pixelSize * borderSlice}px;);
`;

export type CardBackgroundProps = {
  cornerLength: number;
  pixelSize: number;
  backgroundColor: string;
};

export const CardBackground = styled.div<CardBackgroundProps>`
  position: absolute;
  top: 0px;
  left: ${({ pixelSize }) => pixelSize}px;
  height: 100%;
  width: calc(100% - ${({ pixelSize }) => pixelSize}px);
  z-index: 8;
  background-color: ${({ backgroundColor }) => backgroundColor};
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
`;
