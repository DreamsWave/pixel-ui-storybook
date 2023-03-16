import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createInlineSVG, colorShading } from '../../../utils';
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

export interface NeonCardProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  fontColor: string;
  pixelSize: number;
  children?: React.ReactNode;
}

export function NeonCard(props: NeonCardProps) {
  const {
    primaryColor = '#8fd3ff',
    secondaryColor = '#eaaded',
    backgroundColor = '#313638',
    fontColor = '#ffffff',
    pixelSize = 4,
    children,
  } = props;
  const cornerLength = pixelSize * 4;
  const borderSlice = 2;
  const fontSize = pixelSize * 8;
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [secondaryColorShades, setSecondaryColorShades] = useState<string[]>(colorShading(secondaryColor));
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColorShades, secondaryColorShades }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    const secColorShades = colorShading(secondaryColor);
    setPrimaryColorShades(primColorShades);
    setSecondaryColorShades(secColorShades);
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColorShades: primColorShades,
        secondaryColorShades: secColorShades,
      }),
    );
  }, [primaryColor, secondaryColor]);
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <Layer1 pixelSize={pixelSize} svg={layer1BorderImageSVG} borderSlice={borderSlice} />
      <Layer2 cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={backgroundColor} />
    </CardBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
  secondaryColorShades,
}: {
  primaryColorShades: string[];
  secondaryColorShades: string[];
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="6" height="6" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="m5 3h1v1h-1zm0-1h1v1h-1zm-2-2h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[1]}"/>
        <path d="m3 4h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${secondaryColorShades[3]}"/>
        <path d="m4 4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[3]}"/>
        <path d="m3 5h1v1h-1zm-1 0h1v1h-1zm-2-2h1v1h-1zm0-1h1v1h-1z" fill="${secondaryColorShades[1]}"/>
      </svg>
      `;
  return createInlineSVG(svg);
}
