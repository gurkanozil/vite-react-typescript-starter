import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/gurkanozil.github.io/', // Base URL for your repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});