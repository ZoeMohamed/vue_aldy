import { createApp } from 'vue'
import './style.css'
import './assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { createPinia } from 'pinia'

// ENDPOINT
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

