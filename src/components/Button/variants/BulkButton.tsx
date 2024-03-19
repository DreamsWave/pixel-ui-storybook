import styled from 'styled-components';
import {
  ButtonBase,
  ButtonContent,
  ButtonContentProps,
  ButtonTopBackground,
  ButtonTopBackgroundProps,
  ButtonBottomBackground,
  ButtonBottomBackgroundProps,
} from '../common';
import { useButtonState, useColorShading } from '../../../hooks';
import ButtonOutline, { ButtonOutlineProps } from '../../ButtonOutline';
import { ButtonProps } from '../Button';

const ButtonContentStyled = styled(ButtonContent)<ButtonContentProps>`
  padding: ${({ pixelSize }) => `${pixelSize * 4}px ${pixelSize * 12}px`};
`;

const ButtonTopOutlineStyled = styled(ButtonOutline)<ButtonOutlineProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
`;

const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
`;

const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export function BulkButton({
  fontColor = '#313638',
  borderColor = '#fff',
  backgroundColor = '#E9F5DB',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 2;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
  const topOutlineColors = [backgroundColorShades[3], borderColor];
  const bottomOutlineColors = [backgroundColorShades[1], backgroundColorShades[2], backgroundColorShades[1]];

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
        backgroundColorShades={backgroundColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
        uppercase={uppercase}
      >
        {children}
      </ButtonContentStyled>
      <ButtonTopOutlineStyled
        colors={topOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="bulk"
        position="top"
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        backgroundColor={backgroundColor}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonOutline
        colors={bottomOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="bulk"
        position="bottom"
      />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        backgroundColor={backgroundColorShades[2]}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}
