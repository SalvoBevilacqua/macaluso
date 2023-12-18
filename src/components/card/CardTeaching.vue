<script>
import teachlist from './dataJs/teaching.js';
export default {
    data() {
        return {
            list: teachlist,
        }
    }
}
</script>

<template>
    <div id="my_card">
        <p class="title">Teaching</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque necessitatibus tenetur quibusdam beatae
            quidem aut iure dignissimos, laboriosam adipisci placeat reiciendis natus deserunt quod, facere temporibus
            aperiam! Non, ex!
        </p>
        <ul>
            <li v-for="item in list">gigi</li>
        </ul>
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

    .title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
    }
}
</style>