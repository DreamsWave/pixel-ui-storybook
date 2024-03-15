import Color from 'colorjs.io';

export function getContrastColor(bgColor: string, darkFontColor = '#2e222f', lightFontColor = '#eeecf3'): string {
  const color = new Color(bgColor);
  const r = Math.round(color.srgb.r * 255);
  const g = Math.round(color.srgb.g * 255);
  const b = Math.round(color.srgb.b * 255);
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return brightness > 0.5 ? darkFontColor : lightFontColor;
}

export function encodeHash(str: string): string {
  return str.replace(/#/g, '%23');
}

export function createInlineSVG(svg: string): string {
  return `'${encodeHash(`data:image/svg+xml;utf8,${svg}`)}'`;
}

export function colorShading(baseColor: string): Array<string> {
  const S1 = colorShift(baseColor, 0, 0.3, -0.6, -0.6);
  const S2 = colorShift(baseColor, 0, 0.2, -0.2, -0.3);
  const S3 = colorShift(baseColor, 0, 0.1, -0.1, -0.1);
  const S5 = colorShift(baseColor, 0, 0.1, 0.1, 0.1);
  const S6 = colorShift(baseColor, 0, 0.2, 0.2, 0.2);
  const S7 = colorShift(baseColor, 0, 0.3, 0.5, 0.4);
  return [S1, S2, S3, baseColor, S5, S6, S7];
}

export function colorShift(
  color: string,
  hueShift: number,
  satShift: number,
  lightShift: number,
  shadeShift: number,
): string {
  const newColor = new Color(color);

  // SHIFT HUE
  newColor.hsl.h = (newColor.hsl.h + hueShift * 360) % 360;
  // SHIFT SATURATION
  if (satShift > 0) {
    newColor.hsl.s = lerp(newColor.hsl.s, 100, satShift);
  } else if (satShift < 0) {
    newColor.hsl.s = lerp(newColor.hsl.s, 0, -satShift);
  }
  // SHIFT LIGHTNESS
  if (lightShift > 0) {
    newColor.hsl.l = lerp(newColor.hsl.l, 100, lightShift);
  } else if (lightShift < 0) {
    newColor.hsl.l = lerp(newColor.hsl.l, 0, -lightShift);
  }

  // SHIFT SHADING
  const newShade = new Color(newColor);
  let shadedColor: Color;

  if (shadeShift >= 0) {
    newShade.hsl.h = 50;
    shadedColor = rgbInterpolation(newColor, newShade, shadeShift);
  } else if (shadeShift < 0) {
    newShade.hsl.h = 215;
    shadedColor = rgbInterpolation(newColor, newShade, -shadeShift);
  } else {
    shadedColor = new Color(color);
  }

  return shadedColor.toString({ format: 'hex' });
}

function lerp(first: number, second: number, by: number): number {
  return first * (1 - by) + second * by;
}

const rgbInterpolation = (col1: Color, col2: Color, f: number): Color => {
  const xyz0 = col1.srgb;
  const xyz1 = col2.srgb;
  return new Color('srgb', [
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
  ]);
};

export function changePunctuationsColor(text: string, color: string): string {
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  return text.replace(punctuationRegex, `<span style="color: ${color}">$&</span>`);
}
