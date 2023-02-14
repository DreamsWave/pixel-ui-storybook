import styles from "./Button.module.css";
import classNames from "classnames";
import { lightenDarkenColor } from "../../utils";

export interface IButtonProps {
	backgroundColor?: string;
	fontColor?: string;
	fontBold?: boolean;
}

export function Button({
	backgroundColor = "#8ff8e2",
	fontColor = "#313638",
	fontBold = false,
}: IButtonProps) {
	return (
		<button
			style={{
				backgroundColor: backgroundColor,
				color: fontColor,
				fontWeight: fontBold ? 400 : 600,
			}}
			className={classNames(styles.base)}
		>
			Button
			<div
				style={{
					backgroundColor: lightenDarkenColor(backgroundColor, -40),
				}}
				className={classNames(styles.bottom)}
			></div>
		</button>
	);
}
