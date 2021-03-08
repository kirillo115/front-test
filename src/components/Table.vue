<template>
    <section class="table">
        <div class="container">
            <div class="table-wrap">
                <div class="table-item table-item--header">
                    <div class="table-item__tr table-item__tr--header"></div>
                    <div class="table-item__tr table-item__tr--header table-item__tr--header-second">
                        <span>All-Access Membership</span>
                        <h4>Basic</h4>
                        <span>$564 / year</span>
                    </div>
                    <div class="table-item__tr table-item__tr--header table-item__tr--header-third">
                        <span>All-Access Membership</span>
                        <h4>Full-Immersion</h4>
                        <span>$924 / year</span>
                    </div>
                </div>
                <div class="table-item"
                v-for="(item, i) of tables"
                :key="i"
                >
                    <div class="table-item__tr">
                        <span class="table-item__tr-text">{{item.text}}</span>
                        <div class="table-item__question" v-if="item.question">
                            <img @mouseout="hideTableQoestion" @mouseover="shwoTableQoestion" src="../assets/Icon.png" alt="" class="table-item__question-img">
                            <div class="table-item__question--descr">
                                <div class="table-item__question-wrap">
                                    <span>Default tooltip. Here you’ll find something on the left.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-item__tr"></div>
                    <div class="table-item__tr"></div>
                </div>
                <div class="table-item table-item--footer">
                    <div class="table-item__tr"></div>
                    <div class="table-item__tr table-item__tr--footer">
                        <h4>Basic</h4>
                        <span>$564 / year</span>
                        <button class="traffic-item__btn">Enroll Now</button>
                    </div>
                    <div class="table-item__tr table-item__tr--footer">
                        <h4>Full-Immersion</h4>
                        <span>$924 / year</span>
                        <button class="traffic-item__btn traffic-item__btn--full">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'table',
    data() {
        return {
            tables: [
                {
                    text: 'All 100+ Courses',
                    question: true
                },
                {
                    text: 'All Certificate Programs',
                    question: true
                },
                {
                    text: 'Quizzes, Assignments, and Tests'
                },
                {
                    text: 'Excel, PPT, and PDF Files'
                },
                {
                    text: 'Digital Blockchain Verified Certificate'
                },
                {
                    text: 'Another Shared Benefit'
                },
                {
                    text: 'Another Shared Benefit'
                },
                {
                    text: 'Another Shared Benefit'
                },
                {
                    text: 'Exclusive Partner Integrations',
                    question: true
                },
                {
                    text: 'Premium Email Support',
                    question: true
                },
                {
                    text: 'Model Review & Feedback',
                    question: true
                },
                {
                    text: 'Additional Case Studies',
                    question: true
                },
                {
                    text: 'Résumé & Cover Letter Review',
                    question: true
                },
                {
                    text: 'One FREE Financial Modeling Competition Entry',
                },
            ]
        }
    },
    methods: {
        hideTableQoestion(event) {
            event.target.nextElementSibling.classList.remove('isActive')
        },
        shwoTableQoestion(event) {
            event.target.nextElementSibling.classList.add('isActive')
        },
        
    }
}
</script>

<style scoped lang="scss">

    .table {
        background: #f8f9fa;
        padding: 93px 0 0;
        margin: -2px 0 0;

        &-wrap {
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06), 0px 3px 6px rgba(0, 0, 0, 0.04);
            border-radius: 22px;
        }

        &-item {
            display: grid;
            grid-auto-rows: minmax(80px, auto);
            grid-template-columns: 3fr 3fr 3fr;
            background: #fff;
        }

        &-item__tr:first-child { 
            border-left: 1px solid #f8f9fa;
        }

        &-item__tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            border-top: 1px solid #DDDEE0;
            border-left: 1px solid #DDDEE0;
            padding: 0 33px;
        }

        &-item__question {
            display: flex;
            align-items: center;
            
        }

        &-item__question--descr {
            display: none;
        }

        &-item__question--descr.isActive {
            display: block;
            position: absolute;
            right: -123px;
        }

        &-item__question-wrap {
            position: relative;
            background: #1E2939;
            border-radius: 4px;
            padding: 14px 10px;
            display: flex;
            align-items: center;
            max-width: 108px;
            width: 100%;
            z-index: 2;
        }

        &-item__question-wrap::before {
            position: absolute;
            content: '';
            clip-path: polygon(70% 0, 0 50%, 70% 100%);
            width: 20px;
            height: 20px;
            background: #1E2939;
            left: -13px;
        }

        &-item__question-wrap span{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            color: #FFFFFF;
        }

        &-item__question-img {
            cursor: pointer;
        }

        &-item__tr--header {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            padding: 36px 0 35px;
        }

        &-item__tr--header span, &-item__tr--footer span{
            font-size: 14px;
            color: #727477;
        }

        &-item__tr--header h4,  &-item__tr--footer h4{
            font-size: 18px;
            color: #132E57;
            margin: 8px 0 16px;
        }

        &-item--header {
            border-radius: 8px 8px 0  0;
        }

        &-item__tr--header {
            border-top: 1px solid #f8f9fa;
        }

        &-item__tr--header:first-child {
            border-left: 1px solid #f8f9fa;
        }

        &-item__tr-text {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #57595D;
        }

        &-item__tr--header.table-item__tr--header-third {
            border-top: 8px solid #132E57;
            border-radius: 0 7px 0 0;
        }

        &-item__tr--header.table-item__tr--header-second {
            border-top: 8px solid #3271D2;
        }

        &-item__tr--footer {
            display: flex;
            flex-direction: column;
            padding: 18px 0 50px;
        }

        &-item__tr--footer span{
            margin: 0 0 23px;
        }

        &-item__tr--footer button {
            margin: 0 auto;
        }

        &-item--footer {
            border-radius: 0 0 8px 8px;
        }
        
    }
</style>