<script>
export default {

}
</script>

<template>
    <div id="main">

        <div class="card">
            Biography
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
            <h3>Contacts:</h3>
            <div class="item">
                <i class="fa-solid fa-phone"></i>
                <p>+49 681 85775 5242</p>
            </div>
            <div class="item">
                <i class="fa-solid fa-envelope"></i>
                <p>antonio.macaluso@dfki.de</p>
            </div>
            <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <p>Stuhlsatzenhausweg 3, Saarland Informatics Campus D3.2, 66123 Saarbruecken, Germany</p>
            </div>
        </div>

        <div class="card icon">
            <a href=""><i class="fa-brands fa-google fa-3x"></i></a>
            <a href=""><i class="fa-brands fa-orcid fa-3x"></i></a>
            <a href=""><i class="fa-brands fa-github fa-3x"></i></a>
            <a href=""><i class="fa-brands fa-linkedin fa-3x"></i></a>
            <a href=""><i class="fa-brands fa-researchgate fa-3x"></i></a>
        </div>

        <div class="card img">
            <div class="profile_img"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/variables" as *;

#main {
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;

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

        h3 {
            margin-bottom: 1rem;
        }

        .item {
            display: flex;
            align-items: baseline;
            gap: .8rem;
        }
    }

    .icon {
        justify-content: space-between;
        font-size: unset;

        a {
            &:hover {
                color: black;
            }
        }
    }

    .img {
        padding: 4.5rem;
    }
}
</style>