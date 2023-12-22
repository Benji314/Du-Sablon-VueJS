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

            <div class="row row_class2 px-5">
                <div class="col-md-12 col_class user_order mb-3">
                    <h3 class="mt-5">Mes commandes</h3>
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

.user_order h3 {
    font-family: 'Arapey', serif;
    font-weight: bold;
}

.user_order p {
    font-family: 'Arapey', serif;
    margin-top: 20px;
    font-size: 16px;
}

.user_order a {
    color: black;
    text-decoration: underline;
    font-family: 'Arapey', serif;
    font-size: 16px;
    font-weight: bold;
}

.user_order a:hover {
    text-decoration: none;
}</style>