import './assets/main.css'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(router)

import { primeVueDesignPreset } from './plugins/ThemePresent'

app.use(PrimeVue, {
  theme: {
    preset: primeVueDesignPreset,
    options: { ripple: true, prefix: 'vue', darkModeSelector: false },
  },
})

// app.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//   },
// })

app.mount('#app')
