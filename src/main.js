import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import App from './App.vue'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
