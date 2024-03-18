import { ButtonProps } from '../Button';
import { useButtonState, useColorShading, useOutlineSVG } from '../hooks';
import {
  ButtonBase,
  ButtonContent,
  ButtonTopOutline,
  ButtonTopBackground,
  ButtonBottomOutline,
  ButtonBottomBackground,
  ButtonTopOutlineProps,
  ButtonTopBackgroundProps,
  ButtonBottomBackgroundProps,
  ButtonBottomOutlineProps,
  ButtonContentProps,
} from '../common';
import styled from 'styled-components';
import { colorToRGBA } from '../utils';
import { useEffect, useState } from 'react';

const ButtonContentStyled = styled(ButtonContent)<ButtonContentProps>`
  padding: ${({ pixelSize }) => pixelSize * 4}px ${({ pixelSize }) => pixelSize * 6}px;
`;

const ButtonTopOutlineStyled = styled(ButtonTopOutline)<ButtonTopOutlineProps>``;

const ButtonTopBackgroundStyled = styled(ButtonTopBackground)<ButtonTopBackgroundProps>`
  backdrop-filter: blur(${(props) => props.backgroundBlur}px);
`;

const ButtonBottomOutlineStyled = styled(ButtonBottomOutline)<ButtonBottomOutlineProps>``;

const ButtonBottomBackgroundStyled = styled(ButtonBottomBackground)<ButtonBottomBackgroundProps>`
  backdrop-filter: blur(${(props) => props.backgroundBlur}px);
`;

export type GlassmorphismButtonProps = ButtonProps & {
  backgroundTopAlpha?: number;
  backgroundBottomAlpha?: number;
  backgroundBlur?: number;
};

export function GlassmorphismButton({
  backgroundColor = '#ffffff',
  fontColor = '#2e222f',
  borderColor = '#313638',
  pixelSize = 4,
  uppercase = true,
  backgroundTopAlpha = 0.1,
  backgroundBottomAlpha = 0.3,
  backgroundBlur = 10,
  children,
}: GlassmorphismButtonProps) {
  const cornerLength = pixelSize * 3;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
  const [backgroundColorTop, setBackgroundColorTop] = useState<string>(
    colorToRGBA(backgroundColor, backgroundTopAlpha),
  );
  const [backgroundColorBottom, setBackgroundColorBottom] = useState<string>(
    colorToRGBA(backgroundColorShades[2], backgroundBottomAlpha),
  );
  const topOutlineSVG = useOutlineSVG({
    type: 'glassmorphism',
    colors: [borderColor],
  });
  const bottomOutlineSVG = useOutlineSVG({
    type: 'glassmorphism',
    colors: [borderColor],
  });

  useEffect(() => {
    setBackgroundColorTop(colorToRGBA(backgroundColor, backgroundTopAlpha));
    setBackgroundColorBottom(colorToRGBA(backgroundColorShades[2], backgroundBottomAlpha));
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
        fontColor={fontColor}
        fontSize={fontSize}
        pixelSize={pixelSize}
        backgroundColorShades={backgroundColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
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
        pixelSize={pixelSize}
        backgroundColor={backgroundColorTop}
        backgroundBlur={backgroundBlur}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonBottomOutlineStyled pixelSize={pixelSize} svg={bottomOutlineSVG} />
      <ButtonBottomBackgroundStyled
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        backgroundColor={backgroundColorBottom}
        backgroundBlur={backgroundBlur}
      />
    </ButtonBase>
  );
}
