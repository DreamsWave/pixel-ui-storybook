import styled from 'styled-components';
import ButtonOutline, { ButtonOutlineBottom } from './ButtonOutline';
import ButtonBackground, { ButtonBackgroundBottom } from './ButtonBackground';
import { ButtonPosition, ButtonType } from '../../types';
import svgButtonOutlines from '../../svgButtonOutlines';
import { useButtonOutlineSVG } from '../../hooks';
import { createInlineSVG } from '../../utils';

export const ButtonLayerBase = styled.div``;

export type ButtonLayerProps = {
  pixelSize?: number;
  outlineColors?: string[];
  backgroundColor?: string;
  backgroundSVG?: string;
  type?: ButtonType;
  position?: ButtonPosition;
  isMouseClicked?: boolean;
  isMouseHover?: boolean;
  offsetSidePixels?: number;
  backgroundBlur?: number;
};
function ButtonLayer({
  pixelSize = 4,
  outlineColors = ['000'],
  backgroundColor = '000',
  isMouseClicked = false,
  isMouseHover = false,
  type = 'basic',
  position = 'top',
  backgroundSVG = '',
  backgroundBlur = 0,
  offsetSidePixels = 0,
  ...props
}: ButtonLayerProps) {
  const {
    cornerLength,
    offsetFromTopPixels = 3,
    borderImageSlice,
    borderWidthPixels,
  } = svgButtonOutlines[type][position];
  const svg = useButtonOutlineSVG({ type, position, colors: outlineColors });
  const inlineSVG = createInlineSVG(svg);

  if (position === 'bottom') {
    return (
      <ButtonLayerBase {...props}>
        <ButtonBackgroundBottom
          cornerLength={cornerLength * pixelSize}
          pixelSize={pixelSize}
          backgroundColor={backgroundColor}
          backgroundBlur={backgroundBlur}
          isMouseHover={isMouseHover}
          isMouseClicked={isMouseClicked}
          offsetFromTopPixels={offsetFromTopPixels}
          offsetSidePixels={offsetSidePixels}
        />
        <ButtonOutlineBottom
          colors={outlineColors}
          pixelSize={pixelSize}
          isMouseClicked={isMouseClicked}
          type={type}
          position={position}
          svg={inlineSVG}
          borderImageSlice={borderImageSlice}
          borderWidthPixels={borderWidthPixels}
          offsetSidePixels={offsetSidePixels}
        />
      </ButtonLayerBase>
    );
  }

  return (
    <ButtonLayerBase {...props}>
      <ButtonBackground
        cornerLength={cornerLength * pixelSize}
        pixelSize={pixelSize}
        backgroundColor={backgroundColor}
        backgroundBlur={backgroundBlur}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        backgroundSVG={backgroundSVG}
        offsetSidePixels={offsetSidePixels}
      />
      <ButtonOutline
        colors={outlineColors}
        pixelSize={pixelSize}
        isMouseClicked={isMouseClicked}
        type={type}
        position={position}
        svg={inlineSVG}
        borderImageSlice={borderImageSlice}
        borderWidthPixels={borderWidthPixels}
        offsetSidePixels={offsetSidePixels}
      />
    </ButtonLayerBase>
  );
}

export default ButtonLayer;
