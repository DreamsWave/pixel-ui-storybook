import { CardProps } from '../Card';
import { CardBackground, CardBase, CardContent, CardOutline } from '../common';
import { useColorShading, useOutlineSVG } from '../hooks';

export function DimensionalCard(props: CardProps) {
  const {
    primaryColor = '#97A97C',
    borderColor = '#718355',
    fontColor = '#718355',
    backgroundColor = '#fff',
    pixelSize = 4,
    shadowColor = '#B5C99A',
    children,
  } = props;
  const cornerLength = pixelSize * 3;
  const borderSlice = 4;
  const fontSize = pixelSize * 8;
  const primaryColorShades = useColorShading(primaryColor);
  const outlineSVG = useOutlineSVG({
    type: 'dimensional',
    colors: ['#fff', primaryColorShades[6], primaryColorShades[1], borderColor, shadowColor],
  });
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <CardOutline pixelSize={pixelSize} svg={outlineSVG} borderSlice={borderSlice} />
      <CardBackground cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={backgroundColor} />
    </CardBase>
  );
}
