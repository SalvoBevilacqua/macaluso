<script>
export default {

}
</script>

<template>
    <div id="header">
        <p>I am <span class="high_contrast">Antonio Macaluso</span>, Senior Researcher in <span
                class="high_contrast">Quantum Artificial
                Intelligence</span>,
            specialized in teaching <span class="high_contrast">quantum-related topics</span> to computer science students
            at
            the university level.
        </p>
    </div>
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#header {
    margin-bottom: 4rem;
    width: 100%;
    font-size: $fontSizeHeader;
    font-weight: 400;

    p {
        width: 90%;
    }

    .high_contrast {
        &:hover {
            color: $colorFont;
        }
    }
}

@media screen and (max-width: 1250px) {
    #header {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
}
</style>