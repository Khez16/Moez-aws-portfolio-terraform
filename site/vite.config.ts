import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Recreate __dirname since it's not available in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [preact(), tailwindcss()],
  build: {
    outDir: 'dist', // output directory
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // ✅ use resolved path safely
    },
  },
  base: '/', // ensures relative paths for static hosting like S3
})
