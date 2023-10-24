import './assets/main.css'

// Import de nos librairies
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

// Import de nos components
import App from './App.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Bracelets from './components/Bracelets.vue'
import Cart from './components/Cart.vue'
import Createaccount from './components/Createaccount.vue'


const routes = [
    {path: '/mon-compte', component: Account, name: "account" },
    {path: '/bracelets', component: Bracelets, name: "bracelets" },
    {path: '/mon-panier', component: Cart, name: "cart" },
    {path: '/inscription', component: Createaccount, name: "createaccount" },
    {path: '/accueil', component: Home, name: "home" },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
