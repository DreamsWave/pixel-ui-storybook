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
import { generateSquaredBottomOutlineSVG, generateSquaredTopOutlineSVG } from '../svgOutlines';

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
  const [backgroundSVG, setBackgroundSVG] = useState<string>(
    generateBackgroundSVG([primaryColorShades[3], primaryColorShades[6]]),
  );
  const [topOutlineSVG, setTopOutlineSVG] = useState<string>(
    generateSquaredTopOutlineSVG({ colors: [secondaryColorShades[3], borderColor] }),
  );
  const [bottomOutlineSVG, setBottomOutlineSVG] = useState<string>(
    generateSquaredBottomOutlineSVG({
      colors: [secondaryColorShades[4], secondaryColorShades[3], borderColor],
    }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    const secColorShades = colorShading(secondaryColor);
    setSecondaryColorShades(secColorShades);
    setTopOutlineSVG(generateSquaredTopOutlineSVG({ colors: [secondaryColorShades[3], borderColor] }));
    setBottomOutlineSVG(
      generateSquaredBottomOutlineSVG({
        colors: [secondaryColorShades[4], secondaryColorShades[3], borderColor],
      }),
    );
    setBackgroundSVG(generateBackgroundSVG([primColorShades[3], primColorShades[6]]));
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
        svg={topOutlineSVG}
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
      <ButtonBottomOutline svg={bottomOutlineSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        secondaryColorShades={secondaryColorShades}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}

function generateBackgroundSVG(colors: string[]): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="4" height="4" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="m1 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
    <path d="m3 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}
