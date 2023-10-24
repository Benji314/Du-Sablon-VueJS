import './assets/main.css'

// Import de nos librairies
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

// Import de nos components
import App from './App.vue'
import Account from './components/Account.vue'
import Bracelets from './components/Bracelets.vue'


const routes = [
    {path: '/mon-compte', component: Account, name: "account" },
    {path: '/bracelets', component: Bracelets, name: "bracelets" },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
