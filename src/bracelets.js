import { defineStore } from 'pinia';

export const useBraceletStore = defineStore({
  id: 'bracelet',
  state: () => ({
    bracelets: [],
  }),
  actions: {
    async fetchBracelets() {
      const response = await fetch('/public/api/bracelets.json');
      const data = await response.json();
      this.bracelets = data.bracelets;
    },
  },
});
