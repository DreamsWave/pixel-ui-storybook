import { CardProps } from '../Card';
import { CardBase, CardContent, CardOutline } from '../common';
import { useOutlineSVG } from '../hooks';

export function CyberCard(props: CardProps) {
  const {
    primaryColor = '#ffffff',
    secondaryColor = '#fbff86',
    fontColor = '#ffffff',
    pixelSize = 4,
    children,
  } = props;
  const borderSlice = 8;
  const fontSize = pixelSize * 8;
  const outlineSVG = useOutlineSVG({ type: 'cyber', colors: [primaryColor, secondaryColor] });
  return (
    <CardBase pixelSize={pixelSize}>
      <CardContent fontColor={fontColor} fontSize={fontSize} pixelSize={pixelSize}>
        {children}
      </CardContent>
      <CardOutline pixelSize={pixelSize} svg={outlineSVG} borderSlice={borderSlice} />
    </CardBase>
  );
}
