<script>
export default {
};
</script>

<template>
    <header>
        <div class="container">
            <div class="row row_class">
                <div class="col-md-4 offset-md-4 col_class">
                    <router-link :to="{ name: 'home' }">
                        <img class="logo_top" src="/public/img/DuSablonLogoZoom.png" alt="">
                    </router-link>
                </div>
                <div class="col-2 col-md-2 offset-md-1 col-lg-2 offset-lg-2 mt-3 col_class">
                    <div class="row text-center">
                        <div class="col-12 mt-4 col-md-6 main-nav ">
                            <router-link :to="{ name: 'account' }">
                                <i class="fa-regular fa-circle-user"></i>
                            </router-link>
                        </div>
                        <div class="col-12 mx-auto mt-4 col-md-6 main-nav">
                            <router-link :to="{ name: 'cart' }">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row_class2">
                <div class="col-md-6 offset-md-3 col_class">
                    <nav class="main-nav-menu">
                        <ul class="flex nav_menu">
                            <li class="nav-item mx-auto"><router-link class="nav-link" :to="{ name: 'bracelets' }">BRACELETS</router-link></li>
                            <li class="nav-item mx-auto"><a class="nav-link" href="">COLLIERS</a></li>
                            <li class="nav-item mx-auto"><a class="nav-link" href="">BAGUES</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-1 col_class">
                    <nav class="main-nav-menu">
                        <ul class="d-flex justify-content-start align-items-center">
                            <li><span class="vertical-line d-inline-block"></span></li>
                            <li><i class="fa-solid fa-magnifying-glass ms-2"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr class="hr_class">
        </div>
    </header>
</template>

<style scoped></style>