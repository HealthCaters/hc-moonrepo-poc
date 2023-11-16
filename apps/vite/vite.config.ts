import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../../.moon/cache/types/apps/vite',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@hc/vite': path.join(__dirname, './src/'),
      '@hc/shared': path.join(__dirname, '../../packages/shared/src/'),
    },
  },
});
