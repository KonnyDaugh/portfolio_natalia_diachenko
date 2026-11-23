import { copyFile, mkdir } from 'node:fs/promises';

await mkdir(new URL('../build/certificates/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../src/certificates/campfire-frontend-certificate.pdf', import.meta.url),
  new URL('../build/certificates/campfire-frontend-certificate.pdf', import.meta.url),
);
