import  { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import Loading from 'vue3-loading-screen'
import "@fortawesome/fontawesome-free/css/all.min.css"
createApp(App).use(router)
.use(store)
.use(Loading,{
    bg: '#daf2f298',
    icon: 'fas fa-spinner',
    size: 4,
    icon_color: '#4cb7d9',
})
.mount('#app')
