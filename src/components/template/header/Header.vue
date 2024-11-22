<script setup>
import './Header.css'; 
</script>

<script>
import routerHelper from '@/assets/js/global';

export default {
  methods: {
    clickHome() {
      routerHelper.navigateToHome(this.$router);
    },
    clickLogin() {
      routerHelper.navigateToLogin(this.$router);
    },
    clickCadastro() {
      routerHelper.navigateToCadastro(this.$router);
    },
    clickAbout() {
      routerHelper.navigateToAbout(this.$router);
    }
  }
}
</script>

<template>
  <header
    class=" header-style d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
        <use xlink:href="#bootstrap"></use>
      </svg>
    </a>

    <ul class="nav-style nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
      <!-- <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li> -->
      <li><a @click="clickAbout" href="#" class="nav-link px-2 link-dark">About</a></li>
    </ul>

    <div class="acesso-style col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2" @click="clickLogin">Login</button>
      <button type="button" class="btn btn-primary" @click="clickCadastro">Cadastro</button>
    </div>
  </header>
</template>

<style></style>
