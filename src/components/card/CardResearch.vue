<script>
import researchList from './dataJs/research/research';
import currentList from './dataJs/research/current';
import workList from './dataJs/research/workExperience';
import meetings from './dataJs/research/meetings';
import reviewer from './dataJs/research/reviewer';

export default {
    data() {
        return {
            researchList: researchList,
            current: currentList,
            work: workList,
            meetingList: meetings,
            reviewerList: reviewer,
        }
    }
}
</script>

<template>
    <div id="my_card">
        <p class="title">Research</p>
        <div class="body">
            <!-- LISTA CURRENT POSITION -->
            <h3 class="bold name_section">Current Positions</h3>
            <ul>
                <li v-for="item in current">
                    <span class="bold">{{ item.role }}</span>
                    <a v-if="item.infoRole" :href="item.linkRole"> - {{ item.infoRole }}</a>
                    <span v-if="item.code"> - [Cod. {{ item.code }}]</span>
                    <p class="italic">{{ item.when }}</p>
                    <p>{{ item.where }}</p>
                    <p>{{ item.info }}</p>
                </li>
            </ul>


            <!-- LISTA RESEARCH -->
            <h3 class="bold name_section">Machine Learning</h3>
            <ul>
                <li v-for="item in researchList">
                    <p class="bold">{{ item.role }}</p>
                    <span class="italic">{{ item.when }}</span>
                    <p>{{ item.where }}</p>
                    <p class="bold">Info: <span>{{ item.info }}</span></p>
                </li>
            </ul>

            <!-- LISTA WORK EXPERIENCE -->
            <h3 class="bold name_section">Work Experience in Industry</h3>
            <ul>
                <li v-for="item in work">
                    <p class="bold">{{ item.role }}</p>
                    <span class="italic">{{ item.when }}</span>
                    <p>{{ item.where }}</p>
                    <p class="bold">Info: <span>{{ item.info }}</span></p>
                </li>
            </ul>

            <!-- LISTA MEETINGS -->
            <h3 class="bold name_section">Organization of Scientific Meetings</h3>
            <ul>
                <li v-for="item in meetingList">
                    <p class="bold">{{ item.name }}</p>
                    <span class="italic">{{ item.when }}</span>
                    <p>{{ item.where }}</p>
                    <p class="bold">- <span>{{ item.info }}</span></p>
                </li>
            </ul>

            <!-- LISTA REVIEWER -->
            <h3 class="bold name_section">Reviewer Activity</h3>
            <p>I am a reviewer for the journals: </p>
            <a v-for="item in reviewerList" :href="item.link">{{ item.name }}, </a>
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