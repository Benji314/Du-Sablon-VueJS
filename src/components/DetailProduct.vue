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
    <div class="container the_base">

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

        <div class="row row_class associate_creation">
            <h1>CREATIONS ASSIOCIEES</h1>
            <p>Découvrez les autres création uniques </p>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1231.001.png" alt=""></a>
                </div>
                <h2>GRAINE DE CAFE NOIRE</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1232.001.png" alt=""></a>
                </div>
                <h2>GRAINE DE CAFE OR</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1229.001.png" alt=""></a>
                </div>
                <h2>BRACELET OR</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
        </div>
        <div class="row row_class grey_divs">
            <div class="col-md-5 col_class delivery_gift_div">
                <div class="dlvry_gift_content">
                    <h1>LIVRAISON/RETOUR</h1>
                    <p>Nous proposons différents modes de livraison. Choisissez celui que vous préférez. vous pouvez
                        retourner votre article Du sablon dans un délai de 15 jours.</p>
                </div>
            </div>
            <div class="col-md-5 offset-md-2 col_class delivery_gift_div">
                <div class="dlvry_gift_content">
                    <h1>EMBALLAGES CADEAUX</h1>
                    <p>Envoyez vos cadeaux dans notre emballage spécial accompagné d’une carte personnalisée.</p>
                </div>
            </div>
        </div>
        <div class="row row_class associate_creation">
            <h1>Vous aimerez aussi</h1>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1231.001.png" alt=""></a>
                </div>
                <h2>GRAINE DE CAFE NOIRE</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1232.001.png" alt=""></a>
                </div>
                <h2>GRAINE DE CAFE OR</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
            <div class="col-md-4 col_class">
                <div class="others_img_div">
                    <a href="/html/detailproduit.html"><img src="/img/R1229.001.png" alt=""></a>
                </div>
                <h2>BRACELET OR</h2>
                <h3>€ 14,5</h3>
                <a href="/html/detailproduit.html"><button class="associate_crea_btn">ACHETER</button></a>
            </div>
        </div>
        <div class="row row_class three_arguments">
            <div class="col-md-3 offset-md-1 col_class arguments_div">
                <i class="fa-solid fa-truck-fast"></i>
                <h1>LIVRAISON OFFERTE</h1>
            </div>
            <div class="col-md-4 col_class arguments_div">
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
}
/***************************************************/
.associate_creation {
    text-align: center;
}
.others_img_div {
    /* border: 1px solid #000; */
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
    width: 80%;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 15px;
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
    margin-bottom: 80px;
}
.delivery_gift_div {
    min-height: 300px;
    background-color: rgb(236, 236, 236);
    display: flex;
    justify-content: center;
}
.dlvry_gift_content {
    width: 60%;
}
.delivery_gift_div h1 {
    font-family: 'Arapey', serif;
    font-size: 30px;
    font-weight: bold;
    margin-top: 25%;
}
/***************************************************/
.three_arguments {
    display: flex;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: 200px;
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
    font-size: 35px;
    font-weight: bold;
}
</style>