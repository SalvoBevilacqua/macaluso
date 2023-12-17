<script>
import CardBiography from './card/CardBiography.vue';
import CardContact from './card/CardContact.vue';
import CardIcon from './card/CardIcon.vue';
import CardPublications from './card/CardPublications.vue';
import CardAcademic from './card/CardAcademic.vue';
import CardAward from './card/CardAward.vue';
import CardEducation from './card/CardEducation.vue';
import CardProfessional from './card/CardProfessional.vue';
import CardResearch from './card/CardResearch.vue';
import CardTeaching from './card/CardTeaching.vue';

export default {
    data() {
        return {
            index: 999,
            open: false,
        }
    },
    components: { CardContact, CardIcon, CardBiography, CardPublications, CardAcademic, CardAward, CardEducation, CardProfessional, CardResearch, CardTeaching },
    methods: {
        active(id) {
            if (this.open === false) {
                this.open = true;
                this.index = id;
            } else {
                this.open = false;
                this.index = 999;
            }
        }
    },
}
</script>

<template>
    <div id="main">
        <div class="col">

            <div class="card" @click="active(0)" :class="{ 'active': index === 0 }">
                <p class="name" v-if="index != 0">Biography</p>
                <div v-if="index === 0">
                    <CardBiography />
                </div>
            </div>

            <div class="card img">
                <div class="profile_img"></div>
            </div>

            <div class="card" @click="active(1)" :class="{ 'active': index === 1 }">
                <p class="name" v-if="index != 1">Teaching</p>
                <div v-if="index === 1">
                    <CardTeaching />
                </div>
            </div>

            <div class="card" @click="active(2)" :class="{ 'active': index === 2 }">
                <p class="name" v-if="index != 2">Research</p>
                <div v-if="index === 2">
                    <CardResearch />
                </div>
            </div>

            <div class="card" @click="active(3)" :class="{ 'active': index === 3 }">
                <p class="name" v-if="index != 3">Professional Background</p>
                <div v-if="index === 3">
                    <CardProfessional />
                </div>
            </div>

            <div class="card" @click="active(4)" :class="{ 'active': index === 4 }">
                <p class="name" v-if="index != 4">Academic Focus</p>
                <div v-if="index === 4">
                    <CardAcademic />
                </div>
            </div>

            <div class="card" @click="active(5)" :class="{ 'active': index === 5 }">
                <p class="name" v-if="index != 5">Education & Career</p>
                <div v-if="index === 5">
                    <CardEducation />
                </div>
            </div>

            <div class="card" @click="active(6)" :class="{ 'active': index === 6 }">
                <p class="name" v-if="index != 6">Publications</p>
                <div v-if="index === 6">
                    <CardPublications />
                </div>
            </div>

            <div class="card" @click="active(7)" :class="{ 'active': index === 7 }">
                <p class="name" v-if="index != 7">Award</p>
                <div v-if="index === 7">
                    <CardAward />
                </div>
            </div>

            <div class="card contact">
                <CardContact />
            </div>

            <div class="card icon">
                <CardIcon />
            </div>

            <div class="card img">
                <div class="profile_img"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#main {
    .col {
        width: calc(100% - 6rem);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid $colorFont;

        .card {
            width: 25%;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $colorFont;
            padding: 3rem;
            text-align: center;
            position: relative;

            .name {
                font-size: 3.5rem;
            }

            &:hover {
                background-color: $colorFont;
                color: $colorBackground;
                transition-property: background-color;
                transition-duration: .2s;
                transition-timing-function: linear;

                &:after {
                    position: absolute;
                    top: 50%;
                    right: 50%;
                    transform: translate(50%, -50%);
                    content: "";
                    width: 80%;
                    height: 80%;
                    border: 1px solid $colorBackground;
                }
            }

            .profile_img {
                width: 100%;
                aspect-ratio: 1;
                background-image: url(../img/profile.png);
                background-repeat: no-repeat;
                background-size: cover;
                filter: grayscale(100%);
                z-index: 2;
            }
        }

        .contact {
            padding: 5rem;
            align-items: start;
            text-align: left;
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            gap: .8rem;
        }

        .icon {
            justify-content: space-between;
            font-size: unset;

            &:hover {
                &:after {
                    border: none;
                }
            }

        }

        .img {
            padding: 4.5rem;
        }

        .active {
            order: -1;
            width: 100%;
            aspect-ratio: unset;

            &:hover {
                background-color: $colorBackground;
                color: $colorFont;

                &:after {
                    display: none;
                }
            }
        }
    }
}
</style>