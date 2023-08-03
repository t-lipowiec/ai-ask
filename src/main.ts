//import './assets/main.css'
import './assets/main-style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './MyApp.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
