import { createApp } from 'vue'
import { createPinia } from 'pinia'
import simplePlugin from './plugins/simplePlugin'
import App from './App.vue'
// import router from './router'

import './assets/main.scss'

const app = createApp(App) //рендер элемента App

app.use(createPinia(),simplePlugin)
// app.use(router)


app.mount('#app') //вызываем метод mount
