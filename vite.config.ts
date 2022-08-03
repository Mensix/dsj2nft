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
          name: 'PF Tempesta Five Condensed',
          local: 'PF Tempesta Five Condensed',
          src: './src/assets/pf_tempesta_five_condensed_bold.ttf'
        }
      ]
    }
  })],
})
