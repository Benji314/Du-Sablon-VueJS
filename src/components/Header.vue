<script>
export default {
};
</script>

<template>
    <header>
        <div class="container">
            <div class="row row_class">
                <div class="col-md-4 offset-md-4 col_class">
                    <a href="/html/home.html"><img class="logo_top " src="/public/img/DuSablonLogoZoom.png" alt=""></a>
                </div>
                <div class="col-md-2 offset-md-2 col_class">
                    <nav class="main-nav flex">
                        <router-link :to="{ name: 'account' }">
                            <i class="fa-regular fa-circle-user"></i>
                        </router-link>
                        <router-link :to="{ name: 'cart' }">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                        </router-link>
                    </nav>
                </div>
            </div>
            <div class="row row_class2">
                <div class="col-md-6 offset-md-3 col_class">
                    <nav class="main-nav-menu">
                        <ul class="flex nav_menu">
                            <li><router-link :to="{ name: 'bracelets' }">BRACELETS</router-link></li>
                            <li><a href="">COLLIERS</a></li>
                            <li><a href="">BAGUES</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-1 col_class">
                    <nav class="main-nav-menu">
                        <ul class="flex nav_search">
                            <li><span class="vertical-line"></span></li>
                            <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr class="hr_class">
        </div>
    </header>
</template>

<style scoped></style>