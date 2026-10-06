import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import chalk from 'chalk';

const __dirname = new URL('.', import.meta.url).pathname;
const baseUrl = 'https://labeleer.com/openapi.yaml';
const outputPath = join(__dirname, '../openapi.yaml');

async function main() {
  const content = await fetch(baseUrl).then(res => res.text());

  await writeFile(outputPath, content, 'utf-8');
  console.log(chalk.green(`OpenAPI spec has been written to ${outputPath}`));
}

main().catch((error: unknown) => {
  console.log(
    chalk.red('Something went wrong whilst retrieving OpenAPI specification.'),
    error
  );
});
