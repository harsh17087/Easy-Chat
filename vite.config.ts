/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  // Adding the React plugin for Vite
  plugins: [react()],
  test: {
    // Enable global variables for tests
    globals: true,
    // Set the test environment to jsdom
    environment: 'jsdom',
    // Specify setup files for tests
    setupFiles: ['src/__tests__/setup.ts'],
  },
});
