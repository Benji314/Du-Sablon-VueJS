<script>
export default {
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
            <div class="row row_class2 welcome_user">
                <h2>BIENVENUE USER</h2>
                <p>À partir de votre compte Du Sablon, vous pouvez gérer et garder la trace de votre expérience
                    d’achat personnalisée sur la boutique en ligne Du Sablon.</p>
                <button id="disconnect">déconnexion</button>
            </div>

            <div class="row row_class2">
                <div class="col-md-12 col_class my_wishlist">
                    <h3>Ma Wishlist</h3>
                    <p>Créez votre Sélection en ajoutant les articles que vous aimez. Vous pouvez ajouter jusqu’à 50 articles, vérifier leur disponibilité et les ajouter à votre Panier à tout moment.</p>
                    <hr>
                    <div class="wishlist_user">
                        <p>La sélection de (USER)</p>
                        <div class="share_wishlist">
                            <a href="">
                                <i class="fa-solid fa-share-nodes"></i>
                                <p>PARTAGER LA WISHLIST</p>
                            </a>
                        </div>
                    </div>
                    <div class="wishlist_content">
                        <p>Votre Wish List ne contient aucun article.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my_wishlist h3 {
    font-family: 'Arapey', serif;
    margin-top: 50px;
    font-weight: bold;
}
.my_wishlist p {
    font-family: 'Arapey', serif;
    margin: 20px 30px 20px 0px;
    font-size: 16px;
}
.wishlist_user {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.share_wishlist a {
    display: flex;
    align-items: center;
    margin-right: 60px;
}
.wishlist_user p {
    text-transform: uppercase;
    color: black;
    font-size: 20px;
    font-family: 'Arapey', serif;
    font-weight: bold;
}
.share_wishlist i {
    font-size: 20px;
    color: rgb(227, 167, 14);
    margin-right: 10px;
}
.share_wishlist p {
    margin: 0;
    font-size: 18px;
    font-weight: normal;
}
.share_wishlist p:hover {
    text-decoration: underline;
}
.wishlist_content{
    margin: 50px 0px;
    font-size: 16px;
    font-family: 'Arapey', serif;
}
</style>