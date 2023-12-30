<script>
export default {

}
</script>

<template>
    <div id="my_card">
        <p class="title">Contacts</p>
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
    </div>
</template>

<style scoped lang="scss">
@use "../../style/variables" as *;

#my_card {
    width: 70%;
    margin: 0 auto;
    height: 100%;
    text-align: left;
    font-size: medium;

    .item {
        display: flex;
        align-items: baseline;
        gap: .8rem;
        margin-bottom: .8rem;

        &:hover {
            color: $colorHighContrast;
        }
    }

    .title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
    }
}

@media screen and (max-width: 900px) {
    #my_card {
        width: 100%;
    }
}

@media screen and (max-width: 700px) {
    #my_card {
        font-size: .6rem;

        .title {
            font-size: 1.7rem;
            margin-bottom: 1rem;
        }
    }
}
</style>