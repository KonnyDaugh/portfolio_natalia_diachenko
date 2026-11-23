import { copyFile, mkdir } from 'node:fs/promises';

await mkdir(new URL('../build/resume/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../src/resume/Natalia_Diachenko_CV.pdf', import.meta.url),
  new URL('../build/resume/Natalia_Diachenko_CV.pdf', import.meta.url),
);
