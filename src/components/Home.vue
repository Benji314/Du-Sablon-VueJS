<script>
export default {
    data() {
        return {
            homeProducts: [],
        };
    },

    mounted() {
        this.homeProductData();
    },

    methods: {
        homeProductData() {
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