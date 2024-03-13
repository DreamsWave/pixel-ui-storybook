import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { createInlineSVG, colorShading } from '../utils';
import { ButtonProps } from '../Button';
import {
  ButtonBase,
  ButtonContent,
  ButtonContentProps,
  ButtonTopOutline,
  ButtonTopOutlineProps,
  ButtonTopBackground,
  ButtonTopBackgroundProps,
  ButtonBottomBackground,
  ButtonBottomOutline,
  ButtonBottomBackgroundProps,
} from '../common';
import { useButtonState } from '../hooks';

const ButtonContentStyled = styled(ButtonContent)<ButtonContentProps>`
  padding: ${({ pixelSize }) => `${pixelSize * 4}px ${pixelSize * 12}px`};
`;

const ButtonTopOutlineStyled = styled(ButtonTopOutline)<ButtonTopOutlineProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
  border-image: url(${({ svg }) => svg}) 5;
  border-width: ${({ pixelSize }) => pixelSize * 5}px;
`;

const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
`;

const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundProps>`
  background-color: ${({ primaryColorShades }) => primaryColorShades[2]};
`;

export function BulkButton({
  primaryColor = '#8ff8e2',
  fontColor = '#313638',
  borderColor = '#2e222f',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 2;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColorShades, borderColor }),
  );
  const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
    generateLayer3BorderImageSVG({ primaryColorShades, borderColor }),
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
    setLayer3BorderImageSVG(
      generateLayer3BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
      }),
    );
  }, [primaryColor, borderColor]);

  return (
    <ButtonBase
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      pixelSize={pixelSize}
    >
      <ButtonContentStyled
        fontColor={fontColor}
        fontSize={fontSize}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
        uppercase={uppercase}
      >
        {children}
      </ButtonContentStyled>
      <ButtonTopOutlineStyled
        pixelSize={pixelSize}
        svg={layer1BorderImageSVG}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonBottomOutline svg={layer3BorderImageSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
}: {
  primaryColorShades: string[];
  secondaryColorShades?: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="12" height="12" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m9 11h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-2-2h1v1h-1zm0-1h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm6-2h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[4]}"/>
	 <path d="m10 11h1v1h-1zm-9 0h1v1h-1zm10-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm0-1h1v1h-1zm0-4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-11 0h1v1h-1zm10-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-4 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#fff"/>
	</svg>
	`;
  return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG({
  primaryColorShades,
}: {
  primaryColorShades: string[];
  secondaryColorShades?: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m7 6h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1z" fill="${primaryColorShades[0]}"/>
	 <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm3-7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[2]}"/>
	 <path d="m6 7h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="${primaryColorShades[1]}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}
