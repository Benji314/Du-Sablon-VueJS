<script>
export default {
    data() {
        return {
            cartProducts: [],
        };
    },
    mounted() {
        this.cartData();
    },
    methods: {
        cartData() {
            fetch('/public/api/cart.json')
                .then((response) => response.json())
                .then((cart_data) => {
                    this.cartProducts = cart_data.products;
                    this.cartProducts.forEach((product) => {
                        product.totalLine = (product.unitPrice * product.quantity).toFixed(2);
                    });
                });
        },
        updateTotalLine(product) {
            product.totalLine = (product.unitPrice * product.quantity).toFixed(2);
        },
        deleteProduct(product) {
            const index = this.cartProducts.indexOf(product);
            if (index > -1) {
                this.cartProducts.splice(index, 1);
            }
        },
    },
    computed: {
        totalCart() {
            const total = this.cartProducts.reduce((totalP, product) => {
                return totalP + parseFloat(product.totalLine);
            }, 0);
            return total.toFixed(2);
        },
    },


};
</script>

<template>
    <div class="container-md the_base">
        <div class="row row_class">
            <div class="col_class cart_title d-flex justify-content-center">
                <h1>PANIER</h1>
            </div>
        </div>
        <div class="row row_class">
            <div class="col_class table-responsive">
                <table class="panier-table mx-auto">
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th class="d-none d-sm-table-cell">Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in cartProducts" :key="product.id" class="cart_product">
                            <td><a href=""><img :src="product.path_img" alt="" class="w-100"></a></td>
                            <td class="d-none d-sm-table-cell">{{ product.name }}</td>
                            <td class="price_unit">{{ product.unitPrice }} €</td>
                            <td class="quantity">
                                <input @input="updateTotalLine(product)" v-model="product.quantity" type="number" min="0"/>
                            </td>
                            <td class="total_price">{{ product.totalLine }} €</td>
                            <td class="delete mt-5 d-none d-md-block">
                                <button @click="deleteProduct(product)" class="btn"><i
                                        class="fa-regular fa-square-minus"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="cart_foot">
                            <td colspan="3">Total</td>
                            <td class="total_cart" colspan="2">{{ totalCart }} €</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row row_class">
                <div class="col_class payment_button">
                    <button id="confirm-command" class="px-3 rounded-pill text-uppercase mt-5">Procéder à l'achat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart_title h1 {
    font-family: 'Arapey', serif;
}

.panier-table th {
    border: 1.5px solid black;
    min-width: 100px;
    padding: 10px;
    text-align: center;
    font-size: larger;
}

.panier-table td {
    max-width: 200px;
    border: 1.5px solid black;
    text-align: center;
    padding: 10px;
}

.panier-table .delete {
    border: none;
}

.cart_product {
    font-weight: 600;
}

.cart_product .total_price {
    font-weight: bold;
}

tfoot {
    font-weight: bold;
}

.panier-table .cart_foot td {
    max-width: 200px;
    border: none;
    text-align: end;
    font-size: larger;
    padding-top: 30px;
}

.panier-table input {
    max-width: 38px;
    text-align: center;
    border: none;
}

.payment_button {
    display: flex;
    justify-content: center;
}

#confirm-command {
    min-height: 50px;
    border: 2px solid rgb(227, 167, 14);
    background-color: white;
    font-weight: bold;
    font-size: 20px;
}

#confirm-command:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}
</style>

  

  