<template>
    <section class="intro">
        <div class="container">
            <header class="header">
                <div class="header-search">
                    <img src="../assets/Icon Artwork.png" alt="">
                    <input type="text" class="header-search__input" placeholder="Search for courses, lessons, resources an...">
                </div>
                <div class="menu">
                    <nav class="nav">
                    <a href="" class="nav__item">All Courses</a>
                    <a href="" class="nav__item">For Business</a>
                </nav>
                <div class="registr">
                    <a href="" class="registr__item">Log In</a>
                    <a href="" class="registr__item--btn">Get Started</a>
                </div>
                </div>
            </header>
            <h1 class="intro__title">Pricing Plans</h1>
            <span class="intro__subtitle">Upgrade your skills. Choose a plan that works for your budget and career goals.</span>
        </div>
    </section>
</template>

<style lang="scss">

.intro {
    background: linear-gradient(45deg, #132E57, #255BAC);
    min-height: 637px;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 85%, 70% 100%, 30% 100%, 0 85%, 0 0);
    position: relative;
    z-index: 5;

    &__title {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        color: #FFFFFF;
        text-align: center;
        margin: 0 0 37px;
    }

    &__subtitle {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
        display: block;
    }

    & .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0 0;
        margin: 0 0 96px;

        &-search {
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 22px;
        width: 33%;
        max-width: 100%;
        display: inline-flex;

        & img {
            display: block;
            margin: 0 13px 0 5px;
            object-fit: contain;
        }
    }


    & .menu {
        width: 42%;
        display: flex;
        justify-content: space-between;
    }

    & .nav {
        position: relative;
        display: flex;
        align-items: center;

        &::after {
            position: absolute;
            content: '';
            width: 1px;
            height: 40px;
            background: #ffffff;
            right: 2px;
            bottom: -4px;
        }

        &__item {
            text-decoration: none;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            margin: 0 37px 0 -5px;
            transition: .4s;
        }

        &__item:hover { 
           transition: .4s;
           text-decoration: underline; 
        }
    }

    & .registr {
        display: flex;
        justify-content: space-between;
        width: 43%;
        align-items: center;

        &__item {
            text-decoration: none;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
        }

        &__item:hover { 
           transition: .4s;
           text-decoration: underline; 
        }

        &__item--btn {
            text-decoration: none;
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #FFFFFF;
            border: 1px solid #ffffff;
            padding: 10px 14px;
            border-radius: 5px;
            transition: .4s;
        }

        &__item--btn:hover { 
            transition: .4s;
            background: rgba(204, 204, 204, 0.377);
        }
    }


        &-search__input {
            background: inherit;
            outline: none;
            border: none;
            width: 100%;
            color: #fff;
        }

        &-search__input::placeholder {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
}

</style>