<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        accountSubmit(event) {
            event.preventDefault();
            console.log("Adresse email:", this.email);
            console.log("Mot de passe:", this.password);

            const isAuthenticated = this.checkAuthentication();

            if (isAuthenticated) {
                this.$router.push({ name: 'login' });
            } else {
                console.log("L'utilisateur n'est pas authentifié.");
            }
        },
        checkAuthentication() {
            return true;
        },
    },
};
</script>

<template>
    <div class="row row_class">
        <div class="col-10 offset-1 col-xl-5 offset-xl-1 col_class create_account_div border-end border-5 border-white">
            <div class="register">
                <h1>déjà inscrit(e) ?</h1>
                <p>Si vous êtes déjà inscrit(e), veuillez vous connecter ici :</p>
                <div class="connection_form">
                    <form @submit="accountSubmit" id="connection_form_data">
                        <h2>Adresse email *</h2>
                        <div class="email_div overflow-hidden">
                            <input v-model="email" id="profile_email" type="text" placeholder required />
                        </div>
                        <h2>Mot de passe *</h2>
                        <div class="email_div overflow-hidden">
                            <input v-model="password" id="profile_password" type="password" placeholder required />
                        </div>
                        <a href="" id="forgot_password">
                            <p>Vous avez oublié votre mot de passe ?</p>
                        </a>
                        <p>Pour plus de renseignements sur la façon dont nous utilisons vos données à caractère personnel,
                            veuillez consulter notre
                            <a href="">Politique de Confidentialité.</a>
                        </p>
                        <button type="submit" id="connexion">connexion</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-10 offset-1 col-xl-5 offset-xl-0 col_class create_account_div">
            <div class="create_account">
                <h1>créez votre compte</h1>
                <p>Inscrivez-vous pour profiter des avantages de votre compte Du Sablon :</p>
                <ul>
                    <li>Gérer votre profil</li>
                    <li>Enregistrer vos adresses de livraison</li>
                    <li>Vérifier vos commandes</li>
                    <li>Gérer votre collection et vos services commandés</li>
                </ul>
                <router-link :to="{ name: 'createaccount' }">
                    <button type="submit" id="create_account_btn">créer mon compte</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.create_account_div {
    background-color: #ddd;
    margin-bottom: 50px;
}

.register {
    padding: 50px 50px;
    width: auto;
}

.create_account {
    padding: 50px 50px;
}

.register h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.register p {
    font-family: 'Arapey', serif;
    font-size: 18px;
    width: 80%;
}

.connection_form h2 {
    margin-bottom: 10px;
    color: grey;
    font-size: 15px;
    font-family: 'Arapey', serif;
}

.email_div input {
    border: 0;
    border-bottom: 1px solid #000;
    font-family: 'Arapey', serif;
    font-size: 18px;
    margin-bottom: 20px;
    width: 80%;
    background-color: #ddd;
}

.connection_form #forgot_password {
    color: black;
    text-decoration: none;
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.connection_form #forgot_password:hover {
    text-decoration: underline;
}

.connection_form p {
    margin-top: 20px;
    font-size: 15px;
}

.connection_form a {
    color: black;
    text-decoration: underline;
    font-family: 'Arapey', serif;
    font-size: 15px;
}

.connection_form a:hover {
    text-decoration: none;
}

#connexion {
    min-height: 50px;
    width: 200px;
    margin-top: 40px;
    border: 2px solid rgb(227, 167, 14);
    background-color: #ddd;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
}

#connexion:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}

.create_account h1 {
    font-family: 'Arapey', serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.create_account p {
    font-family: 'Arapey', serif;
    font-size: 18px;
    width: 100%;
}

.create_account ul {
    list-style-type: disc;
    width: 100%;
}

.create_account li {
    font-family: 'Arapey', serif;
    font-size: 18px;
    margin-top: 10px;
    margin-left: 20px;
}

#create_account_btn {
    min-height: 50px;
    width: 250px;
    margin-top: 40px;
    border: 2px solid rgb(227, 167, 14);
    background-color: #ddd;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
}

#create_account_btn:hover {
    background-color: rgb(227, 167, 14);
    color: white;
}
</style>



