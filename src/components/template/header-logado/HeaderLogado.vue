<script setup>
import './HeaderLogado.css';
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
    <header class="header-style d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">DashBoard</span>
        </a>

        <ul class="nav nav-pills">
            <li @click="clickHome" class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a>
            </li>
            <!-- <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li> -->
            <li @click="clickAbout" class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
    </header>
</template>

<style scoped></style>
