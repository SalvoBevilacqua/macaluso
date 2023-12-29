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
    max-width: 2000px;
    padding: 4rem;
}

@media screen and (max-width: 1250px) {
    .build {
        padding: 2rem;
    }
}
</style>
