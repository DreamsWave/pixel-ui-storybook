import { useEffect, useState } from 'react';
import { colorShading } from '../utils';
import { ButtonProps } from '../Button';
import { useButtonState } from '../hooks';
import {
  ButtonBase,
  ButtonContent,
  ButtonTopOutline,
  ButtonTopBackground,
  ButtonBottomOutline,
  ButtonBottomBackground,
} from '../common';
import { generateBasicTopOutlineSVG, generateBasicBottomOutlineSVG } from '../svgOutlines';

export function BasicButton({
  primaryColor = '#fdcbb0',
  fontColor = '#2e222f',
  borderColor = '#2e222f',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 4;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(colorShading(primaryColor));
  const [topOutlineSVG, setTopOutlineSVG] = useState<string>(
    generateBasicTopOutlineSVG({ colors: [primaryColorShades[4], primaryColorShades[2], borderColor] }),
  );
  const [bottomOutlineSVG, setBottomOutlineSVG] = useState<string>(
    generateBasicBottomOutlineSVG({ colors: [borderColor] }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    setTopOutlineSVG(
      generateBasicTopOutlineSVG({ colors: [primaryColorShades[4], primaryColorShades[2], borderColor] }),
    );
    setBottomOutlineSVG(generateBasicBottomOutlineSVG({ colors: [borderColor] }));
  }, [primaryColor, borderColor]);

  return (
    <ButtonBase
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      pixelSize={pixelSize}
    >
      <ButtonContent
        fontColor={fontColor}
        fontSize={fontSize}
        pixelSize={pixelSize}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        uppercase={uppercase}
      >
        {children}
      </ButtonContent>
      <ButtonTopOutline
        pixelSize={pixelSize}
        svg={topOutlineSVG}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonTopBackground
        cornerLength={cornerLength}
        pixelSize={pixelSize}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonBottomOutline pixelSize={pixelSize} svg={bottomOutlineSVG} />
      <ButtonBottomBackground
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
      />
    </ButtonBase>
  );
}
