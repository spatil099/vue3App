// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import  router  from './router.js'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)
const pinia = createPinia()
myApp.use(pinia)

myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router)

myApp.mount('#app')
