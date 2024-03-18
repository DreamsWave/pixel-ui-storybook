import styled from 'styled-components';
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
import { useButtonState, useColorShading, useOutlineSVG } from '../hooks';

const ButtonContentStyled = styled(ButtonContent)<ButtonContentProps>`
  padding: ${({ pixelSize }) => `${pixelSize * 4}px ${pixelSize * 12}px`};
`;

const ButtonTopOutlineStyled = styled(ButtonTopOutline)<ButtonTopOutlineProps>`
  left: ${({ pixelSize }) => pixelSize}px;
  width: calc(100% - ${({ pixelSize }) => pixelSize * 2}px);
  border-image-slice: 5;
  border-width: ${({ pixelSize }) => pixelSize * 5}px;
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
  const topOutlineSVG = useOutlineSVG({
    position: 'top',
    type: 'bulk',
    colors: [backgroundColorShades[3], borderColor],
  });
  const bottomOutlineSVG = useOutlineSVG({
    position: 'bottom',
    type: 'bulk',
    colors: [backgroundColorShades[1], backgroundColorShades[2], backgroundColorShades[1]],
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
        pixelSize={pixelSize}
        svg={topOutlineSVG}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        backgroundColor={backgroundColor}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonBottomOutline svg={bottomOutlineSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        backgroundColor={backgroundColorShades[2]}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}
