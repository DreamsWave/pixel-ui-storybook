import styled from 'styled-components';

export type ButtonBackgroundProps = {
  cornerLength: number;
  pixelSize: number;
  backgroundColor: string;
  backgroundBlur?: number;
  isMouseHover: boolean;
  isMouseClicked: boolean;
  offsetFromTopPixels?: number;
  backgroundSVG?: string;
  offsetSidePixels?: number;
};
export const ButtonBackground = styled.div<ButtonBackgroundProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  backdrop-filter: none;
  clip-path: polygon(
    0 calc(0% + ${({ cornerLength }) => cornerLength}px),
    calc(0% + ${({ cornerLength }) => cornerLength}px) 0,
    calc(100% - ${({ cornerLength }) => cornerLength}px) 0,
    100% ${({ cornerLength }) => cornerLength}px,
    100% calc(100% - ${({ cornerLength }) => cornerLength}px),
    calc(100% - ${({ cornerLength }) => cornerLength}px) 100%,
    ${({ cornerLength }) => cornerLength}px 100%,
    0% calc(100% - ${({ cornerLength }) => cornerLength}px),
    0% ${({ cornerLength }) => cornerLength}px
  );
  transition: all 200ms;
  ${({ isMouseHover }) => isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
	${({ isMouseHover, isMouseClicked }) => isMouseHover && isMouseClicked && `filter: brightness(0.92) saturate(1.3);`}
	${({ backgroundSVG, pixelSize }) =>
    backgroundSVG && `background-image: url(${backgroundSVG}); background-size: ${pixelSize * 4}px ${pixelSize * 4}px;`}
    ${({ offsetSidePixels, pixelSize }) =>
    offsetSidePixels &&
    `width: calc(100% - ${pixelSize * (offsetSidePixels * 2)}px); left: ${pixelSize * offsetSidePixels}px;`}
  ${({ backgroundBlur }) => backgroundBlur && `backdrop-filter: blur(${backgroundBlur}px);`}
`;

export const ButtonBackgroundBottom = styled(ButtonBackground)`
  top: auto;
  bottom: -${({ offsetFromTopPixels = 3, pixelSize }) => offsetFromTopPixels * pixelSize}px;
`;

export default ButtonBackground;
