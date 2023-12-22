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
                <div class="col-md-12 col_class user_adress">
                    <h3 class="mt-5">Carnet d'adresses</h3>
                    <p class="mt-4 mb-5">Sauvegardez toutes vos adresses de livraison pour effectuer plus rapidement vos achats. <br> Si vous
                        avez une adresse préférée, indiquez-la comme prédéfinie : le champ sera déjà rempli dans votre
                        Panier.</p>

                    <div class="new_adress d-flex justify-content-between">
                        <p>Vous n'avez pas encore sauvegardé d'adresses de livraison</p>
                        <div class="add_new_adress">
                            <a class="d-flex" href="">
                                <i class="fa-solid fa-plus me-2"></i>
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
    font-weight: bold;
}
.user_adress p {
    font-family: 'Arapey', serif;
    font-size: 16px;
}
.new_adress p {
    color: black;
    font-size: 16px;
    font-family: 'Arapey', serif;
}
.add_new_adress i {
    font-size: 25px;
    color: black;
}
.add_new_adress p {
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
    text-underline-offset: 4px;
}
.add_new_adress p:hover {
    text-decoration: none;
}
</style>