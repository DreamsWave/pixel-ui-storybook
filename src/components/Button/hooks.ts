import { useEffect, useState } from 'react';
import { colorShading } from './utils';
import {
  generateBasicBottomOutlineSVG,
  generateBasicTopOutlineSVG,
  generateBulkBottomOutlineSVG,
  generateBulkTopOutlineSVG,
  generateGlassmorphismOutlineSVG,
  generateMinimalisticBottomOutlineSVG,
  generateMinimalisticTopOutlineSVG,
  generateSquaredBottomOutlineSVG,
  generateSquaredTopOutlineSVG,
} from './svgOutlines';
import { ButtonVariant } from './types';

export function useButtonState() {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const [isMouseClicked, setIsMouseClicked] = useState<boolean>(false);

  const handleMouseOver = () => setIsMouseHover(true);
  const handleMouseLeave = () => setIsMouseHover(false);
  const handleMouseDown = () => setIsMouseClicked(true);
  const handleMouseUp = () => setIsMouseClicked(false);

  return {
    isMouseHover,
    isMouseClicked,
    handleMouseOver,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
  };
}

export function useColorShading(color: string) {
  const [colorShades, setColorShades] = useState<string[]>(colorShading(color));

  useEffect(() => {
    setColorShades(colorShading(color));
  }, [color]);

  return colorShades;
}

export type useOutlineSVGProps = {
  position?: 'top' | 'bottom';
  type: ButtonVariant;
  colors: string[];
};
export function useOutlineSVG({ position = 'top', type = 'basic', colors = ['#000'] }: useOutlineSVGProps) {
  const generateSVG = () => {
    let svg = '';
    if (type === 'basic') {
      if (position === 'top') {
        svg = generateBasicTopOutlineSVG({ colors });
      } else if (position === 'bottom') {
        svg = generateBasicBottomOutlineSVG({ colors });
      }
    } else if (type === 'bulk') {
      if (position === 'top') {
        svg = generateBulkTopOutlineSVG({ colors });
      } else if (position === 'bottom') {
        svg = generateBulkBottomOutlineSVG({ colors });
      }
    } else if (type === 'squared') {
      if (position === 'top') {
        svg = generateSquaredTopOutlineSVG({ colors });
      } else if (position === 'bottom') {
        svg = generateSquaredBottomOutlineSVG({ colors });
      }
    } else if (type === 'minimalistic') {
      if (position === 'top') {
        svg = generateMinimalisticTopOutlineSVG({ colors });
      } else if (position === 'bottom') {
        svg = generateMinimalisticBottomOutlineSVG({ colors });
      }
    } else if (type === 'glassmorphism') {
      svg = generateGlassmorphismOutlineSVG({ colors });
    }
    return svg;
  };

  const [outlineSVG, setOutlineSVG] = useState<string>(generateSVG());

  useEffect(() => {
    setOutlineSVG(generateSVG());
  }, [position, type, colors]);

  return outlineSVG;
}
