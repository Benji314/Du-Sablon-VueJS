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
                        <li><a href="/html/login.html">aperçu</a></li>
                        <li><a href="/html/profile.html">mon profil</a></li>
                        <li><a href="/html/myorder.html">mes commandes</a></li>
                        <li>
                            <router-link :to="{ name: 'adress' }">
                                mes adresses
                            </router-link>
                        </li>
                        <li><a href="">ma wishlist</a></li>
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
.profil_nav h1 {
    font-family: 'Arapey', serif;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 30px;
}
.profil_menu li {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    color: black;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
}
.profil_menu a {
    color: black;
    font-weight: 600;
    font-size: 20px;
    transition: font-size 0.5s ease-in-out;
}
.profil_menu a:hover {
    font-size: calc(20px + 3px);
    text-decoration: underline;
    text-decoration-color: rgb(227, 167, 14);
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 8px;
}
.welcome_user {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgb(236, 236, 236);
}
.welcome_user h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: 'Arapey', serif;
    font-weight: 600;
}
.welcome_user p {
    font-family: 'Arapey', serif;
    font-size: 16px;
    width: 600px;
}
#disconnect {
    min-height: 50px;
    width: 200px;
    margin-top: 20px;
    margin-bottom: 40px;
    border: 2px solid rgb(227, 167, 14);
    background-color: rgb(236, 236, 236);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
}
#disconnect:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}
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