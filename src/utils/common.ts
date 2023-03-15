import Color from 'colorjs.io';

export function encodeHash(str: string): string {
  return str.replace(/#/g, '%23');
}

export function createInlineSVG(svg: string): string {
  return `'${encodeHash(`data:image/svg+xml;utf8,${svg}`)}'`;
}

export function lightenDarkenColor(col: string, amt: number): string {
  let usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

export function isContrastValid(color: string, onColor: string): boolean {
  const color1 = new Color(onColor);
  const color2 = new Color(color);
  const contrast = color1.contrast(color2, 'WCAG21');
  return contrast >= 7;
}

export function getContrastColor(bgColor: string, darkFontColor = '#2e222f', lightFontColor = '#eeecf3'): string {
  const color = new Color(bgColor);
  const r = Math.round(color.srgb.r * 255);
  const g = Math.round(color.srgb.g * 255);
  const b = Math.round(color.srgb.b * 255);
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return brightness > 0.5 ? darkFontColor : lightFontColor;
}

export function getCornerLength(scale: number): number {
  return scale * 4 - 2;
}

export function getFontSize(scale: number): number {
  return scale * 7 + 4;
}

export function getBorderWidth(scale: number): number {
  return scale * 3;
}
