import { useState, useEffect } from 'react';
import {
  generateBasicCardOutlineSVG,
  generateCyberCardOutlineSVG,
  generateDimensionalCardOutlineSVG,
  generateNeonCardOutlineSVG,
  generateOutlineCardOutlineSVG,
} from './svgOutlines';
import { CardVariant } from './Card';
import { colorShading } from './utils';

export function useColorShading(color: string) {
  const [colorShades, setColorShades] = useState<string[]>(colorShading(color));

  useEffect(() => {
    setColorShades(colorShading(color));
  }, [color]);

  return colorShades;
}

export type useOutlineSVGProps = {
  type: CardVariant;
  colors: string[];
};
export function useOutlineSVG({ type = 'basic', colors = ['#000'] }: useOutlineSVGProps) {
  const generateSVG = () => {
    let svg = '';
    if (type === 'basic') {
      svg = generateBasicCardOutlineSVG({ colors });
    } else if (type === 'cyber') {
      svg = generateCyberCardOutlineSVG({ colors });
    } else if (type === 'dimensional') {
      svg = generateDimensionalCardOutlineSVG({ colors });
    } else if (type === 'neon') {
      svg = generateNeonCardOutlineSVG({ colors });
    } else if (type === 'outline') {
      svg = generateOutlineCardOutlineSVG({ colors });
    }
    return svg;
  };

  const [outlineSVG, setOutlineSVG] = useState<string>(generateSVG());

  useEffect(() => {
    setOutlineSVG(generateSVG());
  }, [type, colors]);

  return outlineSVG;
}
