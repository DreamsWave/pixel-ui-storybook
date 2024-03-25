import { useEffect, useState } from 'react';
import { colorShading } from './utils';
import svgButtonOutlines from './svgButtonOutlines';
import { ButtonPosition, ButtonType } from './types';

export function useButtonState(props?: { isMouseHover?: boolean; isMouseClicked?: boolean }) {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(props?.isMouseHover ?? false);
  const [isMouseClicked, setIsMouseClicked] = useState<boolean>(props?.isMouseClicked ?? false);

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

export type useButtonOutlineSVGProps = {
  position?: ButtonPosition;
  type?: ButtonType;
  colors?: string[];
};

export function useButtonOutlineSVG({ position = 'top', type = 'basic', colors = ['#000'] }: useButtonOutlineSVGProps) {
  const generateSVG = () => {
    return svgButtonOutlines[type][position].generateSVG({ colors });
  };

  const [outlineSVG, setOutlineSVG] = useState<string>(generateSVG());

  useEffect(() => {
    setOutlineSVG(generateSVG());
  }, [colors]);

  return outlineSVG;
}
