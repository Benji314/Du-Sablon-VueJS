<script>
export default {
    data() {
        return {
            braceletsBeforeFilters: [],
            collection: [],
            collection_name: "",
            sortByPrice: false,
            selectedGender: null,
        };
    },

    mounted() {
        const collectionId = this.$route.params.id;
        this.collectionData(collectionId);
    },

    methods: {
        collectionData(collectionId) {
            fetch('/public/api/collections/collection'+ collectionId + '.json')
                .then((response) => response.json())
                .then((bracelet_data) => {
                    this.braceletsBeforeFilters = bracelet_data.collection;
                    this.collection = this.braceletsBeforeFilters;
                    this.collection_name = bracelet_data.collection_name;
                });
        },
        collectionByPrice() {
            if (this.sortByPrice === 'ascending') {
                this.collection.sort((a, b) => a.unitPrice - b.unitPrice); // Tri croissant
            } else if (this.sortByPrice === 'descending') {
                this.collection.sort((a, b) => b.unitPrice - a.unitPrice); // Tri décroissant
            } else {
                this.collectionData();
            }
        },
        collectionByGender() {
            if (this.selectedGender === "femme") {
                this.collection = this.braceletsBeforeFilters.filter((product) => product.gender === "Femme");
            } else if (this.selectedGender === "homme") {
                this.collection = this.braceletsBeforeFilters.filter((product) => product.gender === "Homme");
            } else {
                this.collection = this.originalBracelets;
            }
        },
    },

    watch: {
        sortByPrice: 'collectionByPrice',
        selectedGender: 'collectionByGender',
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row row_class">
                <div class="col-md-2 col_class filters">
                    <h1>TRIER PAR</h1>
                    <div class="d-flex flex-column">
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
                            <input type="radio" name="filter_option" id="femme_option" value="femme" v-model="selectedGender">
                            <label for="femme_option">Femme</label>
                        </div>
                        <div>
                            <input type="radio" name="filter_option" id="homme_option" value="homme" v-model="selectedGender">
                            <label for="homme_option">Homme</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 col_class">
                    <div class="row row_class2">
                        <div class="col-md-2 col_class nb_article d-flex mt-0">
                            <p>Nombre d'articles : {{ collection.length }}</p>
                        </div>
                        <div class="col-md-5 offset-md-1 col_class title_bracelet mt-5">
                            <h1 class="text-center text-uppercase">{{ collection_name }}</h1>
                        </div>
                    </div>
                </div>

                <div class="row row_class2">
                    <div v-for="product in collection" :key="product.id" class="col-md-4 col_class bracelet_class">
                        <div class="bracelets w-100 text-center">
                            <router-link :to="{ name: 'detailproduct', params: { id: product.id }}">
                                <img :src="product.path_img" alt="">
                            </router-link>
                            <h1 class="my-0">{{ product.name }}</h1>
                            <p>Du Sablon</p>
                            <h2>€ {{ product.unitPrice }}</h2>
                            <router-link :to="{ name: 'detailproduct', params: { id: product.id }}">
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
.bracelet_class {
    position: relative;
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
}
</style>