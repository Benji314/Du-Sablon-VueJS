import { defineStore } from 'pinia';

export const useAccountStore = defineStore('authStore', {
  state: () => ({
    email: '',
    password: '',
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    updateEmail(email) {
      this.email = email;
    },
    updatePassword(password) {
      this.password = password;
    },
    authenticate() {
      if (this.email !== '' && this.password !== '') {
        this.isAuthenticated = true;
        this.user = { email: this.email };
      } else {
        this.isAuthenticated = false;
        this.user = null;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
