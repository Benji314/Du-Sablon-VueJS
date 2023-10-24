<script>
export default {
    data() {
        return {
            bracelets: [],
        };
    },
    mounted() {
        this.BraceletData();
    },
    methods: {
        BraceletData() {
            fetch('/public/api/bracelets.json')
                .then((response) => response.json())
                .then((bracelet_data) => {
                    this.bracelets = bracelet_data.bracelets;
                });
        },
    },
};
</script>

<template>

    <main>
        <div class="container">
            <div class="row row_class">
                <div class="col-md-2 col_class filters">
                    <h1>CLASSER PAR</h1>
                    <div class="d-flex flex-column">
                        <div class="mb-2">
                            <input type="radio" name="order_by" id="conseilles_option" class="" value="">
                            <label for="conseilles_option">Conseillés</label>
                        </div>
                        <div>
                            <input type="radio" name="order_by" id="prix_croissant_option" class="" value="">
                            <label for="prix_croissant_option">Prix croissant</label>
                        </div>
                        <div>
                            <input type="radio" name="order_by" id="prix_decroissant_option" class="" value="">
                            <label for="prix_decroissant_option">Prix décroissant</label>
                        </div>
                    </div>
                    <hr>
                    <h1>FILTRER PAR</h1>
                    <div class="d-flex flex-column">
                        <div>
                            <input type="radio" name="filter_option" id="femme_option" class="" value="">
                            <label for="femme_option">Femme</label>
                        </div>
                        <div>
                            <input type="radio" name="filter_option" id="homme_option" class="" value="">
                            <label for="homme_option">Homme</label>
                        </div>
                    </div>
                </div>
                <div class="row row_class2">
                    <div class="col-md-2 col_class nb_article">
                        <p>Nombre articles</p>
                    </div>
                    <div class="col-md-4 offset-md-2 col_class title_bracelet">
                        <h1>BRACELETS</h1>
                    </div>
                </div>
                <div class="row row_class2 img_bracelet">
                    <a href=""><img src="/public/img/bracelet_accueil.jpg" alt=""></a>
                </div>

                <div class="row row_class2">
                    <div v-for="bracelet in bracelets" :key="bracelet.id" class="col-md-3 col_class bracelet_class">
                        <div class="bracelets">
                            <a href=""><img :src="bracelet.path_img" alt=""></a>
                            <h1>{{ bracelet.name }}</h1>
                            <p>Du Sablon</p>
                            <h2>€ {{ bracelet.unitPrice }}</h2>
                            <!-- <a :href="'/html/detailproduit.html?id=' + bracelet.id">
                                <button class="buy_btn">ACHETER</button>
                            </a> -->
                            <router-link :to="{ name: 'detailproduct' }">
                                <button class="buy_btn">ACHETER</button>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>


<style scoped>


/***************************************************
*******************              ******************/
/****************  BRACELETS  *****************
*******************              ******************/
/**************************************************/
.filters h1 {
    font-family: 'Arapey', serif;
    font-size: 25px;
    margin-left: 10px;
}

.filters .d-flex.flex-column>div {
    margin-bottom: 10px;
    margin-left: 20px;
    font-family: 'Arapey', serif;
}

.filters input[type="radio"] {
    display: none;
    /* Masquez les boutons radio d'origine */
}

.filters input[type="radio"]+label {
    position: relative;
    padding-left: 30px;
    /* Ajustez cet espace pour le carré */
    cursor: pointer;
}

.filters input[type="radio"]+label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    /* Ajustez la taille du carré */
    height: 15px;
    /* Ajustez la taille du carré */
    border: 1px solid rgb(227, 167, 14);
    /* Style du bord du carré */
    background-color: #fff;
    /* Couleur de fond du carré */
}

.filters input[type="radio"]:checked+label::before {
    background-color: rgb(227, 167, 14);
    border-color: rgb(227, 167, 14);
}

.nb_article {
    display: flex;
    align-items: center;
}

.nb_article p {
    font-family: 'Arapey', serif;
    margin-bottom: 0px;
    font-size: 16px;
}

.title_bracelet h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
    text-align: center;
}

.img_bracelet img {
    width: 100%;
}


.bracelet_class {
    position: relative;
}

.bracelet_class:hover {
    text-align: center;
}

.bracelets {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    text-align: center;
}

.bracelets h1 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
    color: #000;
}

.bracelets p {
    font-size: 10px;
    color: rgb(235, 163, 39);
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
}

.bracelets h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0px;
    color: #000;
}

.buy_btn {
    display: none;
    background-color: #000;
    color: white;
    font-family: 'Arapey', serif;
    font-size: 22px;
    width: 80%;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 15px;
}

.bracelet_class:hover .buy_btn {
    transform: scale(1.05);
    background-color: black;
    color: white;
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.bracelet_class .buy_btn:hover {
    background-color: white;
    color: black;
}
</style>