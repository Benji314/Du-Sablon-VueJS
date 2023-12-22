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
                <div class="col-md-12 col_class my_wishlist">
                    <h3 class="mt-5">Ma Wishlist</h3>
                    <p class="my-4">Créez votre Sélection en ajoutant les articles que vous aimez. Vous pouvez ajouter jusqu’à 50 articles, vérifier leur disponibilité et les ajouter à votre Panier à tout moment.</p>
                    <hr>
                    <div class="wishlist_user d-flex justify-content-between align-items-center">
                        <p class="text-uppercase">La sélection de (USER)</p>
                        <div class="share_wishlist">
                            <a class="d-flex align-items-center" href="">
                                <i class="fa-solid fa-share-nodes me-2"></i>
                                <p class="text-uppercase m-0">Partager la wishlist</p>
                            </a>
                        </div>
                    </div>
                    <div class="wishlist_content my-5">
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
    font-weight: bold;
}
.my_wishlist p {
    font-family: 'Arapey', serif;
    font-size: 16px;
}

.wishlist_user p {
    color: black;
    font-size: 20px;
    font-family: 'Arapey', serif;
    font-weight: bold;
}
.share_wishlist i {
    font-size: 20px;
    color: rgb(227, 167, 14);
}
.share_wishlist p {
    font-size: 18px;
    font-weight: normal;
}
.share_wishlist p:hover {
    text-decoration: underline;
}
.wishlist_content{
    font-size: 16px;
    font-family: 'Arapey', serif;
}
</style>