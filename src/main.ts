import '@/assets/sass/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import cookiesInit from './plugins/cookies'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App)
app.use(router)
app.use(i18n)
cookiesInit(app)
app.mount('#app')
