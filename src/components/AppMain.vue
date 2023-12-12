<script>
import CardBiography from './card/CardBiography.vue';
import CardContact from './card/CardContact.vue';
import CardIcon from './card/CardIcon.vue';

export default {
    components: { CardContact, CardIcon, CardBiography }
}
</script>

<template>
    <div id="main">

        <div class="card">
            <CardBiography />
        </div>
        <div class="card img">
            <div class="profile_img"></div>
        </div>
        <div class="card">
            Teaching
        </div>
        <div class="card">
            Publications
        </div>
        <div class="card">
            Research
        </div>
        <div class="card">
            Professional Background
        </div>
        <div class="card">
            Academic Focus
        </div>
        <div class="card">
            Education & Career
        </div>
        <div class="card">
            Award & Honor
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
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#main {
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
        font-size: 3.5rem;
        text-align: center;
        position: relative;

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
                aspect-ratio: 1;
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
}
</style>