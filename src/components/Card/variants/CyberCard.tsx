import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createInlineSVG } from '../../../utils';
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

export interface CyberCardProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  fontColor: string;
  pixelSize: number;
  children?: React.ReactNode;
}

export function CyberCard(props: CyberCardProps) {
  const {
    primaryColor = '#ffffff',
    secondaryColor = '#fbff86',
    fontColor = '#ffffff',
    pixelSize = 4,
    children,
  } = props;
  const borderSlice = 8;
  const fontSize = pixelSize * 8;
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColor, secondaryColor }),
  );

  useEffect(() => {
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColor,
        secondaryColor,
      }),
    );
  }, [primaryColor, secondaryColor]);
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <Layer1 pixelSize={pixelSize} svg={layer1BorderImageSVG} borderSlice={borderSlice} />
    </CardBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColor,
  secondaryColor,
}: {
  primaryColor: string;
  secondaryColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="38" height="38" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="m34 36h1v1h-1zm1-1h1v1h-1zm-33-4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm5-3h1v1h-1zm24-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1z" fill="${primaryColor}"/>
        <path d="m31 37h1v1h-1zm0-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm27-1h1v1h-1zm-25 0h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm32-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-31 0h1v1h-1zm32-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm3-1h1v1h-1zm-4 0h1v1h-1zm-29 0h1v1h-1zm-1 0h1v1h-1zm34-1h1v1h-1zm-1 0h1v1h-1zm-31 0h1v1h-1zm-2 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${secondaryColor}"/>
      </svg>
      `;
  return createInlineSVG(svg);
}
