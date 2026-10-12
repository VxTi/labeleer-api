import { defineConfig } from '@hey-api/openapi-ts';

/**
 * Generates type-safe request functions from the OpenAPI specification.
 * Regenerate the specification first with `pnpm generate:openapi`.
 */
export default defineConfig({
  input: './openapi.yaml',
  output: {
    path: './src/generated',
    clean: true,
    postProcess: ['prettier'],
    preferExportAll: true,
    module: {
      extension: '.js',
    },
  },
  plugins: [
    {
      name: '@hey-api/typescript',
      enums: 'typescript-const',
      // Places the request and response types in `types/`.
      $hooks: { symbols: { getFilePath: () => 'types/index' } },
    },
    {
      name: '@hey-api/client-fetch',
      baseUrl: 'https://labeleer.com',
    },
    { name: 'zod' },
    {
      name: '@hey-api/sdk',
      validator: true,
    },
  ],
});
