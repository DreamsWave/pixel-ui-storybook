import styled from "styled-components";

import {
  createInlineSVG,
  colorShading,
  isContrastValid,
  getContrastColor,
} from "../../../utils";
import { useEffect, useState, MouseEvent } from "react";

type BaseButtonProps = {
  pixelSize: number;
};
const BaseButton = styled.button<BaseButtonProps>`
  font-family: "Press Start 2P", "Nunito Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  position: relative;
  display: inline-flex;
  background: transparent;
  border: none;
  padding: 0;
  margin-bottom: ${({ pixelSize }) => pixelSize * 6}px;
  cursor: pointer;
`;

type ContentProps = {
  fontColor: string;
  fontSize: number;
  primaryColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
  children?: React.ReactNode;
  pixelSize: number;
  uppercase: boolean;
};
const Content = styled.span<ContentProps>`
  z-index: 10;
  position: relative;
  top: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 400;
  padding: ${({ pixelSize }) => pixelSize * 6}px
    ${({ pixelSize }) => pixelSize * 16}px;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
  color: ${({ fontColor, primaryColorShades }) =>
    fontColor ? fontColor : getContrastColor(primaryColorShades[3])};
  white-space: nowrap;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

type Layer1Props = {
  pixelSize: number;
  svg: string;
  primaryColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
};
const Layer1 = styled.div<Layer1Props>`
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg }) => svg}) 3;
  border-width: ${({ pixelSize }) => pixelSize * 3}px;
  transition: all 200ms;
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
`;

type Layer2Props = {
  cornerLength: number;
  pixelSize: number;
  primaryColorShades: string[];
  isMouseHover: boolean;
  isMouseClicked: boolean;
};
const Layer2 = styled.div<Layer2Props>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 8;
  background-color: ${(props) => props.primaryColorShades[3]};
  clip-path: polygon(
    0 calc(0% + ${(props) => props.cornerLength}px),
    calc(0% + ${(props) => props.cornerLength}px) 0,
    calc(100% - ${(props) => props.cornerLength}px) 0,
    100% ${(props) => props.cornerLength}px,
    100% calc(100% - ${(props) => props.cornerLength}px),
    calc(100% - ${(props) => props.cornerLength}px) 100%,
    ${(props) => props.cornerLength}px 100%,
    0% calc(100% - ${(props) => props.cornerLength}px),
    0% ${(props) => props.cornerLength}px
  );
  transition: all 200ms;
  ${({ isMouseHover }) =>
    isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
  ${({ isMouseClicked, pixelSize }) => isMouseClicked && `top: ${pixelSize}px;`}
	${({ isMouseHover, isMouseClicked }) =>
    isMouseHover && isMouseClicked && `filter: brightness(0.92) saturate(1.3);`}
`;

type Layer3Props = {
  pixelSize: number;
  svg: string;
};
const Layer3 = styled.div<Layer3Props>`
  z-index: 7;
  position: absolute;
  bottom: -${({ pixelSize }) => pixelSize * 3}px;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-style: solid;
  border-color: #000;
  border-image: url(${({ svg }) => svg}) 3;
  border-width: ${({ pixelSize }) => pixelSize * 3}px;
  transition: all 200ms;
`;

type Layer4Props = {
  pixelSize: number;
  cornerLength: number;
  primaryColorShades: string[];
};
const Layer4 = styled.div<Layer4Props>`
  position: absolute;
  bottom: -${({ pixelSize }) => pixelSize * 3}px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 6;
  background-color: ${({ primaryColorShades }) => primaryColorShades[1]};
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
`;

export interface ButtonProps {
  primaryColor: string;
  fontColor: string;
  pixelSize: number;
  borderColor: string;
  uppercase: boolean;
  children?: React.ReactNode;
}
export function BasicButton({
  primaryColor = "#fdcbb0",
  fontColor = "#2e222f",
  borderColor = "#2e222f",
  pixelSize = 4,
  uppercase = true,
  children,
}: ButtonProps) {
  const cornerLength = pixelSize * 4;
  const fontSize = pixelSize * 8;
  const [primaryColorShades, setPrimaryColorShades] = useState<string[]>(
    colorShading(primaryColor)
  );
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const [isMouseClicked, setIsMouseClicked] = useState<boolean>(false);
  const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
    generateLayer1BorderImageSVG({ primaryColorShades, borderColor })
  );
  const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
    generateLayer3BorderImageSVG({ primaryColorShades, borderColor })
  );

  useEffect(() => {
    const primColorShades = colorShading(primaryColor);
    setPrimaryColorShades(primColorShades);
    setLayer1BorderImageSVG(
      generateLayer1BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
      })
    );
    setLayer3BorderImageSVG(
      generateLayer3BorderImageSVG({
        primaryColorShades: primColorShades,
        borderColor,
      })
    );
  }, [primaryColor, borderColor]);

  return (
    <BaseButton
      onMouseOver={(e: MouseEvent<HTMLButtonElement>) => {
        setIsMouseHover(true);
      }}
      onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
        setIsMouseHover(false);
      }}
      onMouseDown={(e: MouseEvent<HTMLButtonElement>) => {
        setIsMouseClicked(true);
      }}
      onMouseUp={(e: MouseEvent<HTMLButtonElement>) => {
        setIsMouseClicked(false);
      }}
      pixelSize={pixelSize}
    >
      <Content
        fontColor={fontColor}
        fontSize={fontSize}
        pixelSize={pixelSize}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
        uppercase={uppercase}
      >
        {children}
      </Content>
      <Layer1
        pixelSize={pixelSize}
        svg={layer1BorderImageSVG}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <Layer2
        cornerLength={cornerLength}
        pixelSize={pixelSize}
        primaryColorShades={primaryColorShades}
        isMouseHover={isMouseHover}
        isMouseClicked={isMouseClicked}
      />
      <Layer3 pixelSize={pixelSize} svg={layer3BorderImageSVG} />
      <Layer4
        pixelSize={pixelSize}
        cornerLength={cornerLength}
        primaryColorShades={primaryColorShades}
      />
    </BaseButton>
  );
}

function generateLayer1BorderImageSVG({
  primaryColorShades,
  secondaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades?: string[];
  borderColor: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
		<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="m5 5h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${primaryColorShades[4]}"/>
			<path d="m4 6h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1z" fill="${primaryColorShades[2]}"/>
			<path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm-3 4h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1z" fill="${borderColor}"/>
		</svg>
	`;
  return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG({
  primaryColorShades,
  secondaryColorShades,
  borderColor,
}: {
  primaryColorShades: string[];
  secondaryColorShades?: string[];
  borderColor?: string;
}): string {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${borderColor}"/>
	</svg>
	`;
  return createInlineSVG(svg);
}
