<script setup>
import './Login.css';
</script>

<script>
import routerHelper from '@/assets/js/global';

export default {
    methods: {
        handleSubmit() {
            routerHelper.navigateToDashBoard(this.$router);
        }
    }
}
</script>

<template>
    <div class="form-color container " @submit.prevent="handleSubmit">
        <form class="">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Lembrar de login</label>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
