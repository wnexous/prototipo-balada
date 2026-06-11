import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  base: './',
  build: {
    // Inline every asset (imagens incluídas) como data-URI base64 para que o
    // dist/index.html único funcione offline / via file:// — sem requisições de rede.
    assetsInlineLimit: 100_000_000,
  },
});
