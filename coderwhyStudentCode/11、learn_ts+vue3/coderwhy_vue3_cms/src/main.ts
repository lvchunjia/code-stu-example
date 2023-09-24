import 'normalize.css'
import '@/assets/css/index.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import registerIcons from './global/register-icons'

import { mocker } from './mocks/browser'
if (import.meta.env.MODE === 'development') {
  mocker.start({
    onUnhandledRequest: 'bypass'
  })
}

const app = createApp(App)
app.use(router)
app.use(stores)
app.use(registerIcons)
app.mount('#app')
