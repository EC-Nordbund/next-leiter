import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from "./vuetify";
import router from "./router";

if(import.meta.env.MODE === 'production') {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/veranstaltung/sw.js', {
      scope: '/veranstaltung'
    })
  }
}

const app = createApp(App)

app.use(vuetify)
app.use(router)

await router.isReady()

app.mount('#app')
