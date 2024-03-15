export type SVGOutlineProps = {
  colors: string[];
};

export const generateBasicCardOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="10" height="10" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m7 8h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm5-1h1v1h-1zm-6 0h1v1h-1zm7-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm7-1h1v1h-1zm-6 0h1v1h-1zm5-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m7 9h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-6 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${colors[1]}"/>
</svg> `;

export const generateCyberCardOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="38" height="38" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m34 36h1v1h-1zm1-1h1v1h-1zm-33-4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm35-1h1v1h-1zm-4 0h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm5-3h1v1h-1zm24-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1z" fill="${colors[0]}"/>
  <path d="m31 37h1v1h-1zm0-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm27-1h1v1h-1zm-25 0h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm32-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-31 0h1v1h-1zm32-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm31-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-31 0h1v1h-1zm-4 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm-35 0h1v1h-1zm35-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm3-1h1v1h-1zm-4 0h1v1h-1zm-29 0h1v1h-1zm-1 0h1v1h-1zm34-1h1v1h-1zm-1 0h1v1h-1zm-31 0h1v1h-1zm-2 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
</svg>`;

export const generateDimensionalCardOutlineSVG = ({
  colors = ['#000', '#000', '#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="10" height="10" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m8 2h1v1h-1zm-1-1h1v1h-1z" fill="${colors[0]}"/>
  <path d="m8 6h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-2-2h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
  <path d="m7 7h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${colors[2]}"/>
  <path d="m7 8h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm5-1h1v1h-1zm-6 0h1v1h-1zm7-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm7-1h1v1h-1zm-6 0h1v1h-1zm5-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[3]}"/>
  <path d="m7 9h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-6 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-8 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${colors[4]}"/>
</svg>`;

export const generateNeonCardOutlineSVG = ({
  colors = ['#000', '#000', '#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="6" height="6" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 3h1v1h-1zm0-1h1v1h-1zm-2-2h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m3 4h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1z" fill="${colors[1]}"/>
  <path d="m4 4h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm0-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[2]}"/>
  <path d="m3 5h1v1h-1zm-1 0h1v1h-1zm-2-2h1v1h-1zm0-1h1v1h-1z" fill="${colors[3]}"/>
</svg>`;

export const generateOutlineCardOutlineSVG = ({
  colors = ['#000', '#000'],
}: SVGOutlineProps) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="10" height="10" shape-rendering="crispEdges" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="m5 8h1v1h-1zm-1 0h1v1h-1zm2-1h1v1h-1zm-3 0h1v1h-1zm4-1h1v1h-1zm-5 0h1v1h-1zm6-1h1v1h-1zm-7 0h1v1h-1zm7-1h1v1h-1zm-7 0h1v1h-1zm6-1h1v1h-1zm-5 0h1v1h-1zm4-1h1v1h-1zm-3 0h1v1h-1zm2-1h1v1h-1zm-1 0h1v1h-1z" fill="${colors[0]}"/>
  <path d="m6 9h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-1 0h1v1h-1zm-7 0h1v1h-1zm-1 0h1v1h-1zm9-1h1v1h-1zm-9 0h1v1h-1zm9-1h1v1h-1zm-9 0h1v1h-1zm9-1h1v1h-1zm-1 0h1v1h-1zm-7 0h1v1h-1zm-1 0h1v1h-1zm8-1h1v1h-1zm-1 0h1v1h-1zm-5 0h1v1h-1zm-1 0h1v1h-1zm6-1h1v1h-1zm-1 0h1v1h-1zm-3 0h1v1h-1zm-1 0h1v1h-1zm4-1h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1zm-1 0h1v1h-1z" fill="${colors[1]}"/>
</svg>`;
