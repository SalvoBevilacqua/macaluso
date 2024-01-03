<script>
export default {

}
</script>

<template>
    <div class="neighborhood">
        Made with &hearts; from your <br> friendly neighborhood researcher
    </div>
</template>


<style scoped lang="scss">
@use "../style/variables" as *;

// MEDIA
@media screen and (max-width: 1250px) {
    .neighborhood {
        font-size: small;
    }
}

@media screen and (max-width: 400px) {
    .neighborhood {
        font-size: x-small;
    }
}
</style>