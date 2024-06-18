<script>
export default {
    data() {
        return {
            braceletsBeforeFilters: [],
            bracelets: [],
            sortByPrice: false,
            selectedGender: null,
        };
    },

    mounted() {
        this.braceletData();
    },

    methods: {
        braceletData() {
            fetch('/public/api/bracelets.json')
                .then((response) => response.json())
                .then((bracelet_data) => {
                    this.braceletsBeforeFilters = bracelet_data.bracelets;
                    this.bracelets = this.braceletsBeforeFilters;
                });
        },
        braceletsByPrice() {
            if (this.sortByPrice === 'crescent') {
                this.bracelets.sort((a, b) => a.unitPrice - b.unitPrice); // Tri croissant
            } else if (this.sortByPrice === 'descending') {
                this.bracelets.sort((a, b) => b.unitPrice - a.unitPrice); // Tri décroissant
            } else {
                this.braceletData();
            }
        },
        braceletsByGender() {
            if (this.selectedGender === "femme") {
                this.bracelets = this.braceletsBeforeFilters.filter((bracelet) => bracelet.gender === "Femme");
            } else if (this.selectedGender === "homme") {
                this.bracelets = this.braceletsBeforeFilters.filter((bracelet) => bracelet.gender === "Homme");
            } else {
                this.bracelets = this.originalBracelets;
            }
        },
    },

    watch: {
        sortByPrice: 'braceletsByPrice',
        selectedGender: 'braceletsByGender',
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row row_class">
                <div class="col-md-2 col_class filters mt-5">
                    <h1>TRIER PAR</h1>
                    <div class="d-flex flex-column">
                        <!-- <div class="mb-2">
                            <input type="radio" name="order_by" id="conseilles_option" class="" value="">
                            <label for="conseilles_option">Conseillés</label>
                        </div> -->
                        <div>
                            <input type="radio" name="order_by" id="prix_croissant_option" value="crescent"
                                v-model="sortByPrice">
                            <label for="prix_croissant_option">Prix croissant</label>
                        </div>
                        <div>
                            <input type="radio" name="order_by" id="prix_decroissant_option" value="descending"
                                v-model="sortByPrice">
                            <label for="prix_decroissant_option">Prix décroissant</label>
                        </div>
                    </div>
                    <hr>
                    <h1>FILTRER PAR</h1>
                    <div class="d-flex flex-column">
                        <div>
                            <input type="radio" name="filter_option" id="femme_option" value="femme"
                                v-model="selectedGender">
                            <label for="femme_option">Femme</label>
                        </div>
                        <div>
                            <input type="radio" name="filter_option" id="homme_option" value="homme"
                                v-model="selectedGender">
                            <label for="homme_option">Homme</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 col_class">
                    <div class="row row_class2">
                        <div class="col-md-2 col_class nb_article d-flex align-items-center">
                            <p>Nombre d'articles : {{ bracelets.length }}</p>
                        </div>
                        <div class="col-md-4 offset-md-2 col_class title_bracelet">
                            <h1 class="text-center">BRACELETS</h1>
                        </div>
                    </div>
<<<<<<< Updated upstream

                    <!-- Caroussel  -->
                    <div id="carouselBracelets" class="carousel slide mb-5" data-bs-ride="carousel">
=======
<<<<<<< HEAD
                    <div id="carouselBracelets" class="carousel slide" data-bs-ride="carousel">
=======

                    <!-- Caroussel  -->
                    <div id="carouselBracelets" class="carousel slide mb-5" data-bs-ride="carousel">
>>>>>>> f8a0cbbafe6d562af0eb7f516ef8468cc13e2c32
>>>>>>> Stashed changes
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="5000">
                                <img src="/public/img/bracelet_accueil.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="/public/img/DuSablonLogoZoom.png" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="/public/img/DuSablonLogoZoom2.png" class="d-block w-100" alt="">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselBracelets"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselBracelets"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                <div class="row row_class2 mt-3">
                    <div v-for="bracelet in bracelets" :key="bracelet.id" class="col-md-4 col_class bracelet_class mb-4">
                        <div class="bracelets mx-auto w-100 text-center">
                            <router-link :to="{ name: 'detailproduct', params: { id: bracelet.id } }">
                                <img :src="bracelet.path_img" alt="" class="bracelet_img img-fluid">
                            </router-link>
                            <h1 class="my-0">{{ bracelet.name }}</h1>
                            <p>Du Sablon</p>
                            <h2>€ {{ bracelet.unitPrice }}</h2>
                            <router-link :to="{ name: 'detailproduct', params: { id: bracelet.id } }">
                                <button class="buy_btn w-75 rounded-pill">ACHETER</button>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>


<style scoped>
.filters h1 {
    font-family: 'Arapey', serif;
    font-size: 25px;
}

.filters .d-flex.flex-column>div {
    margin-bottom: 10px;
    margin-left: 20px;
    font-family: 'Arapey', serif;
}

.filters input[type="radio"] {
    display: none;
}

.filters input[type="radio"]+label {
    position: relative;
    padding-left: 30px;
}

.filters input[type="radio"]+label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border: 1px solid rgb(227, 167, 14);
    background-color: #fff;
}

.filters input[type="radio"]:checked+label::before {
    background-color: rgb(227, 167, 14);
    border-color: rgb(227, 167, 14);
}

.nb_article p {
    font-family: 'Arapey', serif;
    font-size: 16px;
}

.title_bracelet h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
}

.img_bracelet img {
    width: 100%;
}

.bracelet_class {
    position: relative;
}

.bracelet_img {
    min-height: 320px;
}

.bracelets h1 {
    font-weight: 600;
    font-size: 20px;
    font-family: 'Arapey', serif;
}

.bracelets p {
    font-size: 10px;
    color: rgb(235, 163, 39);
    font-family: 'Arapey', serif;
    font-style: italic;
}

.bracelets h2 {
    font-weight: 600;
    font-size: 20px;
}

.buy_btn {
    display: none;
    font-family: 'Arapey', serif;
    font-size: 22px;
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
}</style>