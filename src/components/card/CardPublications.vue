<script>
import goUp from './goUp.vue';
import quantumList from './dataJs/publications/quantum';
import machineList from './dataJs/publications/machineLearning';

export default {
    data() {
        return {
            quantumList: quantumList,
            machineLearningList: machineList
        }
    },
    components: { goUp },
}
</script>

<template>
    <div id="my_card">
        <p class="title">Publications</p>
        <div class="body">
            <!-- LISTA Quantum Artificial Intelligence -->
            <h3 class="bold name_section">Quantum Artificial Intelligence</h3>
            <ul>
                <li v-for="(item, index) in quantumList">
                    <p>[{{ index }}]</p>
                    <p>
                        <span>{{ item.normal }}</span>
                        <span class="italic">{{ item.italic }}</span>
                        <span>{{ item.note }}</span>
                        <a v-if="item.link" :href="item.link"> - {{ item.linkText }}</a>
                    </p>
                </li>
            </ul>

            <!-- LISTA Machine Learning -->
            <h3 class="bold name_section">Machine Learning</h3>
            <ul>
                <li v-for="(item, index) in machineLearningList">
                    <p>[{{ index }}]</p>
                    <p>
                        <span>{{ item.normal }}</span>
                        <span class="italic">{{ item.italic }}</span>
                        <span>{{ item.note }}</span>
                        <a v-if="item.link" :href="item.link">{{ item.linkText }}</a>
                    </p>
                </li>
            </ul>
        </div>

        <div class="up">
            <goUp />
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

    .title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
    }

    * {
        margin-bottom: .3rem;
    }

    ul {
        list-style-type: none;

        li {
            margin-bottom: 1.5rem;
            display: flex;
            gap: .5rem;

            * {
                margin-bottom: .3rem;
            }

            a {
                color: $colorHighContrast;
            }
        }
    }

    .name_section {
        margin: 2rem 0 1rem;
        text-decoration: underline;
    }

    .bold {
        font-weight: bold;

        * {
            font-weight: normal;
        }
    }

    .italic {
        font-style: italic;
    }
}
</style>