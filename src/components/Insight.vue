<script>
import WelcomeUser from "./WelcomeUser.vue"
import NavUser from "./NavUser.vue"

export default {
    components: {
        WelcomeUser,
        NavUser,
    }
};
</script>

<template>
    <div class="row row_class">
        <div class="col-md-2 offset-md-1 col_class profil_nav">
            <NavUser></NavUser>
        </div>

        <div class="col-md-8 col_class">
            <WelcomeUser></WelcomeUser>

            <div class="row">
                <div class="col-md-6 col_class div_user">
                    <h3>MON PROFIL</h3>
                    <p>M. Benjamin Perreau</p>
                    <p>benjaminperreau1@gmail.com</p>
                    <p>
                        <router-link :to="{ name: 'profile' }">
                            Voir mon profil
                        </router-link>
                    </p>
                </div>
                <div class="col-md-6 col_class div_user">
                    <h3>MES COMMANDES</h3>
                    <p>Vous n'avez pas encore commandé en tant qu'utilisateur inscrit.</p>
                    <p>
                        <router-link :to="{ name: 'myorder' }">
                            Voir mes commandes
                        </router-link>
                    </p>
                </div>
            </div>
            <div class="row row_class2">
                <div class="col-md-6 col_class div_user">
                    <h3>MES ADRESSES</h3>
                    <p>Vous n'avez aucune adresse sauvegardée.</p>
                    <p>
                        <router-link :to="{ name: 'adress' }">
                            Voir mes adresses
                        </router-link>
                    </p>
                </div>
                <div class="col-md-6 col_class div_user">
                    <h3>MA WISHLIST</h3>
                    <p>Vous n'avez pas encore ajouté de produit à votre wishlist.</p>
                    <p>
                        <router-link :to="{ name: 'wishlist' }">
                            Voir ma wishlist
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.div_user {
    width: calc(50% - 20px);
    margin: 10px;
    padding: 40px;
    border: 0.5px solid black;
}

.div_user h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
}

.div_user p {
    font-family: 'Arapey', serif;
    font-size: 16px;
}

.div_user a {
    color: black;
    font-family: 'Arapey', serif;
    font-size: 16px;
    transition: font-size 0.5s ease-in-out;
}

.div_user a:hover {
    font-size: calc(16px + 1px);
    text-decoration: underline;
    text-decoration-color: rgb(227, 167, 14);
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 4px;
}</style>