<script>
export default {
    data() {
        return {
            civility: '',
            firstName: '',
            lastName: '',
            email: '',
            confirm_email: '',
            phone_number: '',
            password: '',
            confirm_password: '',
            day: '',
            month: '',
            year: '',
        };
    },
    computed: {
        isFormValid() {
            return (
                this.civility !== '' &&
                this.firstName !== '' &&
                this.lastName !== '' &&
                this.email !== '' &&
                this.confirm_email !== '' && this.confirm_email === this.email &&
                this.password !== '' &&
                this.confirm_password !== '' && this.confirm_password === this.password &&
                this.day !== '' &&
                this.month !== '' &&
                this.year !== ''
            );
        },
    },
    methods: {
        createAccountData(event) {
            event.preventDefault();
            if (this.isFormValid) {
                console.log("Civilité:", this.civility);
                console.log("Prénom:", this.firstName);
                console.log("Nom:", this.lastName);
                console.log("Adresse email:", this.email);
                console.log("Confirmation de l'adresse email:", this.confirm_email);
                console.log("Numéro de téléphone:", this.phone_number);
                console.log("Mot de passe:", this.password);
                console.log("Confirmation du mot de passe:", this.confirm_password);
                console.log("Date de naissance:", this.day, "/", this.month, "/", this.year);
                this.$router.push({ name: 'login' });
            } else {
                console.log("Veuillez remplir tous les champs requis.");
            }
        },
    },
};
</script>

<template>
    <div class="row row_class">
        <div class="col-md-4 offset-md-4 col_class create_account_div mb-5 mt-4">
            <div class="account_creation p-5">
                <h1 class="text-center text-uppercase mb-4">créez votre compte</h1>
                <p>Cet espace vous permet de gérer vos informations personnelles, vos commandes en ligne, votre abonnement
                    aux newsletters et flux d’actualités.</p>
                <div class="create_account_form mt-5 ps-3">
                    <form @submit="createAccountData" id="connection_form_data">
                        <h2 class="mb-3">Civilité *</h2>
                        <div class="civility_div d-flex mb-4">
                            <div class="radio_button me-5">
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
                        <h2>Prénom *</h2>
                        <div class="input_div">
                            <input v-model="firstName" id="profile_name" type="text" placeholder required />
                        </div>
                        <h2>Nom *</h2>
                        <div class="input_div">
                            <input v-model="lastName" id="profile_lastname" type="text" placeholder required />
                        </div>
                        <h2>Adresse email *</h2>
                        <div class="input_div">
                            <input v-model="email" id="profile_email" type="text" placeholder required />
                        </div>
                        <h2>Confirmation de l'adresse email *</h2>
                        <div class="input_div">
                            <input v-model="confirm_email" id="profile_confirm_email" type="text" placeholder required />
                        </div>
                        <h2>N° de téléphone</h2>
                        <div class="input_div">
                            <input v-model="phone_number" data-val-regex-pattern="^[0-9]{5,20}$" id="profile_phone"
                                type="tel" />
                        </div>
                        <h2>Mot de passe *</h2>
                        <div class="input_div">
                            <input v-model="password" id="profile_password" type="password" placeholder required />
                        </div>
                        <h2>Confirmer le mot de passe *</h2>
                        <div class="input_div">
                            <input v-model="confirm_password" id="profile_confirm_password" type="password" placeholder
                                required />
                        </div>
                        <h2>Date de naissance *</h2>
                        <div class="born_div d-flex">
                            <input type="hidden">
                            <div class="born_input2 day">
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
                                    <option value="19"></option>
                                    <option value="20"></option>
                                    <option value="21"></option>
                                    <option value="22"></option>
                                    <option value="23"></option>
                                    <option value="24"></option>
                                    <option value="25"></option>
                                    <option value="26"></option>
                                    <option value="27"></option>
                                    <option value="28"></option>
                                    <option value="29"></option>
                                    <option value="30"></option>
                                    <option value="31"></option>
                                </select>
                            </div>
                            <div class="born_input2 day">
                                <select v-model="month" name="month" id="month">
                                    <option value="selected">Mois</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                </select>
                            </div>
                            <div class="born_input2 year">
                                <select v-model="year" name="year" id="year">
                                    <option value="selected">Année</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        </div>
                        <p class="mt-4 pe-3">Pour plus de renseignements sur la façon dont nous utilisons vos données à
                            caractère personnel,
                            veuillez consulter notre <a href="">Politique de Confidentialité.</a></p>
                        <div class="text-center">
                            <!-- <router-link :to="{ name: 'login' }"> -->
                            <button type="submit" id="create_account_btn" class="mt-4 text-uppercase w-75">créer mon
                                compte</button>
                            <!-- </router-link> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.create_account_div {
    background-color: #ddd;
}

.account_creation h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
}

.account_creation p {
    font-family: 'Arapey', serif;
    font-size: 18px;
    width: 400px;
}

.create_account_form h2 {
    color: grey;
    font-size: 15px;
    font-family: 'Arapey', serif;
}

.create_account_form p {
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.create_account_form a {
    color: black;
    text-decoration: underline;
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.create_account_form a:hover {
    text-decoration: none;
}

.input_div input {
    border: 0;
    border-bottom: 1px solid #000;
    font-family: 'Arapey', serif;
    font-size: 18px;
    margin-bottom: 20px;
    width: 350px;
    background-color: #ddd;
}

/* .born_div {
    flex-flow: row nowrap;
} */

.born_input2 {
    flex-basis: 33.33333333333%;
}

.born_input2 select {
    min-width: 100%;
    min-height: 30px;
    border-top: none;
    background-color: #ddd;
}

#create_account_btn {
    min-height: 50px;
    border: 2px solid rgb(227, 167, 14);
    background-color: #ddd;
    font-weight: bold;
    font-size: 20px;
}

#create_account_btn:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}</style>