<script>
import goUp from './goUp.vue';
import teachlist from './dataJs/teaching/teaching.js';
import assistant from './dataJs/teaching/assistant.js';
import tutor from './dataJs/teaching/tutor.js';
import supervision from './dataJs/teaching/supervision.js';
export default {
    data() {
        return {
            list: teachlist,
            listAssistant: assistant,
            listTutor: tutor,
            superList: supervision,
        }
    },
    components: { goUp },
}
</script>

<template>
    <div id="my_card">
        <p class="title">Teaching</p>
        <div class="body">
            <!-- LISTA GENERALE -->
            <ul>
                <li v-for="item in list">
                    <p class="sub bold">{{ item.when }}</p>
                    <span class="bold">Lecturer - </span>
                    <a :href="item.link">{{ item.textLink }}</a>
                    <span v-if="item.code"> [Cod. {{ item.code }}]</span>
                    <p v-if="item.info" class="bold">Info: <span>{{ item.info }}</span> <a v-if="item.textLinkTwo"
                            :href="item.linkTwo">{{
                                item.textLinkTwo }}</a></p>
                    <span v-if="item.ref" class="bold">Ref: <span>{{ item.ref }}</span></span>
                    <p><span class="bold">Course synopsis: </span>{{ item.synopsys }}</p>
                    <p v-if="item.platform"><span class="bold">Platform Information: </span>{{ item.platform }}</p>
                </li>
            </ul>

            <!-- LISTA ASSISTENTE -->
            <h3 class="bold assistant">Teaching Assistant - Systems and Algorithms for Data Science</h3>
            <ul>
                <li v-for="item in listAssistant">
                    <p class="sub">{{ item.where }}</p>
                    <p class="bold">Activities: <span>{{ item.activities }}</span></p>
                    <p class="bold">Courses <span>({{ item.coursesTitle }})</span></p>
                    <ul>
                        <li v-for="element in item.courses">
                            <span>{{ element }}</span>
                        </li>
                    </ul>
                </li>
            </ul>

            <!-- LISTA TUTOR -->
            <h3 class="bold assistant">Tutor - Statistics</h3>
            <ul>
                <li v-for="item in listTutor">
                    <p class="sub">{{ item.where }}</p>
                    <p class="bold">Info: <span>{{ item.info }}</span></p>
                    <p class="bold">Project Statistics and Sport: <span>{{ item.project }}</span></p>
                </li>
            </ul>

            <!-- LISTA SUPERVISION -->
            <h3 class="bold assistant">Supervision of Graduate Students</h3>
            <p class="tagline">I report the list of students (past and present) under my supervision who have worked on a
                thesis on Quantum
                Artificial Intelligence.</p>
            <ul>
                <li v-for="item in superList">
                    <p class="bold">{{ item.name }}</p>
                    <p class="sub">{{ item.when }}</p>
                    <p class="sub">{{ item.course }}</p>
                    <p class="bold">Title: <span>{{ item.title }}</span></p>
                    <p class="bold">Abstract: <span>{{ item.abstract }}</span></p>
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

    li {
        margin-bottom: 1.5rem;

        * {
            margin-bottom: .3rem;
        }

        a {
            color: $colorHighContrast;
        }
    }

    .assistant {
        margin: 2rem 0 1rem;
        text-decoration: underline;
    }

    .bold {
        font-weight: bold;

        * {
            font-weight: normal;
        }
    }

    .sub {
        font-style: italic;
    }

    .tagline {
        margin: 1rem 0;
    }

}
</style>