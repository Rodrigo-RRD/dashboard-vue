<script setup>
import Footer from '../../components/template/footer/Footer.vue';
import GraficoColuna from '../../components/layout/grafico-coluna/GraficoColuna.vue';
// import GraficoColunaXY from '../../components/layout/grafico-coluna-xy/GraficoColunaXY.vue';
import ListaInformativa from '../../components/layout/lista-informativa/ListaInformativa.vue';
import HeaderLogado from '@/components/template/header-logado/HeaderLogado.vue';
</script>

<template>
    <HeaderLogado />
    <GraficoColuna />
    <!-- <GraficoColunaXY /> -->
    <section>
        <ListaInformativa />
    </section>
    <Footer />
</template>

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
}

header {
    position: fixed;
    /* Fixa o cabeçalho no topo */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    /* Garante que o cabeçalho fique acima do conteúdo */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Sombra sutil para dar destaque */
}
</style>