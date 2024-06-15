<script>
import Header from "./components/template/Header.vue"
import Footer from "./components/template/Footer.vue"

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
