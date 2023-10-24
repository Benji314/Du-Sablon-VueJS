<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<template>
  <div>
    <Header></Header>

    <main>
      <router-view></router-view>
    </main>

    <Footer></Footer>
  </div>
</template>

<style scoped></style>
