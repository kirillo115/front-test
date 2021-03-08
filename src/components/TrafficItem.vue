<template>
    <div class="traffic-wrap">
        <div class="traffic-item">
        <div class="traffic-item__top traffic-item__top--basic">Most popular!</div>
        <div class="traffic-item__body">
            <span class="traffic-item__suptitle">All Access Membership</span>
            <h3 class="traffic-item__title">Basic</h3>
            <span class="traffic-item__subtitle">Includes all courses from many programs</span>
            <h4 class="traffic-item__wrap-title">Pick your plan:</h4>
            <div class="traffic-item__wrap">
                <label for="traffic-input-f">
                    <input type="radio" checked="checked" name="traffic-input" id="traffic-input-f">
                    <span class="traffic-item__radio">
                        <span></span>
                    </span>
                    <div class="traffic-item__price-wrap">
                        <span class="traffic-item__price">$47<span>/month</span></span>
                        <span class="traffic-item__price--descr">(pay annually — $564 / year)</span>
                        <span class="traffic-item__price--sale">Save 30%!</span>
                    </div>
                </label>
                <label for="traffic-input-s">
                    <input type="radio" name="traffic-input" id="traffic-input-s">
                    <span class="traffic-item__radio">
                        <span></span>
                    </span>
                    <div class="traffic-item__price-wrap">
                        <span class="traffic-item__price">$87<span>/month</span></span>
                        <span class="traffic-item__price--descr">(pay per month)</span>
                    </div>
                </label>
            </div>
            <button class="traffic-item__btn">Enroll Now</button>
            <span class="traffic-item__list-title">Includes:</span>
            <ul class="traffic-item__list">
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    All 100+ Courses
                    <span class="traffic-item__list--question">
                        <img src="../assets/Icon.png" alt="">
                    </span>
                    <div class="traffic-item__list--descr">
                            <span>Default tooltip. Here you’ll find something on the left.</span>
                    </div>
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    All 4 Certificate Programs
                    <span class="traffic-item__list--question">
                        <img src="../assets/Icon.png" alt="">
                    </span>
                    <div class="traffic-item__list--descr">
                            <span>Default tooltip. Here you’ll find something on the left.</span>
                    </div>
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Excel, PPT, and PDF Files
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Digital Blockchain Verified Certificates
                </li>
            </ul>
        </div>
    </div>
    <div class="traffic-item">
        <div class="traffic-item__top traffic-item__top--full">Most popular!</div>
        <div class="traffic-item__body">
            <span class="traffic-item__suptitle">All Access Membership</span>
            <h3 class="traffic-item__title">Full-Immersion</h3>
            <span class="traffic-item__subtitle">Everything in the Basic plan, plus more</span>
            <div class="traffic-item__wrap">
                    <span class="traffic-item__price">$77<span>/month</span></span>
                    <span class="traffic-item__price--descr">(pay annually — $924 / year)</span>
            </div>
            <hr>
            <button class="traffic-item__btn traffic-item__btn--full">Enroll Now</button>
            <span class="traffic-item__list-title">Everything in Basic, plus:</span>
            <ul class="traffic-item__list">
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Capital IQ & EIKON Partner Integrations
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Premium Email Support
                    <span class="traffic-item__list--question">
                        <img src="../assets/Icon.png" alt="">
                    </span>
                    <div class="traffic-item__list--descr">
                            <span>Default tooltip. Here you’ll find something on the left.</span>
                    </div>
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Model Review & Feedback
                    <span class="traffic-item__list--question">
                        <img src="../assets/Icon.png" alt="">
                    </span>
                    <div class="traffic-item__list--descr">
                            <span>Default tooltip. Here you’ll find something on the left.</span>
                    </div>
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Additional Case Studies
                    <span class="traffic-item__list--question">
                        <img src="../assets/Icon.png" alt="">
                    </span>
                    <div class="traffic-item__list--descr">
                            <span>Default tooltip. Here you’ll find something on the left.</span>
                    </div>
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    Resume & Cover Letter Review
                </li>
                <li class="traffic-item__list-item">
                    <img src="../assets/check-mark-li.png" alt="" class="traffic-item__list-img">
                    A FREE Modeling Competition Entry
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'traffic-item',
    props: ['topTitle', 'suptitle', 'title', 'subtitle', 'planTitle', 
    'price', 'priceDescr', 'priceSale', 'listTitle', 'listItem'],
    data() {
        return {
           lable: 'isActive' 
        }
    },
    methods: {
        inputColor(event) {

        }
    }
}
</script>

<style lang="scss">
    .traffic-item {
        display: flex;
        flex-direction: column;
        border-radius: 7px 7px 8px 8px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06), 0px 3px 6px rgba(0, 0, 0, 0.04);
        flex: 0 0 49%;
        background: #fff;
        height: 100%;
        transition: .4s;

    &:hover {
            transform: translateY(-99px);
            transition: .4s;
        }

    &__top {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        padding: 9px 0;
        margin: 0 0 49px;
        border-radius: 5px 5px 0 0;
    }

    &__top--basic {
        background: #3271D2;
    }

    &__top--full {
        background: #132E57;
    }

    &__suptitle {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #132E57;
        margin: 0 0 12px;
    }

    &__title {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #132E57;
        margin: 0 0 28px;
    }

    &__subtitle {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #57595D;
        margin: 0 0 35px;
    }

    &__wrap-title {
        margin: 0 0 21px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: #132E57;
    }

    &__price-wrap {
        color: #727477;
        margin: 0 0 0 21px;
    }

    &__price {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
    }

    &__price span {
        font-size: 18px;
    }

    &__price--descr {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        margin: 0 0 0 9px;
    }

    &__price--sale {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #3271D2;
        background: #E9F0FA;
        border-radius: 16px;
        padding: 0px 8px;
        margin: 0 0 0 10px;
    }

    &__wrap {
        color: #132E57;
    }

        &__body {
            display: flex;
            flex-direction: column;
            padding: 0 48px 31px;
            
            & input {
                opacity: 0;
            }

            & label {
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                margin: 0 0 27px;
            }

            & .traffic-item__radio {
                position: absolute;
                background: #ccc;
                width: 16px;
                height: 16px;
                opacity: 1;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

            &.traffic-item__radio>span {
                position: absolute;
                background: #ccc;
                width: 6px;
                height: 6px;
                opacity: 1;
                border-radius: 50%;
            }  

            }

            & input:checked + .traffic-item__radio{
                background: #3271D2;
            }

            & input:checked + .traffic-item__radio>span{
                background: #fff;
            }

            & input:checked~.traffic-item__price-wrap{
                color: #132E57;
            }
        }

        &__btn {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            color: #FFFFFF;
            background: #3271D2;
            outline: none;
            box-shadow: 0px 3px 6px ;
            border-radius: 4px;
            border: none;
            padding: 13px 33px;
            margin: 0 0 52px;
            align-self: flex-start;
            cursor: pointer;
            transition: .4s;
        }

        &__btn:hover {
            transition: .4s;
            background: #82a7dd;
        }

        &__list-title {
            position: relative;
            margin: 0 0 29px;
        }

        &__list-title::before {
            position: absolute;
            content: '';
            width: 100%;
            left: 0;
            height: 1px;
            background: #DDDEE0;
            top: -28px;
        }

        &__list {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #57595D;
            margin: 0;
            padding: 0;
        }

        &__list-item {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            margin: 0 0 23px;
        }

        &__list-img {
            margin: 0 12px 0 0px;
        }

        &__list--question img {
            object-fit: contain;
            cursor: pointer;
        }


        &__list--descr {
            position: relative;
            display: none   ;
            justify-content: flex-start;
            align-items: center;
            width: 43%;
        }

        &__list--descr::before {
            position: absolute;
            content: '';
            clip-path: polygon(70% 0, 0 50%, 70% 100%);
            width: 20px;
            height: 20px;
            background: #1E2939;
            left: 0;
        }

        &__list--descr span{
            position: absolute;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            background: #1E2939;
            border-radius: 4px;
            left: 10px;
            color: #FFFFFF;
            padding: 10px;
        }
        
        &__list--question:hover ~ &__list--descr{
            display: flex;
        }

        &__list--question img{
            margin: 0 0 0 11px;
        }

        &__btn--full {
            background: #132E57;
            margin: 11px 0 51px;
        }

        &__btn--full:hover {
            background: #3e6aac;
            transition: .4s;
        }

    }
</style>