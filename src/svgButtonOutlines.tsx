import { SVGButtonOutlinesType, SVGOutlineProps } from './types';

export const generateBasicTopOutlineSVG = ({
  colors = ['#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 5h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m4 6h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1z" fill="${colors[1]}"/>
  <path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1 0h1v1h-1zm-3 4h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1z" fill="${colors[2]}"/>
</svg>`;
export const generateBasicBottomOutlineSVG = ({
  colors = ['#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m4 7h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
</svg>`;

export const generateBulkTopOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="12" height="12" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m9 11h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-2-2h1v1h-1zm0-1h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm-11 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm6-2h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m10 11h1v1h-1zm-9 0h1v1h-1zm10-1h1v1h-1zm-11 0h1v1h-1zm11-1h1v1h-1zm0-1h1v1h-1zm0-4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-11 0h1v1h-1zm10-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-4 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
</svg>`;

export const generateBulkBottomOutlineSVG = ({
  colors = ['#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m7 6h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm3-7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
  <path d="m6 7h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="${colors[2]}"/>
</svg>`;

export const generateSquaredTopOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
</svg>`;

export const generateSquaredBottomOutlineSVG = ({
  colors = ['#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m6 5h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m5 6h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-3 0h1v1h-1zm3-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
  <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[2]}"/>
</svg>`;

export const generateMinimalisticTopOutlineSVG = ({
  colors = ['#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m6 2h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m7 6h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
  <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm5-1h1v1h-1zm-5 0h1v1h-1zm3-2h1v1h-1zm-1 0h1v1h-1z" fill="${colors[2]}"/>
</svg>`;

export const generateMinimalisticBottomOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 6h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m6 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1z" fill="${colors[1]}"/>
</svg>`;

export const generateGlassmorphismOutlineSVG = ({
  colors = ['#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="8" height="8" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
</svg>`;

const svgButtonOutlines: SVGButtonOutlinesType = {
  basic: {
    top: { generateSVG: generateBasicTopOutlineSVG, borderImageSlice: 3, borderWidthPixels: 3 },
    bottom: {
      generateSVG: generateBasicBottomOutlineSVG,
      borderImageSlice: 3,
      offsetFromTopPixels: 3,
      borderWidthPixels: 3,
    },
  },
  bulk: {
    top: { generateSVG: generateBulkTopOutlineSVG, borderImageSlice: 5, borderWidthPixels: 5 },
    bottom: {
      generateSVG: generateBulkBottomOutlineSVG,
      borderImageSlice: 3,
      offsetFromTopPixels: 3,
      borderWidthPixels: 3,
    },
  },
  squared: {
    top: { generateSVG: generateSquaredTopOutlineSVG, borderImageSlice: 3, borderWidthPixels: 3 },
    bottom: {
      generateSVG: generateSquaredBottomOutlineSVG,
      borderImageSlice: 3,
      offsetFromTopPixels: 3,
      borderWidthPixels: 3,
    },
  },
  minimalistic: {
    top: { generateSVG: generateMinimalisticTopOutlineSVG, borderImageSlice: 3, borderWidthPixels: 3 },
    bottom: {
      generateSVG: generateMinimalisticBottomOutlineSVG,
      borderImageSlice: 3,
      offsetFromTopPixels: 3,
      borderWidthPixels: 3,
    },
  },
  glassmorphism: {
    top: { generateSVG: generateGlassmorphismOutlineSVG, borderImageSlice: 3, borderWidthPixels: 3 },
    bottom: {
      generateSVG: generateGlassmorphismOutlineSVG,
      borderImageSlice: 3,
      offsetFromTopPixels: 3,
      borderWidthPixels: 3,
    },
  },
};

export default svgButtonOutlines;
