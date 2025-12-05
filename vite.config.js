import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/produce-react/',   // https://username.github.io/REPO_NAME/
  plugins: [react()]
})
