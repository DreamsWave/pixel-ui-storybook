import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import ButtonLayer from '../ButtonLayer';
import { ButtonProps } from '../../../types';
import { defaultButtonProps } from '../../../constants';

export const defaultBasicButtonProps = {
  ...defaultButtonProps,
  type: 'basic',
} as ButtonProps;

function BasicButton(props: ButtonProps) {
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
    isMouseHover: isMouseHoverProp,
    isMouseClicked: isMouseClickedProp,
    disabled,
  } = props;

  const buttonState = useButtonState({ isMouseClicked: isMouseClickedProp, isMouseHover: isMouseHoverProp });

  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } = disabled
    ? { ...buttonState, isMouseHover: false, isMouseClicked: false }
    : buttonState;

  const backgroundColorShades = useColorShading(backgroundColor);
  const bottomBackgroundColor = backgroundColorShades[1];
  const topOutlineColors = [backgroundColorShades[4], backgroundColorShades[2], borderColor];
  const bottomOutlineColors = [borderColor];

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
        type={type}
        position="bottom"
        backgroundColor={bottomBackgroundColor}
        outlineColors={bottomOutlineColors}
        isMouseClicked={isMouseClicked}
        isMouseHover={isMouseHover}
      />
      <ButtonLayer
        type={type}
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

BasicButton.defaultProps = defaultBasicButtonProps;

export default BasicButton;
