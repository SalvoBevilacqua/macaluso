<script>
export default {
}
</script>

<template>
    <div id="my_card">
        <p class="title">Biography</p>
        <p>I hold the position of Senior Researcher at the German Research Center for Artificial Intelligence (DFKI), where
            I lead the Quantum Artificial Intelligence research line within the Intelligent Information Systems (I2S)
            research team. My primary research objective revolves around exploring the feasibility and potential benefits
            inherent in applying quantum algorithms to various domains within Artificial Intelligence. Specifically, my
            focus areas encompass supervised learning, reinforcement learning, multi-agent systems, as well as planning and
            scheduling. In addition to my research endeavors, I possess extensive practical experience spanning multiple
            years, during which I've effectively employed machine learning techniques to address industrial challenges.</p>
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
}</style>