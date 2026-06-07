/// <reference types="vite/client" />

// PNG files imported as URL strings (Vite's default behaviour for asset imports).
// This declaration lets TypeScript resolve the default export of any *.png module
// used by the withFigmaReference Storybook decorator.
declare module '*.png' {
  const src: string;
  export default src;
}
