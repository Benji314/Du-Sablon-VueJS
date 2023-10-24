<script>
export default {
    data() {
        return {
            product: {},
        };
    },
    mounted() {
        const productId = 1;
        this.DetailProductData(productId);
    },
    methods: {
        DetailProductData(productId) {
            fetch('/public/api/products.json')
                .then((response) => response.json())
                .then((detail_data) => {
                    const product = detail_data.products.find((product) => product.id === productId);
                    if (product) {
                        this.product = product;
                    } else {
                        console.error("Erreur de chargement");
                    }
                })
        },
    },
};
</script>

<template>

        <div class="row row_class">
            <div class="col-6 col_class">
                <div class="first_img_product">
                    <a href=""><img :src="product.path_img1" alt=""></a>
                </div>
            </div>
            <div class="col-5 offset-1 col_class description_product">
                <h1>{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <h2>€ {{ product.unitPrice }} <span class="incl_tva">incl. TVA</span></h2>
                <div class="add_cart_div">
                    <button class="add_cart_button">AJOUTER AU PANIER</button>
                </div>
                <div class="flex share_div">
                    <i class="fa-solid fa-share-nodes"></i>
                    <h3>PARTAGER</h3>
                    <span class="vertical-line2"></span>
                    <p>Ref. {{ product.ref }}</p>
                </div>
            </div>
        </div>
        <div class="row row_class">
            <div class="col-md-3 col_class img_product">
                <a href=""><img :src="product.path_img2" alt=""></a>
            </div>
            <div class="col-md-3 col_class img_product">
                <a href=""><img :src="product.path_img3" alt=""></a>
            </div>
        </div>
        <div class="row row_class">
            <div class="col-md-6 col_class img_product">
                <a href=""><img :src="product.path_img4" alt=""></a>
            </div>
        </div>

</template>
  
<style scoped>
.first_img_product img {
    max-width: 100%;
}
.img_product img {
    max-width: 100%;
}
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
    margin-bottom: 20px;
}
.incl_tva {
    font-size: 17px;
    font-weight: lighter;
}
.add_cart_div {
    text-align: center;
    align-items: center;
}
.add_cart_button {
    background-color: #000;
    color: white;
    font-family: 'Arapey', serif;
    font-size: 22px;
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    border-radius: 20px;
}
.add_cart_button:hover {
    transform: scale(1.05);
    background-color: white;
    color: #000;
    font-weight: bold;
}
.share_div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 40%;
}
.share_div i {
    font-size: 20px;
    color: rgb(227, 167, 14);
}
.share_div h3 {
    font-size: 17px;
    margin: 0;
    font-family: 'Arapey', serif;
}
.share_div p {
    margin: 0;
    font-size: 12px;
}
.vertical-line2 {
    border: 1px solid #000;
    display: inline-block;
    height: 20px;
}
.share_div i:hover {
    color: black;
}</style>