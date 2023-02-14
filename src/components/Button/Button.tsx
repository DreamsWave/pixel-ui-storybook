import styles from "./Button.module.css";
import classNames from "classnames";

export interface IButtonProps {}

export function Button(props: IButtonProps) {
	return <button className={classNames(styles.base)}>Button</button>;
}
