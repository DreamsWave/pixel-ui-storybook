import { BasicButton } from "./variants/BasicButton";
import { BulkButton } from "./variants/BulkButton";
import { SquaredButton } from "./variants/SquaredButton";
import { MinimalisticButton } from "./variants/MinimalisticButton";

export const defaults = {
	backgroundColor: "#fdcbb0",
	borderColor: "#2e222f",
	fontColor: "#313638",
};

export interface ButtonProps {
	backgroundColor: string;
	primaryColor: string;
	secondaryColor: string;
	borderColor: string;
	fontColor: string;
	fontBold: boolean;
	children: React.ReactNode;
	variant: "basic" | "bulk" | "squared" | "minimalistic";
	pixelSize: number;
	uppercase: boolean;
}

export function Button({
	primaryColor,
	secondaryColor,
	backgroundColor = defaults.backgroundColor,
	borderColor = defaults.borderColor,
	fontColor,
	fontBold = false,
	variant = "basic",
	uppercase = true,
	pixelSize = 4,
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
					pixelSize={pixelSize}
					uppercase={uppercase}
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
					pixelSize={pixelSize}
					uppercase={uppercase}
				>
					{children}
				</BulkButton>
			)}
			{variant === "squared" && (
				<SquaredButton
					backgroundColor={backgroundColor}
					borderColor={borderColor}
					fontColor={fontColor}
					fontBold={fontBold}
					pixelSize={pixelSize}
					uppercase={uppercase}
				>
					{children}
				</SquaredButton>
			)}
			{variant === "minimalistic" && (
				<MinimalisticButton
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					borderColor={borderColor}
					fontColor={fontColor}
					pixelSize={pixelSize}
					uppercase={uppercase}
				>
					{children}
				</MinimalisticButton>
			)}
		</>
	);
}
