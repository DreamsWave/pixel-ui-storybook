import { useButtonState, useColorShading } from '../../../hooks';
import { ButtonBase, ButtonContent, ButtonTopBackground, ButtonBottomBackground } from '../common';
import ButtonOutline from '../../ButtonOutline';
import { ButtonProps } from '../Button';

export function BasicButton({
  fontColor = '#2e222f',
  borderColor = '#313638',
  backgroundColor = '#E9F5DB',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 4;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const backgroundColorShades = useColorShading(backgroundColor);
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
      >
        {children}
      </ButtonContent>
      <ButtonOutline
        colors={topOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="basic"
        position="top"
      />
      <ButtonTopBackground
        cornerLength={cornerLength}
        pixelSize={pixelSize}
        backgroundColor={backgroundColor}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <ButtonOutline
        colors={bottomOutlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type="basic"
        position="bottom"
      />
      <ButtonBottomBackground
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        backgroundColor={backgroundColorShades[1]}
      />
    </ButtonBase>
  );
}
