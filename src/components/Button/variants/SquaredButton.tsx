import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { darken, lighten } from 'polished';
import { createInlineSVG, colorShading, getContrastColor } from '../../../utils';
import { ButtonProps } from '../Button';
import {
  ButtonBase,
  ButtonBottomBackground,
  ButtonBottomBackgroundProps,
  ButtonContent,
  ButtonContentProps,
  ButtonTopBackground,
  ButtonTopBackgroundProps,
} from '../common';
import { useButtonState, useColorShading } from '../../../hooks';
import ButtonOutline from '../../ButtonOutline';

type ButtonContentStyledProps = ButtonContentProps & {
  borderColor: string;
};
const ButtonContentStyled = styled(ButtonContent)<ButtonContentStyledProps>`
  padding: ${({ pixelSize }) => pixelSize * 5}px ${({ pixelSize }) => pixelSize * 10}px;
  color: ${({ fontColor, backgroundColorShades, borderColor }) =>
    fontColor
      ? fontColor
      : getContrastColor(backgroundColorShades[3], darken(0, borderColor), lighten(0.6, borderColor))};
  text-shadow: ${({ pixelSize, backgroundColorShades }) =>
      `-${pixelSize}px -${pixelSize}px 0 ${backgroundColorShades[6]},`}
    ${({ pixelSize, backgroundColorShades }) => `${pixelSize}px -${pixelSize}px 0 ${backgroundColorShades[6]},`}
    ${({ pixelSize, backgroundColorShades }) => `-${pixelSize}px ${pixelSize}px 0 ${backgroundColorShades[6]},`}
    ${({ pixelSize, backgroundColorShades }) => `${pixelSize}px ${pixelSize}px 0 ${backgroundColorShades[6]};`};
`;

type ButtonTopBackgroundStyledProps = ButtonTopBackgroundProps & {
  backgroundSVG: string;
};
const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundStyledProps>`
  background-image: url(${({ backgroundSVG }) => backgroundSVG});
  background-size: ${({ pixelSize }) => pixelSize * 4}px ${({ pixelSize }) => pixelSize * 4}px;
`;

const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export function SquaredButton({
  backgroundColor = 'red',
  backgroundSecondaryColor = 'blue',
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
  const backgroundColorShades = useColorShading(backgroundColor);
  const backgroundSecondaryColorShades = useColorShading(backgroundSecondaryColor);
  const topOutlineColors = [backgroundSecondaryColorShades[3], borderColor];
  const bottomOutlineColors = [backgroundSecondaryColorShades[4], backgroundSecondaryColor, borderColor];

  const [backgroundSVG, setBackgroundSVG] = useState<string>(
    generateBackgroundSVG([backgroundColorShades[3], backgroundColorShades[6]]),
  );

  useEffect(() => {
    const primColorShades = colorShading(backgroundColor);
    setBackgroundSVG(generateBackgroundSVG([primColorShades[3], primColorShades[6]]));
  }, [backgroundColor]);

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
        backgroundColorShades={backgroundColorShades}
        borderColor={borderColor}
      >
        {children}
      </ButtonContentStyled>
      <ButtonOutline
        colors={topOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="squared"
        position="top"
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        backgroundSVG={backgroundSVG}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
        backgroundColor={backgroundColor}
      />
      <ButtonOutline
        colors={bottomOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="squared"
        position="bottom"
      />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        backgroundColor={backgroundSecondaryColor}
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
