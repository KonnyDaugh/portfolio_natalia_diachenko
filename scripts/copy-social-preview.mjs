import { copyFile } from 'node:fs/promises';

await copyFile(
  new URL('../src/assets/social-preview.png', import.meta.url),
  new URL('../build/social-preview.png', import.meta.url),
);
