import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { darken } from 'polished';
import { colorShading, getContrastColor } from '../utils';
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
import { generateMinimalisticBottomOutlineSVG, generateMinimalisticTopOutlineSVG } from '../svgOutlines';

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
  const [topOutlineSVG, setTopOutlineSVG] = useState<string>(
    generateMinimalisticTopOutlineSVG({ colors: [secondaryColorShades[4], borderColor, primaryColorShades[4]] }),
  );
  const [bottomOutlineSVG, setBottomOutlineSVG] = useState<string>(
    generateMinimalisticBottomOutlineSVG({
      colors: [secondaryColorShades[1], borderColor],
    }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    const secColorShades = colorShading(secondaryColor);
    setSecondaryColorShades(secColorShades);
    setTopOutlineSVG(
      generateMinimalisticTopOutlineSVG({ colors: [secondaryColorShades[4], borderColor, primaryColorShades[4]] }),
    );
    setBottomOutlineSVG(
      generateMinimalisticBottomOutlineSVG({
        colors: [secondaryColorShades[1], borderColor],
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
        svg={topOutlineSVG}
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
      <ButtonBottomOutline svg={bottomOutlineSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        primaryColorShades={primaryColorShades}
        secondaryColorShades={secondaryColorShades}
        cornerLength={cornerLength}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}
