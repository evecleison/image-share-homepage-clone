import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/to-do-list-react/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: '.'
  }
}))


