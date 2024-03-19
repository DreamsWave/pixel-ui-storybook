import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import { ButtonProps } from '../Button';
import ButtonLayer from '../ButtonLayer';

export function BasicButton({
  fontColor = '#2e222f',
  borderColor = '#313638',
  backgroundColor = '#E9F5DB',
  pixelSize = 4,
  fontSize = 16,
  uppercase = true,
  compact = false,
  textOutlineColor = null,
  offsetSidePixels = 0,
  type = 'basic',
  children,
}: ButtonProps) {
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
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
