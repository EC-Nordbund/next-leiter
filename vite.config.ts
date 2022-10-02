import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import Pages from 'vite-plugin-pages'

export default defineConfig({
  base: "/veranstaltung/",
  server: {
    port: 3003,
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: './src/vuetify.config.scss'
      }
    }),
    Pages(),
  ]
})
