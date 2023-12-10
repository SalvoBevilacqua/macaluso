<script>
export default {

}
</script>

<template>
    <div id="header">
        <p>I am <span class="high_contrast">Antonio Macaluso</span>, Senior Researcher in Quantum Artificial Intelligence,
            specialized in teaching <span class="high_contrast">quantum related topics</span> to computer science students
            at
            the university level.
        </p>
    </div>
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#header {
    padding: 3rem;
    width: 100%;
    font-size: $fontSizeHeader;
    font-weight: 400;

    .high_contrast {
        &:hover {
            color: $colorFont;
        }
    }
}
</style>