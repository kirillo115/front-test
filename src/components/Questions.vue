<template>
    <section class="questions">
        <div class="container">
            <h2 class="heading">Frequently Asked Questions</h2>
            <div class="questions-wrap">
                <div class="questions-item"
                v-for="(item, i) of questions"
                :key="i"
                >
                    <div class="questions-item__top">
                        <span class="questions-item__quest">{{item.quest}}</span>
                        <img src="../assets/Group.png" alt="" @click="showQuestion" class="questions-item__img">
                    </div>
                    <div class="questions-item__answer">
                        <span>{{item.answer}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'questions',
    data() {
        return {
            questions: [
                {
                    quest: 'Can I download the Excel files and financial modeling templates?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'How long do I have to complete the course?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'Are courses verified?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'Are there additional fees or costs?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'What currency are your courses priced in?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'How do I earn my certificates?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'Can I email the instructor if I have questions?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'Wil these courses help me advanced my career?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
                {
                    quest: 'More questions?',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ducimus.'
                },
            ]
        }
    },
    methods: {
        showQuestion(event) {
            const answers = document.querySelectorAll('.questions-item__answer')
            const imgQuest = document.querySelectorAll('.questions-item__img')
            const itemAnswer = event.target.parentElement.nextElementSibling
            answers.forEach((item, i) => {
               item.classList.remove('isActive')
               imgQuest[i].classList.remove('isActive')
            })

            itemAnswer.classList.add('isActive')
            event.target.classList.add('isActive')
        }
    }
}
</script>

<style lang="scss">
    .questions {
        background: #FFFFFF;
        padding: 126px 0 117px;

        &-item__answer {
            display: none;
            height: 0;
            // animation-duration: 3s;
            // animation-name: slidein;
        }

        &-wrap {
            width: 73%;
            margin: 0 auto;
        }

        &-item__answer.isActive {
            display: block;
            height: 100%;
            animation-duration: 3s;
            animation-name: slidein;
        }

        & .heading {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            color: #132E57;
            margin: 0 0 53px;
        }

        &-item {
            margin: 0 0 17px;
            border-bottom: 1px solid #EBEBEB;
            padding: 0 0 16px;
        }


        &-item__img {
            transition: .4s;
            cursor: pointer;
        }

        &-item__img.isActive {
            transition: .4s;
            transform: rotate(45deg);
        }

        &-item__quest {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            color: #676767;
        }

        &-item__top {
            display: flex;
            justify-content: space-between;
        }
    }
</style>