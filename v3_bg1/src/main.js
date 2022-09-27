import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'

import Footer from "@/components/footer"

import "./assets/css/index.css"
import "normalize.css"



const app = createApp(App)
app.use(router)
app.mount('#app')
app.component(Footer.name,Footer)

app.config.globalProperties.$axios=axios;  //配置axios的全局引用
// createApp(App).mount('#app')
