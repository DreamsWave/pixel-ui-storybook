import { useEffect, useState } from 'react';
import { createInlineSVG } from '../../../utils';
import { ButtonBase, ButtonContent } from '../common';
import { useButtonState, useColorShading } from '../../../hooks';
import ButtonLayer from '../ButtonLayer';
import { ButtonProps } from '../../../types';
import { COLORS, defaultButtonProps } from '../../../constants';

function generateBackgroundSVG(colors: string[]): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="4" height="4" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="m1 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
    <path d="m3 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
	</svg>	
	`;
  return createInlineSVG(svg);
}

export const defaultSquaredButtonProps = {
  ...defaultButtonProps,
  type: 'squared',
  textOutlineColor: COLORS[1],
  backgroundSecondaryColor: COLORS[2],
} as ButtonProps;

function SquaredButton(props: ButtonProps) {
  const {
    fontColor,
    borderColor,
    backgroundColor,
    pixelSize,
    fontSize,
    uppercase,
    compact,
    textOutlineColor,
    offsetSidePixels,
    children,
    backgroundSecondaryColor,
  } = props;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
  const backgroundSecondaryColorShades = useColorShading(backgroundSecondaryColor);
  const topOutlineColors = [backgroundSecondaryColorShades[2], borderColor];
  const bottomOutlineColors = [backgroundSecondaryColorShades[2], backgroundSecondaryColor, borderColor];

  const [backgroundSVG, setBackgroundSVG] = useState<string>(
    generateBackgroundSVG([backgroundColor, backgroundSecondaryColor]),
  );

  useEffect(() => {
    setBackgroundSVG(generateBackgroundSVG([backgroundColor, backgroundSecondaryColor]));
  }, [backgroundColor, backgroundSecondaryColor]);

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
        backgroundColorShades={backgroundColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        uppercase={uppercase}
        textOutlineColor={textOutlineColor}
        compact={compact}
      >
        {children}
      </ButtonContent>
      <ButtonLayer
        type="squared"
        position="bottom"
        backgroundColor={backgroundSecondaryColorShades[2]}
        outlineColors={bottomOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
      <ButtonLayer
        type="squared"
        position="top"
        backgroundColor={backgroundSecondaryColor}
        outlineColors={topOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
        backgroundSVG={backgroundSVG}
        offsetSidePixels={offsetSidePixels}
      />
    </ButtonBase>
  );
}

SquaredButton.defaultProps = defaultSquaredButtonProps;

export default SquaredButton;
