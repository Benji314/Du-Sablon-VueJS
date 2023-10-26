<script>
export default {
    data() {
        return {
            homeProducts: [],
        };
    },

    mounted() {
        this.HomeProductData();
    },

    methods: {
        HomeProductData() {
            fetch('/public/api/home.json')
                .then((response) => response.json())
                .then((home_data) => {
                    this.homeProducts = home_data.homeProducts;
                });
        },
    },
};
</script>

<template>
    <main>
        <div class="container-md the_base">

            <div class="row row_class2">
                <div v-for="(homeProduct, index) in homeProducts" :key="homeProduct.id" class="col_class"
                    :class="{ 'col-md-10 offset-1': index % 3 === 0, 'col-md-5 offset-1': index % 3 !== 0 }">
                    <div class="collection_div">
                        <router-link :to="{ name: 'collection', params: { id: homeProduct.id } }">
                            <img :src="homeProduct.path_img" alt="">
                            <h1>{{ homeProduct.name }}</h1>
                            <p class="discover">Découvrir la collection</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <div class="row row_class">
                <div class="col-10 offset-1 col-md-8 offset-md-2 col_class">
                    <div class="graine-cafe">
                        <router-link :to="{ name: 'grainecafe' }">
                            <img src="/img/R1241.001.png" alt="">
                            <h1>GRAINE DE CAFE</h1>
                            <p class="discover">Découvrir la collection</p>
                        </router-link>
                    </div>
                </div>
            </div> -->
            <!-- <div class="row row_class">
                <div class="col-12 col-md-10 offset-md-1 col_class">
                    <div class="fete-des-meres">
                        <a href=""><img src="/public/img/R1147.003.jpg" alt=""></a>
                        <h1>FETE DES MERES</h1>
                        <a href="">
                            <p class="discover">Découvrir</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row row_class">
                <div class="col-10 offset-1 col-md-5 offset-md-1 col_class">
                    <div class="maille-fine-femme">
                        <a href=""><img src="/img/R1128.001.png" alt=""></a>
                        <h1>MAILLE FINE FEMME</h1>
                        <a href="">
                            <p class="discover">Découvrir la sélection</p>
                        </a>
                    </div>
                </div>
                <div class="col-10 offset-1 col-md-5 col_class">
                    <div class="cuir-femme">
                        <a href=""><img src="/img/R1110.001.png" alt=""></a>
                        <h1>BRACELETS CUIR FEMME</h1>
                        <a href="">
                            <p class="discover">Découvrir la collection</p>
                        </a>
                    </div>

                </div>
            </div>
            <div class="row row_class">
                <div class="col-10 offset-1 col-md-10 offset-md-1 col_class">
                    <div class="graine-cafe">
                        <a href=""><img src="/img/R1209.001.png" alt=""></a>
                        <h1>BRACELETS CUIR HOMME</h1>
                        <a href="">
                            <p class="discover">Découvrir la collection</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row row_class">
                <div class="col-10 offset-1 col-md-5 offset-md-1 col_class">
                    <div class="maille-fine-femme">
                        <a href=""><img src="/img/R1165.001.png" alt=""></a>
                        <h1>SELECTION DU SABLON</h1>
                        <a href="">
                            <p class="discover">Découvrir la sélection</p>
                        </a>
                    </div>
                </div>
                <div class="col-10 offset-1 col-md-5 col_class">
                    <div class="cuir-femme">
                        <a href=""><img src="/img/R1153.001.png" alt=""></a>
                        <h1>COLLECTION PAYS</h1>
                        <a href="">
                            <p class="discover">Découvrir la collection</p>
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </main>
</template>

<style scoped>
.discover:hover {
    text-decoration: underline;
}

.collection_div {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    height: auto;
    text-align: center;
}

.collection_div h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
    color: #000;
    text-transform: uppercase;
    transition: font-size 1s ease-in-out;
}

.collection_div p {
    font-size: 15px;
    color: rgb(235, 163, 39);
    margin-top: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
    transition: font-size 1s ease-in-out;
}

.collection_div:hover p {
    font-size: calc(15px + 3px);
}

.collection_div:hover h1 {
    font-size: calc(30px + 3px);
}
</style>