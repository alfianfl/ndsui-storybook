// FILE: vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'NdsBaseUiLib',
      fileName: 'nds-base-ui-lib'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
