/// <reference types="vitest" />
import { defineConfig } from 'vite'
import angular from '@analogjs/vite-plugin-angular'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  plugins: [
    angular(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['src/test-setup.ts'],
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
    reporters: ['default'],
    coverage: {
      enabled: true,
      include: ['src/**/*.ts'],
      exclude: ['main.ts', 'src/devtools/**', 'src/environments/**', '**/index.ts', '**/*.model.ts', '**/*.module.ts'],
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}))
