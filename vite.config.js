import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/folio/',
  assetsDir: 'assets',
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      components: path.resolve(__dirname, '/src/components'),
      // eslint-disable-next-line no-undef
    },
  },
});
