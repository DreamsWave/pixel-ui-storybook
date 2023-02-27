import styled from "styled-components";
import { BasicButton } from "./variants/BasicButton";
import { BulkButton } from "./variants/BulkButton";

export const defaults = {
	backgroundColor: "#fdcbb0",
	fontColor: "#313638",
};

export interface ButtonProps {
	backgroundColor: string;
	fontColor: string;
	fontBold: boolean;
	children: React.ReactNode;
	variant: "basic" | "bulk";
	scale: number;
}

export function Button({
	backgroundColor = defaults.backgroundColor,
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
					fontColor={fontColor}
					fontBold={fontBold}
				>
					{children}
				</BulkButton>
			)}
		</>
	);
}
