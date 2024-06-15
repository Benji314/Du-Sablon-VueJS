import './assets/main.css'

// Import des librairies
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia';

// Import des components
import App from './App.vue'

import Account from './view/Account.vue'
import Bracelets from './view/Bracelets.vue'
import Cart from './view/Cart.vue'
import Collection from './view/Collection.vue'
import Createaccount from './view/Createaccount.vue'
import DetailProduct from './view/DetailProduct.vue'
import Home from './view/Home.vue'

import Adress from './components/Adress.vue'
import Login from './components/Login.vue'
import Myorder from './components/Myorder.vue'
import Profile from './components/Profile.vue'
import Wishlist from './components/Wishlist.vue'


const routes = [
    {path: '/', component: Home, name: "home" },
    {path: '/connexion', component: Account, name: "account" },
    {path: '/mes-adresses', component: Adress, name: "adress" },
    {path: '/bracelets', component: Bracelets, name: "bracelets" },
    {path: '/mon-panier', component: Cart, name: "cart" },
    {path: '/collection/:id', component: Collection, name: "collection" },
    {path: '/inscription', component: Createaccount, name: "createaccount" },
    {path: '/produit/:id', component: DetailProduct, name: 'detailproduct' },
    {path: '/aperçu', component: Login, name: "login" },
    {path: '/mes-commandes', component: Myorder, name: "myorder" },
    {path: '/mon-profil', component: Profile, name: "profile" },
    {path: '/ma-wishlist', component: Wishlist, name: "wishlist" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth', // Pour un défilement en douceur
          };
        } else {
          return { top: 0, behavior: 'smooth' }; // Défilement vers le haut
        }
      },
})


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

//createApp(App). use(router).mount('#app')