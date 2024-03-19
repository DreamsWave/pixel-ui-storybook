import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import { colorToRGBA } from '../../../utils';
import { useEffect, useState } from 'react';
import { ButtonProps } from '../Button';
import ButtonLayer from '../ButtonLayer';

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
  compact = true,
  textOutlineColor = 'transparent',
  children,
}: GlassmorphismButtonProps) {
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const topOutlineColors = [borderColor];
  const bottomOutlineColors = [borderColor];
  const backgroundColorShades = useColorShading(backgroundColor);
  const [backgroundColorTop, setBackgroundColorTop] = useState<string>(
    colorToRGBA(backgroundColor, backgroundTopAlpha),
  );
  const [backgroundColorBottom, setBackgroundColorBottom] = useState<string>(
    colorToRGBA(backgroundColorShades[2], backgroundBottomAlpha),
  );

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
        type="glassmorphism"
        position="bottom"
        backgroundColor={backgroundColorBottom}
        backgroundBlur={backgroundBlur}
        outlineColors={bottomOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
      <ButtonLayer
        type="glassmorphism"
        position="top"
        backgroundColor={backgroundColorTop}
        backgroundBlur={backgroundBlur}
        outlineColors={topOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
    </ButtonBase>
  );
}
