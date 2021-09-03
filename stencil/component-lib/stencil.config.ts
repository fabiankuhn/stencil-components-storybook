import { Config } from '@stencil/core';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'wordcloud',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@fabiankuhn/stencil-components',
      proxiesFile: '../components-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
};
