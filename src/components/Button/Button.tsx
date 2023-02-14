import styled from "styled-components";
import { darken, lighten } from "polished";
import buttonBasicSVG from "../../assets/Button/btn-basic.svg";
import buttonBasicBottomSVG from "../../assets/Button/btn-basic-bottom.svg";

export const defaultColor = "#fdcbb0";

type StyledButtonProps = {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
};
const StyledButton = styled.button<StyledButtonProps>`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 30px;
	margin-bottom: 8px;
	font-size: 24px;
	font-family: "Press Start 2P", cursive;
	font-weight: ${(props) => (props.fontBold ? 400 : 600)};
	text-transform: uppercase;
	color: ${(props) => props.fontColor || "#313638"};
	background-color: ${(props) => props.backgroundColor || defaultColor};
	border-width: 9px;
	border-color: #000;
	border-radius: 20px;
	border-image: url(${buttonBasicSVG}) 3;
	position: relative;
	cursor: pointer;
	transition: all 200ms ease-in-out;

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

	&:active&:after {
		top: -4px;
		background-color: ${(props) =>
			props.backgroundColor
				? darken(0.15, props.backgroundColor)
				: darken(0.15, defaultColor)};
	}

	&:after {
		content: "";
		position: absolute;
		top: 0px;
		right: -9px;
		height: 100%;
		width: 100%;
		background-color: ${(props) =>
			props.backgroundColor
				? darken(0.1, props.backgroundColor)
				: darken(0.1, defaultColor)};
		z-index: -1;
		border-style: solid;
		border-width: 9px;
		border-color: #000;
		border-radius: 20px;
		border-image: url(${buttonBasicBottomSVG}) 3;
	}
`;

export interface ButtonProps {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
}

export function Button({
	backgroundColor = "#8ff8e2",
	fontColor = "#313638",
	fontBold = false,
}: ButtonProps) {
	return (
		<StyledButton
			backgroundColor={backgroundColor}
			fontColor={fontColor}
			fontBold={fontBold}
		>
			Button
		</StyledButton>
	);
}
