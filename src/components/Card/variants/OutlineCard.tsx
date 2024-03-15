import { CardProps } from '../Card';
import { CardBackground, CardBase, CardContent, CardOutline } from '../common';
import { useOutlineSVG } from '../hooks';

export function OutlineCard(props: CardProps) {
  const {
    borderColor = '#323353',
    backgroundColor = '#ffffff',
    fontColor = '#313638',
    pixelSize = 4,
    children,
  } = props;
  const cornerLength = pixelSize * 4;
  const borderSlice = 4;
  const fontSize = pixelSize * 8;
  const outlineSVG = useOutlineSVG({ type: 'outline', colors: [borderColor, backgroundColor] });
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
