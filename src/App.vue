<script>

export default {

};
</script>

<template>
  <div>
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
              <a href="/html/cart.html"><i class="fa-solid fa-cart-arrow-down"></i></a>
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

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="container the_base">
        <div class="row row_class">
          <div class="col-md-8 offset-md-2 col_class">
            <hr>
            <div class="reseaux">
              <h1>NOUS SUIVRE</h1>
              <nav class="reseaux-nav">
                <ul class="flex">
                  <a href="">
                    <li><i class="fa-brands fa-instagram"></i></li>
                  </a>
                  <a href="">
                    <li><i class="fa-brands fa-facebook"></i></li>
                  </a>
                  <a href="">
                    <li><i class="fa-brands fa-pinterest"></i></li>
                  </a>

                </ul>
              </nav>
            </div>
            <hr>
          </div>
        </div>
        <div class="row row_class">
          <div class="col-md-5 offset-md-1 col_class ">
            <div class="service_client">
              <h1>SERVICE CLIENT</h1>
              <a href="">
                <h5>NOUS CONTACTER </h5>
              </a>
              <a href="">
                <h5>ACHAT EN LIGNE </h5>
              </a>
              <a href="">
                <h5>SUIVEZ VOTRE COMMANDE </h5>
              </a>
              <a href="">
                <h5>EXPEDITION ET LIVRAISON </h5>
              </a>
              <a href="">
                <h5>COMMANDES ET PAIEMENT </h5>
              </a>
              <a href="">
                <h5>AIDE </h5>
              </a>
            </div>
          </div>
          <div class="col-md-5 col_class">
            <div class="service_client">
              <h1>LEGAL ET CONFIDENTIALITE</h1>
              <a href="">
                <h5>CONDITIONS D'UTILISATION</h5>
              </a>
              <a href="">
                <h5>CONDITIONS DE VENTE</h5>
              </a>
              <a href="">
                <h5>POLITIQUE DE RETOUR </h5>
              </a>
              <a href="">
                <h5>POLITIQUE DE CONFIDENTIALITE</h5>
              </a>
              <a href="">
                <h5>POLITIQUE DES COOKIES </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row_class_footer">
        <div class="col-md-4 offset-md-4 col_class">
          <a href=""><img class="logo_top" src="/public/img/DuSablonLogoZoom2.png" alt=""></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
