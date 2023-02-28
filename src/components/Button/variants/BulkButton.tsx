import styled from "styled-components";

import {
	createInlineSVG,
	colorShading,
	isContrastValid,
	getContrastColor,
} from "../../../utils";
import { useEffect, useState, MouseEvent } from "react";

const BaseButton = styled.button`
	position: relative;
	display: inline-flex;
	background: transparent;
	border: none;
	padding: 0;
	margin-bottom: 8px;
	cursor: pointer;
`;

type ContentProps = {
	fontColor: string;
	fontBold: boolean;
	fontSize: number;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
	children?: React.ReactNode;
};
const Content = styled.span<ContentProps>`
	z-index: 10;
	position: relative;
	top: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => props.fontSize}px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 600 : 400)};
	padding: 0.8em 2em;
	text-transform: uppercase;
	color: ${(props) =>
		isContrastValid(props.fontColor, props.backgroundColorShades[3])
			? props.fontColor
			: getContrastColor(props.backgroundColorShades[3])};
	white-space: nowrap;
	transition: all 200ms;
	${(props) => props.isMouseClicked && `top: 3px;`}
`;

type Layer1Props = {
	borderWidth: number;
	scale: number;
	svg: string;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
};
const Layer1 = styled.div<Layer1Props>`
	z-index: 9;
	position: absolute;
	top: ${(props) => props.scale * 0.27}px;
	left: ${(props) => props.scale * 0.955}px;
	width: calc(100% - ${(props) => props.scale * 1.9}px);
	height: 100%;
	box-sizing: border-box;
	background-color: transparent;
	border-style: solid;
	border-width: ${(props) => props.scale * 3.667}px;
	border-color: #000;
	border-image: url(${(props) => props.svg}) 4;
	transition: all 200ms;
	${(props) => props.isMouseClicked && `top: 3px;`}
`;

type Layer2Props = {
	cornerLength: number;
	scale: number;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
};
const Layer2 = styled.div<Layer2Props>`
	position: absolute;
	top: 1px;
	left: 1px;
	height: calc(100% - 2px);
	width: calc(100% - 2px);
	z-index: 8;
	background-color: ${(props) => props.backgroundColorShades[3]};
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
	${(props) =>
		props.isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
	${(props) => props.isMouseClicked && `top: 4px;`}
	${(props) =>
		props.isMouseHover &&
		props.isMouseClicked &&
		`filter: brightness(0.92) saturate(1.3);`}
`;

type Layer3Props = {
	borderWidth: number;
	scale: number;
	svg: string;
};
const Layer3 = styled.div<Layer3Props>`
	z-index: 7;
	position: absolute;
	bottom: -${(props) => props.scale * 3}px;
	left: 0;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	border-style: solid;
	border-width: ${(props) => props.scale * 1.88}px;
	border-color: #000;
	border-radius: ${(props) => props.borderWidth * 2.2}px;
	border-image: url(${(props) => props.svg}) 2;
	transition: all 200ms;
`;

type Layer4Props = {
	borderWidth: number;
	scale: number;
	cornerLength: number;
	backgroundColorShades: string[];
};
const Layer4 = styled.div<Layer4Props>`
	position: absolute;
	bottom: -${(props) => props.scale * 3}px;
	left: 1px;
	height: calc(100% - 2px);
	width: calc(100% - 2px);
	z-index: 6;
	background-color: ${(props) => props.backgroundColorShades[2]};
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
`;

export interface ButtonProps {
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	scale: number;
	borderColor: string;
	children?: React.ReactNode;
}
export function BulkButton({
	backgroundColor,
	fontColor = "#313638",
	fontBold = false,
	borderColor = "#2e222f",
	scale = 3,
	children,
}: ButtonProps) {
	const cornerLength = scale * 4 - 2;
	const fontSize = scale * 7 + 4;
	const borderWidth = scale * 3.667;
	const [backgroundColorShades, setBackgroundColorShades] = useState<
		string[]
	>(colorShading(backgroundColor));
	const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
	const [isMouseClicked, setIsMouseClicked] = useState<boolean>(false);
	const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
		generateLayer1BorderImageSVG(backgroundColorShades, borderColor)
	);
	const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
		generateLayer3BorderImageSVG(backgroundColorShades, borderColor)
	);

	useEffect(() => {
		const bgColorShades = colorShading(backgroundColor);
		setBackgroundColorShades(bgColorShades);
		setLayer1BorderImageSVG(
			generateLayer1BorderImageSVG(bgColorShades, borderColor)
		);
		setLayer3BorderImageSVG(
			generateLayer3BorderImageSVG(backgroundColorShades, borderColor)
		);
	}, [backgroundColor, borderColor]);

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
		>
			<Content
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
			>
				{children}
			</Content>
			<Layer1
				borderWidth={borderWidth}
				scale={scale}
				svg={layer1BorderImageSVG}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
			/>
			<Layer2
				cornerLength={cornerLength}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
				scale={scale}
			/>
			<Layer3
				borderWidth={borderWidth}
				svg={layer3BorderImageSVG}
				scale={scale}
			/>
			<Layer4
				borderWidth={borderWidth}
				cornerLength={cornerLength}
				backgroundColorShades={backgroundColorShades}
				scale={scale}
			/>
		</BaseButton>
	);
}

function generateLayer1BorderImageSVG(
	backgroundColorShades: string[],
	borderColor: string
): string {
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="9" height="9" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m5 8h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-3-2h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm4-2h1v1h-1z" fill="${backgroundColorShades[3]}"/>
	 <path d="m7 8h1v1h-1zm-1 0h1v1h-1zm-4 0h1v1h-1zm-1 0h1v1h-1zm7-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm0-3h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-8 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-2 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#fff"/>
	</svg>
	
	`;
	return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG(
	backgroundColorShades: string[],
	borderColor: string
): string {
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="6" height="6" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m5 4h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="${backgroundColorShades[0]}"/>
	 <path d="m3 5h1v1h-1zm-1 0h1v1h-1zm1-5h1v1h-1zm-1 0h1v1h-1z" fill="${backgroundColorShades[2]}"/>
	 <path d="m4 5h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1z" fill="${backgroundColorShades[1]}"/>
	</svg>	
	`;
	return createInlineSVG(svg);
}
