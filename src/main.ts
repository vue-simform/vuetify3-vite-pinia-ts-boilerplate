import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Plugins
import { registerPlugins } from './plugins/index'
const app = createApp(App)
app.use(registerPlugins)

app.mount('#app')
