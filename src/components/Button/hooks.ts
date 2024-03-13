import { useState } from 'react';

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
