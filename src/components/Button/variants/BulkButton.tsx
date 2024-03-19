import { ButtonBase, ButtonContent } from '../common';
import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonProps } from '../Button';
import ButtonLayer from '../ButtonLayer';

export function BulkButton({
  fontColor = '#313638',
  borderColor = '#fff',
  backgroundColor = '#E9F5DB',
  pixelSize = 4,
  uppercase = true,
  children,
  compact = true,
  offsetSidePixels = 1,
  fontSize = 16,
  textOutlineColor = null,
  type,
}: ButtonProps) {
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
