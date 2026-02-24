import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // garden425.github.io는 사용자/조직 페이지이므로 루트(/) 경로를 기본으로 합니다.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
    },
  }
});