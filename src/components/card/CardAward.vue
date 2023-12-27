<script>
import certificationsList from './dataJs/award_certifications/certifications';
import awards from './dataJs/award_certifications/awards';

export default {
    data() {
        return {
            awardsList: awards,
            certificationsList: certificationsList,
        }
    }
}
</script>

<template>
    <div id="my_card">
        <p class="title">Award & Honor</p>
        <div class="body">
            <!-- LISTA Awards -->
            <h3 class="bold name_section">Awards and Scholarships</h3>
            <ul>
                <li v-for="item in awardsList">
                    <p class="bold">{{ item.name }} <span>{{ item.info }}</span></p>
                    <p>- {{ item.when }}</p>
                </li>
            </ul>

            <!-- LISTA certifications -->
            <h3 class="bold name_section">Certifications</h3>
            <ul>
                <li v-for="item in certificationsList">
                    <span class="bold">{{ item.name }}</span>
                    <a :href="item.link"> ({{ item.linkText }})</a>
                    <p>- {{ item.when }}</p>
                </li>
            </ul>
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