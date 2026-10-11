import { defineConfig } from '@hey-api/openapi-ts';

/**
 * Generates type-safe request functions from the OpenAPI specification.
 * Regenerate the specification first with `pnpm generate:openapi`.
 */
export default defineConfig({
  input: './openapi.yaml',
  output: {
    path: './src',
    clean: true,
    postProcess: ['prettier', 'eslint'],
    preferExportAll: true,
    module: {
      extension: '.js'
    }
  },
  plugins: [
    {
      name: '@hey-api/typescript',
      enums: true,
      // Places the request and response types in `types/`.
      $hooks: { symbols: { getFilePath: () => 'types/index' } },
    },
    '@hey-api/client-fetch',
    {
      name: '@hey-api/sdk',
      validator: {
        response: 'zod',
      },
    },
  ],
});
