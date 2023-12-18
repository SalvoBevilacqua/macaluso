<script>
// import { store } from "./store.js";
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {
        }
    },
    components: { AppHeader, AppMain, AppFooter },
    mounted() {
    }
}
</script>

<template>
    <div class="build">
        <AppHeader />
        <AppMain />
    </div>
</template>

<style lang="scss">
@use "../src/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.build {
    padding: 4rem;
}
</style>
