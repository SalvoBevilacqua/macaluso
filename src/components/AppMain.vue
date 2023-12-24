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
import AppFooter from './AppFooter.vue';

export default {
    data() {
        return {
            index: 999,
            class_active: '',
        }
    },
    components: { CardContact, CardIcon, CardBiography, CardPublications, CardAcademic, CardAward, CardEducation, CardProfessional, CardResearch, CardTeaching, AppFooter },
    methods: {
        active(id) {
            this.index = id;
        }
    },
}
</script>

<template>
    <div id="main">
        <div class="col">
            <div class="card" @click="active(0)" :class="index === 0 ? 'active' : ''">
                <p class="name" v-if="index != 0">Biography</p>
                <div v-if="index === 0">
                    <CardBiography />
                </div>
            </div>

            <div class="card" @click="active(1)" :class="index === 1 ? 'active' : ''">
                <p class="name" v-if="index != 1">Teaching</p>
                <div v-if="index === 1">
                    <CardTeaching />
                </div>
            </div>

            <div class="card" @click="active(2)" :class="index === 2 ? 'active' : ''">
                <p class="name" v-if="index != 2">Research</p>
                <div v-if="index === 2">
                    <CardResearch />
                </div>
            </div>

            <div class="card" @click="active(3)" :class="index === 3 ? 'active' : ''">
                <p class="name" v-if="index != 3">Professional Background</p>
                <div v-if="index === 3">
                    <CardProfessional />
                </div>
            </div>

            <div class="card" @click="active(4)" :class="index === 4 ? 'active' : ''">
                <p class="name" v-if="index != 4">Academic Focus</p>
                <div v-if="index === 4">
                    <CardAcademic />
                </div>
            </div>

            <div class="card" @click="active(5)" :class="index === 5 ? 'active' : ''">
                <p class="name" v-if="index != 5">Education & Career</p>
                <div v-if="index === 5">
                    <CardEducation />
                </div>
            </div>

            <div class="card" @click="active(6)" :class="index === 6 ? 'active' : ''">
                <p class="name" v-if="index != 6">Publications</p>
                <div v-if="index === 6">
                    <CardPublications />
                </div>
            </div>

            <div class="card" @click="active(7)" :class="index === 7 ? 'active' : ''">
                <p class="name" v-if="index != 7">Award</p>
                <div v-if="index === 7">
                    <CardAward />
                </div>
            </div>

            <div class="card" @click="active(8)" :class="index === 8 ? 'active' : ''">
                <p class="name" v-if="index != 8">Contact</p>
                <div v-if="index === 8">
                    <CardContact />
                </div>
            </div>

            <div class="card icon">
                <CardIcon />
            </div>

            <div class="card footer" v-if="index != 999">
                <AppFooter />
            </div>

            <span v-if="index != 999" @click="index = 999">&#9938</span>
        </div>

        <div v-if="index === 999" class="footer_out">
            <AppFooter />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#main {
    .footer_out {
        margin-top: 4rem;
        text-align: end;

        &:hover {
            color: $colorHighContrast;
        }
    }

    .col {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid $colorFont;
        position: relative;

        span {
            font-size: x-large;
            position: absolute;
            top: -35px;
            right: 50%;
            transform: translateX(50%);

            &:hover {
                color: $colorHighContrast;
            }
        }

        .card {
            width: calc(100% / 5);
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $colorFont;
            padding: 3rem;
            text-align: center;
            position: relative;

            .name {
                font-size: 2rem;
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

        .icon {
            &:hover {
                &:after {
                    content: none;
                }
            }
        }

        .footer {
            text-align: end;

            &:hover {
                &:after {
                    content: none;
                }
            }
        }
    }
}
</style>