import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import ButtonLayer from '../ButtonLayer';
import { ButtonProps } from '../../../types';
import { COLORS, defaultButtonProps } from '../../../constants';

export const defaultMinimalisticButtonProps = {
  ...defaultButtonProps,
  type: 'minimalistic',
  backgroundColor: '#fff',
  backgroundSecondaryColor: COLORS[2],
  compact: true,
} as ButtonProps;

function MinimalisticButton(props: ButtonProps) {
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
    isMouseHover: isMouseHoverProp,
    isMouseClicked: isMouseClickedProp,
    disabled,
  } = props;

  const buttonState = useButtonState({ isMouseClicked: isMouseClickedProp, isMouseHover: isMouseHoverProp });

  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } = disabled
    ? { ...buttonState, isMouseHover: false, isMouseClicked: false }
    : buttonState;

  const backgroundColorShades = useColorShading(backgroundColor);
  const backgroundSecondaryColorShades = useColorShading(backgroundSecondaryColor);
  const topOutlineColors = [backgroundSecondaryColorShades[4], borderColor, backgroundColor];
  const bottomOutlineColors = [backgroundSecondaryColorShades[1], borderColor];

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
        compact={compact}
        textOutlineColor={textOutlineColor}
      >
        {children}
      </ButtonContent>
      <ButtonLayer
        type="minimalistic"
        position="bottom"
        backgroundColor={backgroundSecondaryColor}
        outlineColors={bottomOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
      <ButtonLayer
        type="minimalistic"
        position="top"
        backgroundColor={backgroundColor}
        outlineColors={topOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
        offsetSidePixels={offsetSidePixels}
      />
    </ButtonBase>
  );
}

MinimalisticButton.defaultProps = defaultMinimalisticButtonProps;

export default MinimalisticButton;
