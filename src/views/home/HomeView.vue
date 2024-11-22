<script setup>
import Header from '../../components/template/header/Header.vue';
import Footer from '../../components/template/footer/Footer.vue';
import TheWelcome from '../../components/TheWelcome.vue';
</script>

<script>
import routerHelper from '@/assets/js/global';
import Carrossel from '@/components/template/carrossel/Carrossel.vue';

export default {
  methods: {
    click() {
      routerHelper.navigateToDashBoard(this.$router);
    }
  }
}
</script>

<template>
  <Header />
  <div class="carrossel-style">
    <Carrossel />
  </div>
  <main>
    <div @click="click">
      <TheWelcome />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carrossel-style{
  max-width: 100%;
  display: block;
}
</style>
