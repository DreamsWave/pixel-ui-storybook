import { ButtonProps } from '../Button';
import { useButtonState, useColorShading, useOutlineSVG } from '../hooks';
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
  borderColor = '#313638',
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 4;
  const fontSize = pixelSize * 8;
  const { isMouseHover, isMouseClicked, handleMouseOver, handleMouseLeave, handleMouseDown, handleMouseUp } =
    useButtonState();
  const primaryColorShades = useColorShading(primaryColor);
  const topOutlineSVG = useOutlineSVG({
    position: 'top',
    type: 'basic',
    colors: [primaryColorShades[4], primaryColorShades[2], borderColor],
  });
  const bottomOutlineSVG = useOutlineSVG({
    position: 'bottom',
    type: 'basic',
    colors: [borderColor],
  });

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
        svg={topOutlineSVG}
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
      <ButtonBottomOutline pixelSize={pixelSize} svg={bottomOutlineSVG} />
      <ButtonBottomBackground
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
      />
    </ButtonBase>
  );
}
