import { CardProps } from '../Card';
import { CardBackground, CardBase, CardContent, CardOutline } from '../common';
import { useColorShading, useOutlineSVG } from '../hooks';

export function DimensionalCard(props: CardProps) {
  const { primaryColor = '#4d9be6', borderColor = '#323832', fontColor = '#ffffff', pixelSize = 4, children } = props;
  const cornerLength = pixelSize * 3;
  const borderSlice = 4;
  const fontSize = pixelSize * 8;
  const primaryColorShades = useColorShading(primaryColor);
  const outlineSVG = useOutlineSVG({
    type: 'dimensional',
    colors: ['#fff', primaryColorShades[6], primaryColorShades[1], borderColor, primaryColorShades[5]],
  });
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <CardOutline pixelSize={pixelSize} svg={outlineSVG} borderSlice={borderSlice} />
      <CardBackground cornerLength={cornerLength} pixelSize={pixelSize} backgroundColor={primaryColorShades[3]} />
    </CardBase>
  );
}
