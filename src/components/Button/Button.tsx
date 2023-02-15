import styled from "styled-components";
import { BasicButton } from "./variants/BasicButton";
import { BulkButton } from "./variants/BulkButton";

export const defaultColor = "#fdcbb0";

const BaseButton = styled.button`
	position: relative;
	z-index: 10;
	background: transparent;
	border: none;
	padding: 0;
	margin-bottom: 8px;
`;

export interface ButtonProps {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
	fontSize?: number;
	children?: React.ReactNode;
	variant?: "basic" | "bulk";
	borderWidth?: number;
}

export function Button({
	backgroundColor = "#8ff8e2",
	fontColor = "#313638",
	fontBold = false,
	variant = "basic",
	fontSize = 24,
	borderWidth = 9,
	children,
}: ButtonProps) {
	return (
		<BaseButton>
			{variant === "basic" && (
				<BasicButton
					backgroundColor={backgroundColor}
					fontColor={fontColor}
					fontBold={fontBold}
					fontSize={fontSize}
					borderWidth={borderWidth}
				>
					{children}
				</BasicButton>
			)}
			{variant === "bulk" && (
				<BulkButton
					backgroundColor={backgroundColor}
					fontColor={fontColor}
					fontBold={fontBold}
					fontSize={fontSize}
					borderWidth={borderWidth}
				>
					{children}
				</BulkButton>
			)}
		</BaseButton>
	);
}
