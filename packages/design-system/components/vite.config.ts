import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
})
