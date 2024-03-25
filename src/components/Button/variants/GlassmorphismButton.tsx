import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import { colorToRGBA } from '../../../utils';
import { useEffect, useState } from 'react';
import ButtonLayer from '../ButtonLayer';
import { COLORS, defaultButtonProps } from '../../../constants';
import { ButtonProps } from '../../../types';

export type GlassmorphismButtonProps = ButtonProps & {
  backgroundTopAlpha: number;
  backgroundBottomAlpha: number;
  backgroundBlur: number;
};

export const defaultGlassmorphismButtonProps = {
  ...defaultButtonProps,
  type: 'glassmorphism',
  backgroundTopAlpha: 0.3,
  backgroundBottomAlpha: 0.4,
  backgroundBlur: 10,
  uppercase: false,
  fontColor: '#ffffff',
  borderColor: COLORS[3],
  backgroundColor: COLORS[3],
} as GlassmorphismButtonProps;

function GlassmorphismButton(props: GlassmorphismButtonProps) {
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
    type,
    children,
    backgroundTopAlpha,
    backgroundBottomAlpha,
    backgroundBlur,
    isMouseHover: isMouseHoverProp,
    isMouseClicked: isMouseClickedProp,
    disabled,
  } = props;

  const buttonState = useButtonState({ isMouseClicked: isMouseClickedProp, isMouseHover: isMouseHoverProp });

  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } = disabled
    ? { ...buttonState, isMouseHover: false, isMouseClicked: false }
    : buttonState;

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
      disabled={disabled}
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
        type={type}
        position="bottom"
        backgroundColor={backgroundColorBottom}
        backgroundBlur={backgroundBlur}
        outlineColors={bottomOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
      <ButtonLayer
        type={type}
        position="top"
        backgroundColor={backgroundColorTop}
        backgroundBlur={backgroundBlur}
        outlineColors={topOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
        offsetSidePixels={offsetSidePixels}
      />
    </ButtonBase>
  );
}

GlassmorphismButton.defaultProps = defaultGlassmorphismButtonProps;

export default GlassmorphismButton;
