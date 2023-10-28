<script>
import WelcomeUser from "./WelcomeUser.vue"

export default {
    components: {
        WelcomeUser,
    }
};
</script>

<template>
    <div class="row row_class">
        <div class="col-md-2 offset-md-1 col_class profil_nav">
            <h1>DU SABLON</h1>
            <div class="d-flex flex-column">
                <nav>
                    <ul class="profil_menu">
                        <li>
                            <router-link :to="{ name: 'login' }">
                                aperçu
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'profile' }">
                                mon profil
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'myorder' }">
                                mes commandes
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'adress' }">
                                mes adresses
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'wishlist' }">
                                ma wishlist
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="col-md-8 col_class">
            <WelcomeUser></WelcomeUser>
            <div class="row row_class2">
                <div class="col-md-12 col_class user_adress">
                    <h3>Carnet d'adresses</h3>
                    <p>Sauvegardez toutes vos adresses de livraison pour effectuer plus rapidement vos achats. <br> Si vous
                        avez une adresse préférée, indiquez-la comme prédéfinie : le champ sera déjà rempli dans votre
                        Panier.</p>

                    <div class="new_adress">
                        <p>Vous n'avez pas encore sauvegardé d'adresses de livraison</p>
                        <div class="add_new_adress">
                            <a href="">
                                <i class="fa-solid fa-plus"></i>
                                <p>AJOUTER UNE NOUVELLE ADRESSE</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user_adress h3 {
    font-family: 'Arapey', serif;
    margin-top: 50px;
    font-weight: bold;
}
.user_adress p {
    font-family: 'Arapey', serif;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
}
.new_adress {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.new_adress p {
    margin-right: 20px;
    color: black;
    font-size: 16px;
    font-family: 'Arapey', serif;
}
.add_new_adress a {
    display: flex;
    align-items: center;
    margin-right: 60px;
}
.add_new_adress i {
    font-size: 25px;
    color: black;
    margin-right: 10px;
}
.add_new_adress p {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
    text-decoration-color: black;
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 4px;
}
.add_new_adress p:hover {
    text-decoration: none;
}
</style>