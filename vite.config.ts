import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import Pages from 'vite-plugin-pages'
import inspect from "vite-plugin-inspect";

export default defineConfig({
  base: "/veranstaltung/",
  server: {
    port: 3003,
  },
  plugins: [
    inspect(),
    vue(),
    vuetify({
      styles: {
        configFile: './src/vuetify.config.scss'
      }
    }),
    Pages({
      importMode: 'sync'
    }),
  ],
  build: {
    target: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ],
    cssTarget: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ]
  }
})
