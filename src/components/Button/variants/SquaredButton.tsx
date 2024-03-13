import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { darken, lighten } from 'polished';
import { createInlineSVG, colorShading, getContrastColor } from '../utils';
import { ButtonProps } from '../Button';
import {
  ButtonBase,
  ButtonBottomBackground,
  ButtonBottomBackgroundProps,
  ButtonBottomOutline,
  ButtonContent,
  ButtonContentProps,
  ButtonTopBackground,
  ButtonTopBackgroundProps,
  ButtonTopOutline,
} from '../common';
import { useButtonState } from '../hooks';

type ButtonContentStyledProps = ButtonContentProps & {
  borderColor: string;
};
const ButtonContentStyled = styled(ButtonContent)<ButtonContentStyledProps>`
  padding: ${({ pixelSize }) => pixelSize * 5}px ${({ pixelSize }) => pixelSize * 10}px;
  color: ${({ fontColor, primaryColorShades, borderColor }) =>
    fontColor ? fontColor : getContrastColor(primaryColorShades[3], darken(0, borderColor), lighten(0.6, borderColor))};
  text-shadow: ${({ pixelSize, primaryColorShades }) => `-${pixelSize}px -${pixelSize}px 0 ${primaryColorShades[6]},`}
    ${({ pixelSize, primaryColorShades }) => `${pixelSize}px -${pixelSize}px 0 ${primaryColorShades[6]},`}
    ${({ pixelSize, primaryColorShades }) => `-${pixelSize}px ${pixelSize}px 0 ${primaryColorShades[6]},`}
    ${({ pixelSize, primaryColorShades }) => `${pixelSize}px ${pixelSize}px 0 ${primaryColorShades[6]};`};
`;

type ButtonTopBackgroundStyledProps = ButtonTopBackgroundProps & {
  backgroundSVG: string;
};
const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundStyledProps>`
  background-image: url(${({ backgroundSVG }) => backgroundSVG});
  background-size: ${({ pixelSize }) => pixelSize * 4}px ${({ pixelSize }) => pixelSize * 4}px;
`;

type ButtonBottomBackgroundStyledProps = ButtonBottomBackgroundProps & {
  secondaryColorShades: string[];
};
const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundStyledProps>`
  background-color: ${({ secondaryColorShades }) => secondaryColorShades[3]};
`;

export function SquaredButton({
  primaryColor = '#ebc3aa',
  secondaryColor = '#ab7968',
  fontColor = '#593e2d',
  borderColor = '#593e2d',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 4;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [secondaryColorShades, setSecondaryColorShades] = useState<string[]>(colorShading(secondaryColor));
  const [backgroundSVG, setBackgroundSVG] = useState<string>(generateBackgroundSVG(primaryColorShades));
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({
      primaryColorShades,
      secondaryColorShades,
      borderColor,
    }),
  );
  const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
    generateLayer3BorderImageSVG({
      primaryColorShades,
      secondaryColorShades,
      borderColor,
    }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    const secColorShades = colorShading(secondaryColor);
    setSecondaryColorShades(secColorShades);
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColorShades: primColorShades,
        secondaryColorShades: secColorShades,
        borderColor,
      }),
    );
    setLayer3BorderImageSVG(
      generateLayer3BorderImageSVG({
        primaryColorShades: primColorShades,
        secondaryColorShades: secColorShades,
        borderColor,
      }),
    );
    setBackgroundSVG(generateBackgroundSVG(primColorShades));
  }, [borderColor, primaryColor, secondaryColor]);

  return (
    <ButtonBase
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      pixelSize={pixelSize}
    >
      <ButtonContentStyled
        pixelSize={pixelSize}
        fontColor={fontColor}
        fontSize={fontSize}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
        uppercase={uppercase}
        primaryColorShades={primaryColorShades}
        borderColor={borderColor}
      >
        {children}
      </ButtonContentStyled>
      <ButtonTopOutline
        pixelSize={pixelSize}
        svg={layer1BorderImageSVG}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        backgroundSVG={backgroundSVG}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
        primaryColorShades={primaryColorShades}
      />
      <ButtonBottomOutline svg={layer3BorderImageSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        secondaryColorShades={secondaryColorShades}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}

function generateBackgroundSVG(primaryColorShades: string[]): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="4" height="4" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m1 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[3]}"/>
	 <path d="m3 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[6]}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}

function generateLayer1BorderImageSVG({
  secondaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${secondaryColorShades[3]}"/>
	 <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG({
  secondaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m6 5h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="${secondaryColorShades[4]}"/>
	 <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${secondaryColorShades[3]}"/>
	 <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}
