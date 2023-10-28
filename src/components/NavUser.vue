<script>
export default {
};
</script>

<template>
    <div>
        <h1>DU SABLON</h1>
        <div class="d-flex flex-column">
            <nav>
                <ul class="profil_menu">
                    <li>
                        <router-link :to="{ name: 'login' }">
                            aperçu
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'profile' }">
                            mon profil
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'myorder' }">
                            mes commandes
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'adress' }">
                            mes adresses
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'wishlist' }">
                            ma wishlist
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
