import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/image-share-homepage-clone/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: '.'
  }
}))


