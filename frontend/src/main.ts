import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  messages
})

import './assets/main.scss'
import 'uno.css'

createApp(App).use(i18n).mount('#app')
