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
import DetailProduct from './components/DetailProduct.vue'
import Login from './components/Login.vue'
import Adress from './components/Adress.vue'
import Profile from './components/Profile.vue'
import Myorder from './components/Myorder.vue'
import Wishlist from './components/Wishlist.vue'


const routes = [
    {path: '/accueil', component: Home, name: "home" },
    {path: '/connexion', component: Account, name: "account" },
    {path: '/bracelets', component: Bracelets, name: "bracelets" },
    {path: '/mon-panier', component: Cart, name: "cart" },
    {path: '/inscription', component: Createaccount, name: "createaccount" },
    {path: '/details-produit', component: DetailProduct, name: 'detailproduct' },
    // {path: '/details-produit/:id', component: DetailProduct, name: 'detailproduct' },
    {path: '/aperçu', component: Login, name: "login" },
    {path: '/mes-adresses', component: Adress, name: "adress" },
    {path: '/mon-profil', component: Profile, name: "profile" },
    {path: '/mes-commandes', component: Myorder, name: "myorder" },
    {path: '/ma-wishlist', component: Wishlist, name: "wishlist" },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
