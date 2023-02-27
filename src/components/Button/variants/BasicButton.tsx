import styled from "styled-components";

import {
	createInlineSVG,
	colorShading,
	isContrastValid,
	getContrastColor,
} from "../../../utils";
import { useEffect, useState } from "react";

function getClipPath(scale: number): number {
	return scale * 4 - 2;
}

function getFontSize(scale: number): number {
	return scale * 7 + 4;
}

function getBorderWidth(scale: number): number {
	return scale * 3;
}

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
	backgroundColor: string;
	children?: React.ReactNode;
};
const Content = styled.span<ContentProps>`
	z-index: 10;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => props.fontSize}px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 600 : 400)};
	padding: 0.8em 2em;
	text-transform: uppercase;
	color: ${(props) =>
		isContrastValid(props.fontColor, props.backgroundColor)
			? props.fontColor
			: getContrastColor(props.backgroundColor)};
	white-space: nowrap;
	transition: all 200ms;
`;

type Layer1Props = {
	backgroundColor: string;
	borderWidth: number;
	clipPath: number;
	svg: string;
	colorShades: string[];
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
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-image: url(${(props) => props.svg}) 3;
	transition: all 200ms;
`;

type Layer2Props = {
	backgroundColor: string;
	borderWidth: number;
	clipPath: number;
	svg: string;
	colorShades: string[];
};
const Layer2 = styled.div<Layer2Props>`
	position: absolute;
	top: 1px;
	left: 1px;
	height: calc(100% - 2px);
	width: calc(100% - 2px);
	z-index: 8;
	background-color: ${(props) => props.backgroundColor};
	clip-path: polygon(
		0 calc(0% + ${(props) => props.clipPath}px),
		calc(0% + ${(props) => props.clipPath}px) 0,
		calc(100% - ${(props) => props.clipPath}px) 0,
		100% ${(props) => props.clipPath}px,
		100% calc(100% - ${(props) => props.clipPath}px),
		calc(100% - ${(props) => props.clipPath}px) 100%,
		${(props) => props.clipPath}px 100%,
		0% calc(100% - ${(props) => props.clipPath}px),
		0% ${(props) => props.clipPath}px
	);
	transition: all 200ms;
`;

type Layer3Props = {
	backgroundColor: string;
	borderWidth: number;
	clipPath: number;
	svg: string;
	colorShades: string[];
};
const Layer3 = styled.div<Layer3Props>`
	z-index: 7;
	position: absolute;
	bottom: -${(props) => props.borderWidth}px;
	left: 0;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-radius: ${(props) => props.borderWidth * 2.2}px;
	border-image: url(${(props) => props.svg}) 3;
	transition: all 200ms;
`;

type Layer4Props = {
	backgroundColor: string;
	borderWidth: number;
	clipPath: number;
	svg: string;
	colorShades: string[];
};
const Layer4 = styled.div<Layer4Props>`
	position: absolute;
	bottom: -${(props) => props.borderWidth - 1}px;
	left: 1px;
	height: calc(100% - 2px);
	width: calc(100% - 2px);
	z-index: 6;
	background-color: ${(props) => props.colorShades[1]};
	clip-path: polygon(
		0 calc(0% + ${(props) => props.clipPath}px),
		calc(0% + ${(props) => props.clipPath}px) 0,
		calc(100% - ${(props) => props.clipPath}px) 0,
		100% ${(props) => props.clipPath}px,
		100% calc(100% - ${(props) => props.clipPath}px),
		calc(100% - ${(props) => props.clipPath}px) 100%,
		${(props) => props.clipPath}px 100%,
		0% calc(100% - ${(props) => props.clipPath}px),
		0% ${(props) => props.clipPath}px
	);
	transition: all 200ms;
`;

export interface ButtonProps {
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	children?: React.ReactNode;
	scale: number;
}
export function BasicButton({
	backgroundColor,
	fontColor = "#313638",
	fontBold = false,
	scale = 3,
	children,
}: ButtonProps) {
	const clipPath = getClipPath(scale);
	const fontSize = getFontSize(scale);
	const borderWidth = getBorderWidth(scale);
	const colorShades = colorShading(backgroundColor);
	const [layer1SVG, setLayer1SVG] = useState<string>(
		generateLayer1SVG(backgroundColor)
	);
	const [layer2SVG, setLayer2SVG] = useState<string>(
		generateLayer2SVG(backgroundColor)
	);

	function generateLayer1SVG(
		backgroundColor: string,
		borderColor?: string
	): string {
		const svg = `<?xml version="1.0" encoding="UTF-8"?>
			<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="m5 5h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${
				colorShades[4]
			}"/>
			<path d="m4 6h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1z" fill="${
				colorShades[2]
			}"/>
			<path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm-3 4h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1z" fill="${
				borderColor || "#2e222f"
			}"/>
			</svg>
		`;
		return createInlineSVG(svg);
	}

	function generateLayer2SVG(
		backgroundColor?: string,
		borderColor?: string
	): string {
		const svg = `<?xml version="1.0" encoding="UTF-8"?>
		<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
		 <path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${
				borderColor || "#2e222f"
			}"/>
		</svg>
		`;
		return createInlineSVG(svg);
	}

	useEffect(() => {
		setLayer1SVG(generateLayer1SVG(backgroundColor));
		setLayer2SVG(generateLayer2SVG(backgroundColor));
	}, [backgroundColor]);
	return (
		<BaseButton
			onMouseOver={() => {
				console.log("mouse over");
			}}
			onMouseLeave={() => {
				console.log("mouse leave");
			}}
		>
			<Content
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				backgroundColor={backgroundColor}
			>
				{children}
			</Content>
			<Layer1
				backgroundColor={backgroundColor}
				borderWidth={borderWidth}
				clipPath={clipPath}
				svg={layer1SVG}
				colorShades={colorShades}
			/>
			<Layer2
				backgroundColor={backgroundColor}
				borderWidth={borderWidth}
				clipPath={clipPath}
				svg={layer1SVG}
				colorShades={colorShades}
			/>
			<Layer3
				backgroundColor={backgroundColor}
				borderWidth={borderWidth}
				clipPath={clipPath}
				svg={layer2SVG}
				colorShades={colorShades}
			/>
			<Layer4
				backgroundColor={backgroundColor}
				borderWidth={borderWidth}
				clipPath={clipPath}
				svg={layer2SVG}
				colorShades={colorShades}
			/>
		</BaseButton>
	);
}
