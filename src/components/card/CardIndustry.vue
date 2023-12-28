<script>
import goUp from './goUp.vue';
import work from './dataJs/industry';

export default {
    data() {
        return {
            workList: work,
        }
    },
    components: { goUp },
}
</script>

<template>
    <div id="my_card">
        <p class="title">Industry</p>
        <div class="body">
            <!-- LISTA CURRENT POSITION -->
            <h3 class="bold name_section">Work Experience in Industry</h3>
            <ul>
                <li v-for="item in workList">
                    <p class="bold">{{ item.role }}</p>
                    <p class="italic">{{ item.when }}</p>
                    <p class="italic">{{ item.where }}</p>
                    <p>{{ item.info }}</p>
                </li>
            </ul>

            <div class="up">
                <goUp />
            </div>
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
        // list-style-type: none;

        li {
            margin-bottom: 1.5rem;

            * {
                margin-bottom: .3rem;
            }

            a {
                color: $colorHighContrast;
            }
        }
    }

    a {
        &:hover {
            color: $colorHighContrast;
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