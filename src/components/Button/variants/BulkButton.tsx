import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { colorShading } from '../utils';
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
import { useButtonState } from '../hooks';
import { generateBulkBottomOutlineSVG, generateBulkTopOutlineSVG } from '../svgOutlines';

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
  background-color: ${({ primaryColorShades }) => primaryColorShades[2]};
`;

export function BulkButton({
  primaryColor = '#8ff8e2',
  fontColor = '#313638',
  borderColor = '#fff',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 2;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [topOutlineSVG, setTopOutlineSVG] = useState<string>(
    generateBulkTopOutlineSVG({ colors: [primaryColorShades[4], borderColor] }),
  );
  const [bottomOutlineSVG, setBottomOutlineSVG] = useState<string>(
    generateBulkBottomOutlineSVG({
      colors: [primaryColorShades[0], primaryColorShades[2], primaryColorShades[1]],
    }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    setTopOutlineSVG(generateBulkTopOutlineSVG({ colors: [primaryColorShades[4], borderColor] }));
    setBottomOutlineSVG(
      generateBulkBottomOutlineSVG({
        colors: [primaryColorShades[0], primaryColorShades[2], primaryColorShades[1]],
      }),
    );
  }, [primaryColor, borderColor]);

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
        primaryColorShades={primaryColorShades}
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
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        pixelSize={pixelSize}
      />
      <ButtonBottomOutline svg={bottomOutlineSVG} pixelSize={pixelSize} />
      <ButtonBottomBackgroundStyled
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
        pixelSize={pixelSize}
      />
    </ButtonBase>
  );
}
