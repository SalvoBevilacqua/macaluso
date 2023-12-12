<script>
export default {

}
</script>

<template>
    <h3>Contacts:</h3>
    <div class="item">
        <i class="fa-solid fa-phone"></i>
        <p>+49 681 85775 5242</p>
    </div>
    <div class="item">
        <i class="fa-solid fa-envelope"></i>
        <p>antonio.macaluso@dfki.de</p>
    </div>
    <div class="item">
        <i class="fa-solid fa-location-dot"></i>
        <p>Stuhlsatzenhausweg 3, Saarland Informatics Campus D3.2, 66123 Saarbruecken, Germany</p>
    </div>
</template>

<style scoped lang="scss">
@use "../../style/variables" as *;

h3 {
    margin-bottom: 1rem;
}

.item {
    display: flex;
    align-items: baseline;
    gap: .8rem;

    p {
        z-index: 2;
    }
}
</style>