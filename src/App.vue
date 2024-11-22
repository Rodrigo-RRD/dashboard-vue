<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView,
  },
};
</script>

<template>
  <div id="app">
    <router-view /> <!-- Renderiza o componente da rota ativa -->
  </div>
</template>

<style>

</style>