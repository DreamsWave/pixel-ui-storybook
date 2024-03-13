import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { darken } from 'polished';
import { createInlineSVG, colorShading, getContrastColor } from '../utils';
import { ButtonProps } from '../Button';
import { useButtonState } from '../hooks';
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

type ButtonContentStyledProps = ButtonContentProps & {
  secondaryColorShades: string[];
};
const ButtonContentStyled = styled(ButtonContent)<ButtonContentStyledProps>`
  padding: ${({ pixelSize }) => pixelSize * 4}px ${({ pixelSize }) => pixelSize * 10}px;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'initial')};
  color: ${({ fontColor, primaryColorShades, secondaryColorShades }) =>
    fontColor
      ? fontColor
      : getContrastColor(primaryColorShades[4], darken(0.15, secondaryColorShades[0]), secondaryColorShades[6])};
  white-space: nowrap;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
  background-color: ${({ primaryColorShades }) => primaryColorShades[4]};
`;

type ButtonBottomBackgroundStyledProps = ButtonBottomBackgroundProps & {
  secondaryColorShades: string[];
};
const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundStyledProps>`
  background-color: ${({ secondaryColorShades }) => secondaryColorShades[3]};
`;

export function MinimalisticButton({
  primaryColor = '#ffffff',
  secondaryColor = '#c7dcd0',
  fontColor = '#313638',
  borderColor = '#313638',
  pixelSize = 4,
  uppercase = false,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 2;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [secondaryColorShades, setSecondaryColorShades] = useState<string[]>(colorShading(secondaryColor));
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
        primaryColorShades={primaryColorShades}
        secondaryColorShades={secondaryColorShades}
        fontColor={fontColor}
        fontSize={fontSize}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
        pixelSize={pixelSize}
        uppercase={uppercase}
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
        primaryColorShades={primaryColorShades}
        cornerLength={cornerLength}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonBottomOutline svg={layer3BorderImageSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        primaryColorShades={primaryColorShades}
        secondaryColorShades={secondaryColorShades}
        cornerLength={cornerLength}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
  secondaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades: string[];
  borderColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
     <path d="m6 2h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1z" fill="${secondaryColorShades[4]}"/>
     <path d="m7 6h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
     <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm3-2h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[4]}"/>
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
  borderColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
     <path d="m5 6h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1z" fill="${secondaryColorShades[1]}"/>
     <path d="m6 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1z" fill="${borderColor}"/>
    </svg>
    `;
  return createInlineSVG(svg);
}
