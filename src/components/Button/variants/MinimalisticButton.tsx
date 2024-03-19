import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent } from '../common';
import { ButtonProps } from '../Button';
import ButtonLayer from '../ButtonLayer';

export function MinimalisticButton({
  backgroundColor = '#FFFFFF',
  backgroundSecondaryColor = '#CFE1B9',
  fontColor = '#718355',
  borderColor = '#718355',
  pixelSize = 4,
  fontSize = 8,
  uppercase = false,
  compact = true,
  offsetSidePixels = 0,
  textOutlineColor = null,
  children,
}: ButtonProps) {
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
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
