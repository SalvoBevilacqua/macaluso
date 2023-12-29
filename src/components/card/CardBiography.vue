<script>
export default {
}
</script>

<template>
    <div id="my_card">
        <div class="content">
            <p class="title">Biography</p>
            <div class="body">
                <p>My educational background includes a Bachelor's and Master's degree in Statistical Sciences, followed by
                    an
                    Advanced Master's in Data Science at the Bologna Business School (University of Bologna). A
                    comprehensive
                    scholarship from Cineca, largest Italian High-Performance Computing center, supported my participation
                    in
                    this master's program. Concurrently, I worked as a Data Scientist at Cineca for three years, from 2016
                    to
                    2019, while pursuing my academic studies. In 2017, I commenced my Ph.D. journey in Computer Science and
                    Engineering, with an exclusive focus on Quantum Machine Learning. Throughout my Ph.D., I autonomously
                    cultivated a deep understanding of quantum computing fundamentals and made substantial contributions
                    through
                    publications. These contributions earned me access to high-quality IBM quantum hardware through the IBM
                    Quantum Researchers Program Award.
                    After completing my Ph.D. in 2021, I briefly worked in the industrial sector before embarking on a new
                    journey
                    at the German Research Center for Artificial Intelligence (DFKI) in Saarbruecken, Germany. This
                    transition
                    significantly expanded my research focus, allowing me to tackle a wide range of AI challenges using
                    quantum
                    computing, extending well beyond the scope of machine learning. During my tenure at DFKI, I had the
                    privilege
                    of working under the guidance of PD Dr. Matthias Klusch. Together, we established the QAI research unit,
                    a venture I now lead. My contributions were swiftly recognized, leading to my promotion to the role of
                    Senior
                    Researcher within just six months – a distinction typically reserved for individuals with three years of
                    experience.
                    In addition to my research responsibilities, I now play a substantial role in project acquisition and
                    oversee the
                    organization of workshops and conferences.
                    Furthermore, I am an experienced educator, with a focus on making quantum computing concepts accessible
                    to
                    students in computer science, regardless of their familiarity with quantum mechanics. At Saarland
                    University,
                    I am the main lecturer for both the Quantum Machine Learning Seminar and the advanced Quantum Artificial
                    Intelligence course. In addition, I offer customized courses for a wide range of students in multiple
                    universities.
                </p>
                <img src="../../img/profile.png" alt="profile-img">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../style/variables" as *;

#my_card {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    text-align: left;
    font-size: medium;

    .title {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
    }

    .body {
        display: flex;
        justify-content: space-between;
        align-items: start;

        p {
            width: calc(100% - $profileImgWidth - 4rem);
            margin-right: 4rem;
            padding-top: 1.5rem;
        }

        img {
            width: $profileImgWidth;
            border-radius: 1rem;
        }
    }
}

@media screen and (max-width: 1250px) {
    #my_card {
        .body {
            flex-direction: column;

            p {
                width: 100%;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    #my_card {
        width: 100%;
    }
}
</style>