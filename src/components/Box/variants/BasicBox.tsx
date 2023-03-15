import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createInlineSVG } from '../../../utils';

type BaseBoxProps = {
  pixelSize: number;
};
const BaseBox = styled.div<BaseBoxProps>`
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
const Content = styled.span<ContentProps>`
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
`;

type Layer1Props = {
  pixelSize: number;
  borderSlice: number;
  svg: string;
};
const Layer1 = styled.div<Layer1Props>`
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
  border-image: url(${({ svg, borderSlice }) => `${svg}) ${borderSlice}`};
  border-width: ${({ pixelSize, borderSlice }) => pixelSize * borderSlice}px;);
`;

type Layer2Props = {
  cornerLength: number;
  pixelSize: number;
  backgroundColor: string;
};
const Layer2 = styled.div<Layer2Props>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
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

export interface BasicBoxProps {
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  pixelSize: number;
  children?: React.ReactNode;
}

export function BasicBox(props: BasicBoxProps) {
  const {
    borderColor = '#323353',
    backgroundColor = '#ffffff',
    fontColor = '#313638',
    pixelSize = 4,
    children,
  } = props;
  const cornerLength = pixelSize * 4;
  const borderSlice = 4;
  const fontSize = pixelSize * 8;
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ borderColor, backgroundColor }),
  );

  useEffect(() => {
    setLayer1BorderImageSVG(generateLayer1BorderImageSVG({ borderColor, backgroundColor }));
  }, [borderColor, backgroundColor]);
  return (
    <BaseBox pixelSize={pixelSize}>
      <Content fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </Content>
      <Layer1 pixelSize={pixelSize} svg={layer1BorderImageSVG} borderSlice={borderSlice} />
      <Layer2 cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={backgroundColor} />
    </BaseBox>
  );
}

function generateLayer1BorderImageSVG({
  borderColor,
  backgroundColor,
}: {
  borderColor: string;
  backgroundColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="10" height="10" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="m5 8h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
        <path d="m6 9h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-1 0h1v1h-1zm-7 0h1v1h-1zm-1 0h1v1h-1zm9-1h1v1h-1zm-9 0h1v1h-1zm9-1h1v1h-1zm-9 0h1v1h-1zm9-1h1v1h-1zm-1 0h1v1h-1zm-7 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${backgroundColor}"/>
        </svg>
      `;
  return createInlineSVG(svg);
}
