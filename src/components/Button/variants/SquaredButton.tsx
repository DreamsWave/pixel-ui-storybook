import styled from "styled-components";

import {
	createInlineSVG,
	colorShading,
	isContrastValid,
	getContrastColor,
} from "../../../utils";
import { useEffect, useState, MouseEvent } from "react";

const BaseButton = styled.button`
	font-family: "Press Start 2P", "Nunito Sans", "Helvetica Neue", Helvetica,
		Arial, sans-serif;
	position: relative;
	display: inline-flex;
	background: transparent;
	border: none;
	padding: 0;
	margin-bottom: 8px;
	cursor: pointer;
`;

type ContentProps = {
	pixelSize: number;
	fontColor: string;
	fontBold: boolean;
	fontSize: number;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
	uppercase: boolean;
	children?: React.ReactNode;
};
const Content = styled.span<ContentProps>`
	z-index: 10;
	position: relative;
	top: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ fontSize }) => fontSize}px;
	font-weight: ${({ fontBold }) => (fontBold ? 600 : 400)};
	padding: 0.6em 1.4em;
	text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
	color: ${({ fontColor }) => fontColor};
	white-space: nowrap;
	text-shadow: -${({ pixelSize }) => pixelSize}px -${({ pixelSize }) =>
				pixelSize}px
			0 #f5efdf,
		${({ pixelSize }) => pixelSize}px -${({ pixelSize }) => pixelSize}px 0 #f5efdf,
		-${({ pixelSize }) => pixelSize}px ${({ pixelSize }) => pixelSize}px 0 #f5efdf,
		${({ pixelSize }) => pixelSize}px ${({ pixelSize }) => pixelSize}px 0
			#f5efdf;
	transition: all 200ms;
	${({ isMouseClicked, pixelSize }) =>
		isMouseClicked && `top: ${pixelSize}px;`}
`;

type Layer1Props = {
	pixelSize: number;
	svg: string;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
};
const Layer1 = styled.div<Layer1Props>`
	z-index: 9;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color: transparent;
	border-style: solid;
	border-color: #000;
	border-image: url(${({ svg }) => svg}) 3;
	border-width: ${({ pixelSize }) => pixelSize * 3}px;
	transition: all 200ms;
	${({ isMouseClicked, pixelSize }) =>
		isMouseClicked && `top: ${pixelSize}px;`}
	${({ isMouseHover }) =>
		isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
	${({ isMouseHover, isMouseClicked }) =>
		isMouseHover &&
		isMouseClicked &&
		`filter: brightness(0.92) saturate(1.3);`}
`;

type Layer2Props = {
	cornerLength: number;
	pixelSize: number;
	backgroundSVG: string;
	backgroundColorShades: string[];
	isMouseHover: boolean;
	isMouseClicked: boolean;
};
const Layer2 = styled.div<Layer2Props>`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: 8;
	background-color: ${({ backgroundColorShades }) =>
		backgroundColorShades[3]};
	background-image: url(${({ backgroundSVG }) => backgroundSVG});
	background-size: ${({ pixelSize }) => pixelSize * 4}px
		${({ pixelSize }) => pixelSize * 4}px;
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
	${({ isMouseHover }) =>
		isMouseHover && `filter: brightness(0.95) saturate(1.2);`}
	${({ isMouseClicked, pixelSize }) =>
		isMouseClicked && `top: ${pixelSize}px;`}
	${({ isMouseHover, isMouseClicked }) =>
		isMouseHover &&
		isMouseClicked &&
		`filter: brightness(0.92) saturate(1.3);`}
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
	backgroundColorShades: string[];
};
const Layer4 = styled.div<Layer4Props>`
	position: absolute;
	bottom: -${({ pixelSize }) => pixelSize * 3}px;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 6;
	background-color: #ab7968;
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
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	pixelSize: number;
	borderColor: string;
	uppercase: boolean;
	children?: React.ReactNode;
}
export function SquaredButton({
	backgroundColor = "#ebc3aa",
	fontColor = "#313638",
	fontBold = false,
	borderColor = "#2e222f",
	pixelSize = 4,
	uppercase = true,
	children,
}: ButtonProps) {
	const cornerLength = pixelSize * 4;
	const fontSize = pixelSize * 8;
	const [backgroundColorShades, setBackgroundColorShades] = useState<
		string[]
	>(colorShading(backgroundColor));
	const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
	const [isMouseClicked, setIsMouseClicked] = useState<boolean>(false);
	const [backgroundSVG, setBackgroundSVG] = useState<string>(
		generateBackground(backgroundColorShades, borderColor)
	);
	const [layer1BorderImageSVG, setLayer1BorderImageSVG] = useState<string>(
		generateLayer1BorderImageSVG(backgroundColorShades, borderColor)
	);
	const [layer3BorderImageSVG, setLayer3BorderImageSVG] = useState<string>(
		generateLayer3BorderImageSVG(backgroundColorShades, borderColor)
	);

	useEffect(() => {
		const bgColorShades = colorShading(backgroundColor);
		setBackgroundColorShades(bgColorShades);
		setBackgroundSVG(
			generateBackground(backgroundColorShades, borderColor)
		);
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
				pixelSize={pixelSize}
				fontColor={"#593e2d"}
				fontBold={fontBold}
				fontSize={fontSize}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
				uppercase={uppercase}
			>
				{children}
			</Content>
			<Layer1
				pixelSize={pixelSize}
				svg={layer1BorderImageSVG}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
			/>
			<Layer2
				cornerLength={cornerLength}
				backgroundSVG={backgroundSVG}
				backgroundColorShades={backgroundColorShades}
				isMouseHover={isMouseHover}
				isMouseClicked={isMouseClicked}
				pixelSize={pixelSize}
			/>
			<Layer3 svg={layer3BorderImageSVG} pixelSize={pixelSize} />
			<Layer4
				cornerLength={cornerLength}
				backgroundColorShades={backgroundColorShades}
				pixelSize={pixelSize}
			/>
		</BaseButton>
	);
}

function generateBackground(
	backgroundColorShades: string[],
	borderColor: string
): string {
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="4" height="4" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m1 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="#ebc3aa"/>
	 <path d="m3 3h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1z" fill="#f5efdf"/>
	</svg>	
	`;
	return createInlineSVG(svg);
}

function generateLayer1BorderImageSVG(
	backgroundColorShades: string[],
	borderColor: string
): string {
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#ab7968"/>
	 <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#593e2d"/>
	</svg>	
	`;
	return createInlineSVG(svg);
}

function generateLayer3BorderImageSVG(
	backgroundColorShades: string[],
	borderColor: string
): string {
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
	<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
	 <path d="m6 5h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="#c28c7a"/>
	 <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#ab7968"/>
	 <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="#593e2d"/>
	</svg>	
	`;
	return createInlineSVG(svg);
}
