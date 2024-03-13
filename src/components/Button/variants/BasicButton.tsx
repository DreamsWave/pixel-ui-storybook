import { useEffect, useState } from 'react';
import { createInlineSVG, colorShading } from '../utils';
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
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColorShades, borderColor }),
  );
  const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
    generateLayer3BorderImageSVG({ primaryColorShades, borderColor }),
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
      }),
    );
    setLayer3BorderImageSVG(
      generateLayer3BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
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
        svg={layer1BorderImageSVG}
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
      <ButtonBottomOutline pixelSize={pixelSize} svg={layer3BorderImageSVG} />
      <ButtonBottomBackground
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
      />
    </ButtonBase>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  borderColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
		<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="m5 5h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[4]}"/>
			<path d="m4 6h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1z" fill="${primaryColorShades[2]}"/>
			<path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm-3 4h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1z" fill="${borderColor}"/>
		</svg>
	`;
  return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG({
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades?: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
	</svg>
	`;
  return createInlineSVG(svg);
}
