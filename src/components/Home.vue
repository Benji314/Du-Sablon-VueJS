<script>
export default {
};
</script>

<template>
    <main>
        <div class="container-md the_base">
            <div class="row row_class">
                <div class="col-10 offset-1 col-md-8 offset-md-2 col_class">
                    <div class="graine-cafe">
                        <a href="/html/detailproduit.html"><img src="/img/R1241.001.png" alt=""></a>
                        <h1>GRAINE DE CAFE</h1>
                        <a href="">
                            <p class="discover">Découvrir la collection</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row row_class">
                <div class="col-12 col-md-10 offset-md-1 col_class">
                    <div class="fete-des-meres">
                        <a href=""><img src="/img/R1147.003-copie.jpg" alt=""></a>
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
            </div>
        </div>
    </main>
</template>

<style scoped>
.graine-cafe {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    height: auto;
    text-align: center;
}
.graine-cafe h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
    color: #000;
}
.graine-cafe p {
    font-size: 15px;
    color: rgb(235, 163, 39);
    margin-top: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
}
.graine-cafe h1 {
    transition: font-size 1s ease-in-out;
}
.graine-cafe a p {
    transition: font-size 1s ease-in-out;
}
.graine-cafe:hover a p {
    font-size: calc(15px + 3px);
}
.graine-cafe:hover h1 {
    font-size: calc(30px + 3px);
}
/**************************************************/
.fete-des-meres {
    margin-left: auto;
    margin-right: auto;
    /* width: 600px;
    height: auto; */
    text-align: center;
}
.fete-des-meres h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
}
.fete-des-meres p {
    font-size: 15px;
    color: rgb(227, 167, 14);
    margin-top: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
}
.fete-des-meres h1 {
    transition: font-size 1s ease-in-out;
}
.fete-des-meres a p {
    transition: font-size 1s ease-in-out;
}
.fete-des-meres:hover a p {
    font-size: calc(15px + 3px);
}
.fete-des-meres:hover h1 {
    font-size: calc(30px + 3px);
}
/**************************************************/
.maille-fine-femme {
    text-align: center;
}
.maille-fine-femme h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
}
.maille-fine-femme p {
    font-size: 15px;
    color: rgb(227, 167, 14);
    margin-top: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
}
.maille-fine-femme h1 {
    transition: font-size 1s ease-in-out;
}
.maille-fine-femme a p {
    transition: font-size 1s ease-in-out;
}
.maille-fine-femme:hover a p {
    font-size: calc(15px + 3px);
}
.maille-fine-femme:hover h1 {
    font-size: calc(30px + 3px);
}
/**************************************************/
.cuir-femme {
    text-align: center;
}
.cuir-femme h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Arapey', serif;
}
.cuir-femme p {
    font-size: 15px;
    color: rgb(227, 167, 14);
    margin-top: 0px;
    font-family: 'Arapey', serif;
    font-style: italic;
}
.cuir-femme h1 {
    transition: font-size 1s ease-in-out;
}
.cuir-femme a p {
    transition: font-size 1s ease-in-out;
}
.cuir-femme:hover a p {
    font-size: calc(15px + 3px);
}
.cuir-femme:hover h1 {
    font-size: calc(30px + 3px);
}
</style>