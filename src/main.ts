import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from "./vuetify";
import router from "./router";

const app = createApp(App)

app.use(vuetify)
app.use(router)

await router.isReady()

app.mount('#app')
