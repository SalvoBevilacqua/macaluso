<script>
import goUp from './goUp.vue';
import education from './dataJs/education.js';

export default {
    data() {
        return {
            educationList: education,
        }
    },
    components: { goUp },
}
</script>

<template>
    <div id="my_card">
        <p class="title">Education & Career</p>
        <div class="body">
            <!-- LISTA education -->
            <!-- <h3 class="bold name_section">Education List</h3> -->
            <ul>
                <li v-for="item in educationList">
                    <p class="bold">{{ item.name }}</p>
                    <p>{{ item.when }}</p>
                    <p class="italic">{{ item.where }}</p>
                    <p v-if="item.thesis"><span class="italic">Thesis: </span>{{ item.thesis }}</p>
                    <p v-if="item.supervisor"><span class="italic">Supervisor: </span>{{ item.supervisor }}</p>
                    <p v-if="item.mainSubjects"><span class="italic">Main subjects: </span>{{ item.mainSubjects }}</p>
                    <p v-if="item.addInfo"><span class="italic">Additional info: </span>{{ item.addInfo }}</p>
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