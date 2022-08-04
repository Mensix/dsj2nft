import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [react(), VitePluginFonts({
    custom: {
      families: [
        {
          name: 'Straczynski',
          local: 'Straczynski',
          src: './src/assets/Straczynski.ttf'
        },
        {
          name: 'DSJ2',
          local: 'DSJ2',
          src: './src/assets/DSJ2.ttf'
        }
      ]
    }
  })],
})
