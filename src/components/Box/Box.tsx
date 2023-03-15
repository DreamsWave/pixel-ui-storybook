import { BasicBox } from "./variants/BasicBox";

export interface BoxProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  variant: "basic";
  pixelSize: number;
  uppercase: boolean;
  children?: React.ReactNode;
}

export function Box(props: BoxProps) {
  const { variant = "basic", children } = props;
  return (
    <>{variant === "basic" && <BasicBox {...props}>{children}</BasicBox>}</>
  );
}
