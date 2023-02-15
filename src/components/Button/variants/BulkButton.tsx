import styled from "styled-components";
import { darken, lighten } from "polished";
import buttonBulkLayer1SVG from "../../../assets/Button/btn-bulk-layer-1.svg";
import buttonBulkLayer2SVG from "../../../assets/Button/btn-bulk-layer-2.svg";

export const defaultColor = "#fdcbb0";

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
	font-size: ${(props) => props.fontSize}px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 400 : 600)};
	text-transform: uppercase;
	color: ${(props) => props.fontColor || "#313638"};
	background-color: ${(props) => props.backgroundColor || defaultColor};
	border-style: solid;
	border-width: 12px;
	border-color: #000;
	border-radius: 10px;
	border-image: url(${buttonBulkLayer1SVG}) 4;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	white-space: nowrap;
	position: relative;

	&:hover {
		background-color: ${(props) =>
			props.backgroundColor
				? lighten(0.05, props.backgroundColor)
				: lighten(0.05, defaultColor)};
	}

	&:active {
		top: 4px;
		background-color: ${(props) =>
			props.backgroundColor ? props.backgroundColor : defaultColor};
	}

	&:active&:before {
		top: -4px;
		background-color: ${(props) =>
			props.backgroundColor
				? darken(0.15, props.backgroundColor)
				: darken(0.15, defaultColor)};
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
			? darken(0.1, props.backgroundColor)
			: darken(0.1, defaultColor)};
	z-index: -1;
	border-style: solid;
	border-width: ${(props) => props.borderWidth}px;
	border-color: #000;
	border-radius: ${(props) => props.borderWidth * 2.2}px;
	border-image: url(${buttonBulkLayer2SVG}) 3;
`;

export interface ButtonProps {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
	fontSize?: number;
	children?: React.ReactNode;
	borderWidth?: number;
}

export function BulkButton({
	backgroundColor = "#8ff8e2",
	fontColor = "#313638",
	fontBold = false,
	fontSize = 24,
	borderWidth = 20,
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
