import { ButtonBase, ButtonContent } from '../common';
import { useButtonState, useColorShading } from '../../../hooks';
import ButtonLayer from '../ButtonLayer';
import { ButtonProps } from '../../../types';
import { defaultButtonProps } from '../../../constants';

export const defaultBulkButtonProps = {
  ...defaultButtonProps,
  type: 'bulk',
  borderColor: '#fff',
  compact: true,
  offsetSidePixels: 1,
} as ButtonProps;

function BulkButton(props: ButtonProps) {
  const {
    fontColor,
    borderColor,
    backgroundColor,
    pixelSize,
    fontSize,
    uppercase,
    compact = true,
    textOutlineColor,
    offsetSidePixels,
    type,
    children,
  } = props;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
  const bottomBackgroundColor = backgroundColorShades[2];
  const topOutlineColors = [backgroundColorShades[3], borderColor];
  const bottomOutlineColors = [backgroundColorShades[1], backgroundColorShades[2], backgroundColorShades[1]];

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

BulkButton.defaultProps = defaultBulkButtonProps;

export default BulkButton;
