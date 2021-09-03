import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'wordcloud',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@fabiankuhn/stencil-components',
      proxiesFile: '../component-lib-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    { type: 'docs-readme' }
  ],
  plugins: [
    sass()
  ],
};
