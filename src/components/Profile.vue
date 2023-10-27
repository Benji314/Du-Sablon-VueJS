<script>
export default {
    data() {
        return {
            civility: '',
            firstName: 'Prénom',
            lastName: 'Nom',
            day: '',
            month: '',
            year: '',
        };
    },
    methods: {
        profileData(event) {
            event.preventDefault();
            console.log("Civilité:", this.civility);
            console.log("Prénom:", this.firstName);
            console.log("Nom:", this.lastName);
            console.log("Date de naissance:", this.day, "/", this.month, "/", this.year);
        },
    },
};
</script>

<template>
    <div class="row row_class">
        <div class="col-md-2 offset-md-1 col_class profil_nav">
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

        <div class="col-md-8 col_class">
            <div class="row row_class2 welcome_user">
                <h2>BIENVENUE USER</h2>
                <p>À partir de votre compte Du Sablon, vous pouvez gérer et garder la trace de votre expérience
                    d’achat personnalisée sur la boutique en ligne Du Sablon.</p>
                <button id="disconnect">déconnexion</button>
            </div>

            <div class="row row_class2">
                <div class="col-md-6 col_class user_profil">
                    <div class="profil_form_head">
                        <h3>BIENVENUE BENJAMIN</h3>
                        <p>Vérifiez et modifiez vos informations personnelles, votre adresse email et votre mot de
                            passe.</p>
                    </div>
                    <div class="profil_form">
                        <form @submit="profileData" id="profil_form_data" action="">
                            <div class="change_email_password">
                                <button><a href="">Changer d'adresse email</a></button>
                                <button><a href="">Changer de mot de passe</a></button>
                            </div>
                            <h4>Civilité *</h4>
                            <div class="civility_div">
                                <div class="radio_button">
                                    <input v-model="civility" id="profile_civility1" name="profile_civility" type="radio"
                                        value="Mme">
                                    <label for="profile_civility1">Mme</label>
                                </div>
                                <div class="radio_button">
                                    <input v-model="civility" id="profile_civility2" name="profile_civility" type="radio"
                                        value="M">
                                    <label for="profile_civility2">M.</label>
                                </div>
                            </div>

                            <h4>Prénom *</h4>
                            <div class="name_div">
                                <input v-model="firstName" id="profile_name" type="text" placeholder required />
                            </div>
                            <h4>Nom *</h4>
                            <div class="name_div">
                                <input v-model="lastName" id="profile_lastname" type="text" placeholder required />
                            </div>
                            <h4>Date de naissance</h4>
                            <div class="born_div">
                                <input type="hidden" value="">
                                <div class="born_input day">
                                    <select v-model="day" name="day" id="day">
                                        <option value="selected">Jour</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>

                                <div class="born_input day">
                                    <select v-model="month" name="month" id="month">
                                        <option value="selected">Mois</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>

                                <div class="born_input year">
                                    <select v-model="year" name="year" id="year">
                                        <option value="selected">Année</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                    </select>
                                </div>

                            </div>

                            <div class="col-md-12 col_class user_profil_save">
                                <button type="submit" id="save">sauvegarder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row row_class2">
                <div class="col-md-6 col_class user_profil_foot">
                    <p>Pour plus de renseignements sur la façon dont nous utilisons vos données à caractère personnel, veuillez consulter notre 
                        <a href="">Politique de Confidentialité</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user_profil {
    padding-left: 50px;
}

.profil_form_head h3 {
    margin-top: 20px;
    font-family: 'Arapey', serif;
    font-size: 25px;
    width: 600px;
}

.profil_form_head p {
    margin-top: 20px;
    font-family: 'Arapey', serif;
    font-size: 16px;
    width: 75%;
}

.profil_form {
    margin-bottom: 20px;
}

.profil_form h4 {
    margin-bottom: 10px;
    color: grey;
    font-size: 15px;
    font-family: 'Arapey', serif;
}

.change_email_password button {
    text-align: left;
    margin-right: 20px;
    margin-bottom: 40px;
    border: none;
    background-color: white;
}

.change_email_password button a {
    color: black;
    font-family: 'Arapey', serif;
    font-size: 16px;
    font-style: italic;
}

.change_email_password button a:hover {
    font-size: calc(16px + 1px);
    text-decoration: underline;
    text-decoration-color: rgb(227, 167, 14);
}

.civility_div {
    display: flex;
    margin-bottom: 30px;
}

.radio_button {
    margin-right: 60px;
}

.name_div input {
    border: 0;
    border-bottom: 1px solid #000;
    font-family: 'Arapey', serif;
    font-size: 18px;
    margin-bottom: 20px;
}

.born_div {
    display: flex;
    flex-flow: row nowrap;
}

.born_input {
    flex-basis: 33.33333333333%;
}

.born_input select {
    min-width: 100%;
    min-height: 30px;
    border-top: none;
}

.user_profil_foot {
    padding-left: 50px;
}

.user_profil_foot p {
    margin-top: 20px;
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.user_profil_foot a {
    color: black;
    text-decoration: underline;
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.user_profil_foot a:hover {
    text-decoration: none;
}

#save {
    min-height: 50px;
    width: 200px;
    margin-top: 40px;
    border: 2px solid rgb(227, 167, 14);
    background-color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
}

#save:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}</style>
