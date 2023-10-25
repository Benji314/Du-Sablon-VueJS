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
                <div class="col-md-12 col_class user_order">
                    <h3>Mes commandes</h3>
                    <p>Affichez les détails de votre commande. Si vous souhaitez retourner ou échanger un article, vous
                        pourrez contacter notre Service Client pour demander un numéro d’autorisation de retour une fois que
                        votre commande sera livrée.</p>
                    <p>Vous n'avez pas encore sauvegardé d'adresses de livraison.</p>
                    <a href="/html/home.html">Continuer votre shopping</a>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user_order {
    text-align: left;
}

.user_order h3 {
    font-family: 'Arapey', serif;
    margin-top: 50px;
    font-weight: bold;
}

.user_order p {
    font-family: 'Arapey', serif;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 16px;
}

.user_order a {
    color: black;
    text-decoration: underline;
    font-family: 'Arapey', serif;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
}

.user_order a:hover {
    text-decoration: none;
}</style>