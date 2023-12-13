import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hc/shared': path.join(__dirname, '../../packages/shared/src/'),
      '@hc/vite5': path.join(__dirname, 'src/'),
    },
  },
});
