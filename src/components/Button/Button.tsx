import styled from "styled-components";
import { BasicButton } from "./variants/BasicButton";
import { BulkButton } from "./variants/BulkButton";

export const defaults = {
	backgroundColor: "#fdcbb0",
	borderColor: "#2e222f",
	fontColor: "#313638",
};

export interface ButtonProps {
	backgroundColor: string;
	borderColor: string;
	fontColor: string;
	fontBold: boolean;
	children: React.ReactNode;
	variant: "basic" | "bulk";
	scale: number;
}

export function Button({
	backgroundColor = defaults.backgroundColor,
	borderColor = defaults.borderColor,
	fontColor = defaults.fontColor,
	fontBold = false,
	variant = "basic",
	scale = 3,
	children,
}: ButtonProps) {
	return (
		<>
			{variant === "basic" && (
				<BasicButton
					backgroundColor={backgroundColor}
					borderColor={borderColor}
					fontColor={fontColor}
					fontBold={fontBold}
					scale={scale}
				>
					{children}
				</BasicButton>
			)}
			{variant === "bulk" && (
				<BulkButton
					backgroundColor={backgroundColor}
					borderColor={borderColor}
					fontColor={fontColor}
					fontBold={fontBold}
					scale={scale}
				>
					{children}
				</BulkButton>
			)}
		</>
	);
}
