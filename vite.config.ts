import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import yaml from "@modyfi/vite-plugin-yaml"

export default defineConfig({
  plugins: [vue(),yaml()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
