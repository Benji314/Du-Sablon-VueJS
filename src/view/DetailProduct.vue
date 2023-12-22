<script>
export default {
    data() {
        return {
            product: {},
        };
    },
    mounted() {
        this.detailProductData(this.$route.params.id);
    },
    methods: {
        detailProductData(productId) {
            fetch('/public/api/products/product' + productId + '.json')
                .then((response) => response.json())
                .then((detail_data) => {
                    this.product = detail_data;
                })
        },
    },

    watch: {
        '$route.params.id': function () {
            this.detailProductData(this.$route.params.id);
        }
    }
};
</script>

<template>
    <div class="container the_base">

        <div class="row row_class">
            <div class="col-6 col_class">
                <div class="first_img_product">
                    <img :src="product.path_img1" alt="">
                </div>
            </div>
            <div class="col-5 offset-1 col_class description_product mt-5">
                <h1>{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <h2 class="mb-4">€ {{ product.unitPrice }} <span class="incl_tva">incl. TVA</span></h2>
                <div class="add_cart_div">
                    <button class="add_cart_button w-100 rounded-pill mb-4">AJOUTER AU PANIER</button>
                </div>
                <div class="flex share_div d-flex justify-content-between">
                    <i class="fa-solid fa-share-nodes"></i>
                    <h3>PARTAGER</h3>
                    <span class="vertical-line2"></span>
                    <p>Ref. {{ product.ref }}</p>
                </div>
            </div>
        </div>
        <div class="row row_class">
            <div class="col-md-3 col_class img_product">
                <img :src="product.path_img2" alt="">
            </div>
            <div class="col-md-3 col_class img_product">
                <img :src="product.path_img3" alt="">
            </div>
        </div>
        <div class="row row_class">
            <div class="col-md-6 col_class img_product">
                <img :src="product.path_img4" alt="">
            </div>
        </div>

        <div class="row row_class associate_creation text-center">
            <h1>CREATIONS ASSIOCIEES</h1>
            <p>Découvrez les autres création uniques </p>
            <div class="col-md-4 col_class" v-for="associateProduct in product.associateProducts"
                :key="associateProduct.id">
                <router-link :to="{ name: 'detailproduct', params: { id: associateProduct.id } }">
                    <div class="others_img_div">
                        <img :src="associateProduct.product_img" alt="">
                    </div>
                </router-link>
                <h2>{{ associateProduct.product_name }}</h2>
                <h3>€ {{ associateProduct.product_price }}</h3>
                <router-link :to="{ name: 'detailproduct', params: { id: associateProduct.id } }">
                    <button class="associate_crea_btn w-75 rounded-pill mb-5">ACHETER</button>
                </router-link>
            </div>
        </div>
        <div class="row row_class grey_divs">
            <div class="col-md-5 col_class delivery_gift_div">
                <h1>LIVRAISON/RETOUR</h1>
                <p>Nous proposons différents modes de livraison. Choisissez celui que vous préférez. vous pouvez retourner
                    votre article Du sablon dans un délai de 15 jours.</p>
            </div>
            <div class="col-md-5 offset-md-2 col_class delivery_gift_div">
                <div class="dlvry_gift_content">
                    <h1>EMBALLAGES CADEAUX</h1>
                    <p>Envoyez vos cadeaux dans notre emballage spécial accompagné d’une carte personnalisée.</p>
                </div>
            </div>
        </div>

        <div class="row row_class three_arguments d-flex justify-content-center">
            <div class="col-md-3 col_class arguments_div">
                <i class="fa-solid fa-truck-fast"></i>
                <h1>LIVRAISON OFFERTE</h1>
            </div>
            <div class="col-md-3 col_class arguments_div">
                <i class="fa-solid fa-gift"></i>
                <h1>EMBALLAGES CADEAUX</h1>
            </div>
            <div class="col-md-3 col_class arguments_div">
                <i class="fa-solid fa-right-left"></i>
                <h1>RETOUR FACILE</h1>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
/* .first_img_product img {
    max-width: 100%;
} */

/* .img_product img {
    max-width: 100%;
} */

.description_product h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
}

.description_product p {
    font-family: 'Arapey', serif;
    font-weight: 400;
    font-size: 17px;
}

.description_product h2 {
    font-family: 'Arapey', serif;
    font-weight: 700;
}

.incl_tva {
    font-size: 17px;
    font-weight: lighter;
}

.add_cart_button {
    background-color: #000;
    color: white;
    font-family: 'Arapey', serif;
    font-size: 22px;
    height: 35px;
}

.add_cart_button:hover {
    transform: scale(1.05);
    background-color: white;
    color: #000;
    font-weight: bold;
}

.share_div {
    width: 40%;
}

.share_div i {
    font-size: 20px;
    color: rgb(227, 167, 14);
}

.share_div h3 {
    font-size: 17px;
    font-family: 'Arapey', serif;
}

.share_div p {
    font-size: 12px;
}

.vertical-line2 {
    border: 1px solid #000;
    height: 20px;
}

.share_div i:hover {
    color: black;
}

/***************************************************/
.others_img_div {
    min-height: 320px;
}

.associate_creation h1 {
    font-family: 'Arapey', serif;
    font-size: 35px;
}

.associate_creation p {
    font-family: 'Arapey', serif;
    font-size: 18px;
}

.associate_creation h2 {
    font-family: 'Arapey', serif;
    font-size: 30px;
}

.associate_creation h3 {
    font-family: 'Arapey', serif;
    font-size: 27px;
    font-weight: bold;
}

.associate_crea_btn {
    background-color: #000;
    color: white;
    font-family: 'Arapey', serif;
    font-size: 22px;
    height: 35px;
}

.associate_crea_btn:hover {
    transform: scale(1.05);
    background-color: white;
    color: #000;
    font-weight: bold;
}

/***************************************************/
.grey_divs {
    margin-top: 120px;
}
.delivery_gift_div {
    padding: 80px;
    background-color: rgb(236, 236, 236);
}
.delivery_gift_div h1 {
    font-family: 'Arapey', serif;
    font-size: 30px;
    font-weight: bold;
}
/***************************************************/
.three_arguments {
    margin: 120px 0;
}

.arguments_div {
    text-align: center;
    flex-direction: column;
}

.arguments_div i {
    display: block;
    margin: 40px auto;
    font-size: 40px;
}

.arguments_div h1 {
    font-family: 'Arapey', serif;
    font-size: 30px;
    font-weight: bold;
}
</style>