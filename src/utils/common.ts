import Color from "colorjs.io";

export function encodeHash(str: string): string {
	return str.replace(/#/g, "%23");
}

export function createInlineSVG(svg: string): string {
	return `\'${encodeHash(`data:image/svg+xml;utf8,${svg}`)}\'`;
}

export function lightenDarkenColor(col: string, amt: number): string {
	var usePound = false;

	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}

	var num = parseInt(col, 16);

	var r = (num >> 16) + amt;

	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	var b = ((num >> 8) & 0x00ff) + amt;

	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	var g = (num & 0x0000ff) + amt;

	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export function isContrastValid(color: string, onColor: string): boolean {
	const color1 = new Color(onColor);
	const color2 = new Color(color);
	const contrast = color1.contrast(color2, "WCAG21");
	return contrast >= 7;
}

export function getContrastColor(bgColor: string): string {
	const color = new Color(bgColor);
	const r = Math.round(color.srgb.r * 255);
	const g = Math.round(color.srgb.g * 255);
	const b = Math.round(color.srgb.b * 255);
	const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return brightness > 0.5 ? "#2e222f" : "#eeecf3";
}
