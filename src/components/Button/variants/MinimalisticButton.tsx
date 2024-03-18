import styled from 'styled-components';
import { darken } from 'polished';
import { getContrastColor } from '../utils';
import { ButtonProps } from '../Button';
import { useButtonState, useColorShading, useOutlineSVG } from '../hooks';
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

const ButtonContentStyled = styled(ButtonContent)<ButtonContentProps>`
  padding: ${({ pixelSize }) => pixelSize * 4}px ${({ pixelSize }) => pixelSize * 10}px;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'initial')};
  color: ${({ fontColor, backgroundColorShades }) =>
    fontColor
      ? fontColor
      : getContrastColor(backgroundColorShades[4], darken(0.15, backgroundColorShades[0]), backgroundColorShades[6])};
  white-space: nowrap;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export function MinimalisticButton({
  backgroundColor = '#FFFFFF',
  backgroundSecondaryColor = '#CFE1B9',
  fontColor = '#718355',
  borderColor = '#718355',
  pixelSize = 4,
  uppercase = false,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 2;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
  const backgroundSecondaryColorShades = useColorShading(backgroundSecondaryColor);
  const topOutlineSVG = useOutlineSVG({
    position: 'top',
    type: 'minimalistic',
    colors: [backgroundSecondaryColorShades[4], borderColor, backgroundColor],
  });
  const bottomOutlineSVG = useOutlineSVG({
    position: 'bottom',
    type: 'minimalistic',
    colors: [backgroundSecondaryColorShades[1], borderColor],
  });

  return (
    <ButtonBase
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      pixelSize={pixelSize}
    >
      <ButtonContentStyled
        backgroundColorShades={backgroundColorShades}
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
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackgroundStyled
        backgroundColor={backgroundColor}
        cornerLength={cornerLength}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonBottomOutline svg={bottomOutlineSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        backgroundColor={backgroundSecondaryColor}
        cornerLength={cornerLength}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}
