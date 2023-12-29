<script>
import goUp from './goUp.vue';
import coll from './dataJs/collaborations';

export default {
    data() {
        return {
            collList: coll,
        }
    },
    components: { goUp },
}
</script>

<template>
    <div id="my_card">
        <p class="title">Collaborations & Projects</p>
        <div class="body">
            <ul>
                <li v-for="item in collList">
                    <p class="bold">{{ item.name }}</p>
                    <p v-if="item.link"><a :href="item.link"> - Link</a></p>
                    <p>{{ item.when }}</p>
                    <p class="italic">{{ item.infoItalic }}</p>
                    <p>{{ item.info }}</p>
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

@media screen and (max-width: 900px) {
    #my_card {
        width: 100%;
    }
}
</style>