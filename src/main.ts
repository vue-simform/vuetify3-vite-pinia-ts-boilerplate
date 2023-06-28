import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import pinia from './store'
import router from './router'


// Plugins
// import { registerPlugins } from './plugins'
const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
loadFonts()

app.mount('#app')
