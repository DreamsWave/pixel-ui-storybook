import styled from "styled-components";
import { darken, lighten } from "polished";
import buttonLayer1SVG from "../../../assets/Button/btn-basic-layer-1.svg";
import buttonLayer2SVG from "../../../assets/Button/btn-basic-layer-2.svg";

function getClipPath(scale: number): number {
	return scale * 4 - 2;
}

function getFontSize(scale: number): number {
	return scale * 7 + 4;
}

function getBorderWidth(scale: number): number {
	return scale * 3;
}

type Layer1Props = {
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	fontSize: number;
	borderWidth: number;
	clipPath: number;
};
const Layer1 = styled.span<Layer1Props>`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 30px;
	font-size: ${(props) => props.fontSize}px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 600 : 400)};
	text-transform: uppercase;
	color: ${(props) => props.fontColor || "#313638"};
	background-color: transparent;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-image: url(${buttonLayer1SVG}) 3;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	white-space: nowrap;
	position: relative;

	&:hover&:before {
		background-color: ${(props) => lighten(0.025, props.backgroundColor)};
	}

	&:active {
		top: 4px;
	}

	&:active&:before {
		background-color: ${(props) => props.backgroundColor};
	}

	&:before {
		content: "";
		position: absolute;
		top: -${(props) => props.borderWidth - 1}px;
		left: -${(props) => props.borderWidth - 1}px;
		height: calc(100% + ${(props) => (props.borderWidth - 1) * 2}px);
		width: calc(100% + ${(props) => (props.borderWidth - 1) * 2}px);
		z-index: -1;
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
	}
`;

type Layer2Props = {
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	fontSize: number;
	borderWidth: number;
	clipPath: number;
};
const Layer2 = styled.span<Layer2Props>`
	position: absolute;
	bottom: -${(props) => props.borderWidth}px;
	left: 0px;
	height: calc(100% - ${(props) => props.borderWidth * 2}px);
	width: calc(100% - ${(props) => props.borderWidth * 2}px);
	background-color: ${(props) => darken(0.08, props.backgroundColor)};
	z-index: -2;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-radius: ${(props) => props.borderWidth * 2.2}px;
	border-image: url(${buttonLayer2SVG}) 3;
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
	fontColor,
	fontBold,
	scale = 3,
	children,
}: ButtonProps) {
	const clipPath = getClipPath(scale);
	const fontSize = getFontSize(scale);
	const borderWidth = getBorderWidth(scale);
	return (
		<>
			<Layer1
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				borderWidth={borderWidth}
				clipPath={clipPath}
			>
				{children}
			</Layer1>
			<Layer2
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				borderWidth={borderWidth}
				clipPath={clipPath}
			/>
		</>
	);
}
