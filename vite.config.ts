import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { devDependencies, peerDependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        // Exclude peer dependencies from the bundle to reduce bundle size
        ...Object.keys(peerDependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
    },
  },
})
