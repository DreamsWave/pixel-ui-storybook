import styled from "styled-components";
import { darken, lighten } from "polished";
import buttonBasicLayer1SVG from "../../../assets/Button/btn-basic-layer-1.svg";
import buttonBasicLayer2SVG from "../../../assets/Button/btn-basic-layer-2.svg";

export const defaultColor = "#fdcbb0";

function getClipPathVar(variable: number): number {
	return (variable / 3) * 4 - 2;
}

function getFontSize(variable: number): number {
	return (variable / 3) * 7 + 4;
}

type Layer1Props = {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
	fontSize?: number;
	borderWidth: number;
};
const Layer1 = styled.span<Layer1Props>`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 30px;
	font-size: ${(props) => getFontSize(props.borderWidth)}px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 600 : 400)};
	text-transform: uppercase;
	color: ${(props) => props.fontColor || "#313638"};
	background-color: transparent;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-image: url(${buttonBasicLayer1SVG}) 3;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	white-space: nowrap;
	position: relative;

	&:hover&:before {
		background-color: ${(props) =>
			props.backgroundColor
				? lighten(0.025, props.backgroundColor)
				: lighten(0.025, defaultColor)};
	}

	&:active {
		top: 4px;
	}

	&:active&:before {
		background-color: ${(props) =>
			props.backgroundColor ? props.backgroundColor : defaultColor};
	}

	&:before {
		content: "";
		position: absolute;
		top: -${(props) => props.borderWidth - 1}px;
		left: -${(props) => props.borderWidth - 1}px;
		height: calc(100% + ${(props) => (props.borderWidth - 1) * 2}px);
		width: calc(100% + ${(props) => (props.borderWidth - 1) * 2}px);
		z-index: -1;
		background-color: ${(props) =>
			props.backgroundColor ? props.backgroundColor : defaultColor};
		clip-path: polygon(
			0 calc(0% + ${(props) => getClipPathVar(props.borderWidth)}px),
			calc(0% + ${(props) => getClipPathVar(props.borderWidth)}px) 0,
			calc(100% - ${(props) => getClipPathVar(props.borderWidth)}px) 0,
			100% ${(props) => getClipPathVar(props.borderWidth)}px,
			100% calc(100% - ${(props) => getClipPathVar(props.borderWidth)}px),
			calc(100% - ${(props) => getClipPathVar(props.borderWidth)}px) 100%,
			${(props) => getClipPathVar(props.borderWidth)}px 100%,
			0% calc(100% - ${(props) => getClipPathVar(props.borderWidth)}px),
			0% ${(props) => getClipPathVar(props.borderWidth)}px
		);
		transition: all 200ms;
	}
`;

type Layer2Props = {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
	fontSize?: number;
	borderWidth: number;
};
const Layer2 = styled.span<Layer2Props>`
	position: absolute;
	bottom: -${(props) => props.borderWidth}px;
	left: 0px;
	height: calc(100% - ${(props) => props.borderWidth * 2}px);
	width: calc(100% - ${(props) => props.borderWidth * 2}px);
	background-color: ${(props) =>
		props.backgroundColor
			? darken(0.08, props.backgroundColor)
			: darken(0.08, defaultColor)};
	z-index: -2;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-radius: ${(props) => props.borderWidth * 2.2}px;
	border-image: url(${buttonBasicLayer2SVG}) 3;
`;

export interface ButtonProps {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
	fontSize?: number;
	children?: React.ReactNode;
	borderWidth?: number;
}

export function BasicButton({
	backgroundColor = defaultColor,
	fontColor = "#313638",
	fontBold = false,
	fontSize = 24,
	borderWidth = 9,
	children,
}: ButtonProps) {
	return (
		<>
			<Layer1
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				borderWidth={borderWidth}
			>
				{children}
			</Layer1>
			<Layer2
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				fontBold={fontBold}
				fontSize={fontSize}
				borderWidth={borderWidth}
			/>
		</>
	);
}
