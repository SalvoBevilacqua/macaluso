<script>
export default {
}
</script>

<template>
    <div>
        <a href="https://scholar.google.com/citations?user=Z2R5HuEAAAAJ&hl=it"><i class="fa-brands fa-google"></i></a>
        <a href="https://orcid.org/0000-0002-1348-250X"><i class="fa-brands fa-orcid"></i></a>
        <a href="https://github.com/amacaluso"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/antonio-macaluso/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.researchgate.net/profile/Antonio-Macaluso"><i class="fa-brands fa-researchgate"></i></a>
    </div>
</template>

<style scoped lang="scss">
@use "../../style/variables" as *;

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    a {
        font-size: 2rem;
        z-index: 2;

        &:hover {
            color: white;
            text-shadow: 0 0 7px $colorHighContrast;
        }
    }
}

@media screen and (max-width: 1400px) {
    div {
        a {
            font-size: 1.5rem;
        }
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