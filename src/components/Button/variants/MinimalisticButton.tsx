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
  const primaryColorShades = useColorShading(primaryColor);
  const secondaryColorShades = useColorShading(secondaryColor);
  const topOutlineSVG = useOutlineSVG({
    position: 'top',
    type: 'minimalistic',
    colors: [secondaryColorShades[4], borderColor, primaryColorShades[4]],
  });
  const bottomOutlineSVG = useOutlineSVG({
    position: 'bottom',
    type: 'minimalistic',
    colors: [secondaryColorShades[1], borderColor],
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
