import styled from 'styled-components';
import { CardProps } from '../Card';
import { CardBackground, CardBase, CardContent, CardOutline } from '../common';
import { useColorShading, useOutlineSVG } from '../hooks';

const CardBackgroundStyled = styled(CardBackground)`
  left: 0px;
  width: 100%;
`;

export function NeonCard(props: CardProps) {
  const {
    primaryColor = '#8fd3ff',
    secondaryColor = '#eaaded',
    backgroundColor = '#313638',
    fontColor = '#ffffff',
    pixelSize = 4,
    children,
  } = props;
  const cornerLength = pixelSize * 4;
  const borderSlice = 2;
  const fontSize = pixelSize * 8;
  const primaryColorShades = useColorShading(primaryColor);
  const secondaryColorShades = useColorShading(secondaryColor);
  const outlineSVG = useOutlineSVG({
    type: 'neon',
    colors: [primaryColorShades[1], secondaryColorShades[3], primaryColorShades[3], secondaryColorShades[1]],
  });
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <CardOutline pixelSize={pixelSize} svg={outlineSVG} borderSlice={borderSlice} />
      <CardBackgroundStyled cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={backgroundColor} />
    </CardBase>
  );
}
