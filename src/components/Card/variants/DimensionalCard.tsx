import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorShading, createInlineSVG } from '../../../utils';
import { CardBase, CardContent } from '../Card';

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

export interface DimensionalCardProps {
  primaryColor: string;
  borderColor: string;
  fontColor: string;
  pixelSize: number;
  children?: React.ReactNode;
}

export function DimensionalCard(props: DimensionalCardProps) {
  const { primaryColor = '#4d9be6', borderColor = '#323832', fontColor = '#ffffff', pixelSize = 4, children } = props;
  const cornerLength = pixelSize * 3;
  const borderSlice = 4;
  const fontSize = pixelSize * 8;
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColorShades, borderColor }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
      }),
    );
  }, [primaryColor, borderColor]);
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <Layer1 pixelSize={pixelSize} svg={layer1BorderImageSVG} borderSlice={borderSlice} />
      <Layer2 cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={primaryColorShades[3]} />
    </CardBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  borderColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="10" height="10" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="m8 2h1v1h-1zm-1-1h1v1h-1z" fill="#fff"/>
      <path d="m8 6h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-2-2h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[6]}"/>
      <path d="m7 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${primaryColorShades[1]}"/>
      <path d="m7 8h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm5-1h1v1h-1zm-6 0h1v1h-1zm7-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm7-1h1v1h-1zm-6 0h1v1h-1zm5-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
      <path d="m7 9h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-6 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${primaryColorShades[5]}"/>
    </svg>
  `;
  return createInlineSVG(svg);
}
