<template>
    <section class="slider">
        <div class="container">
            <h2 class="heading slider__heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis </h2>
        </div>
        <div class="slider-wrap">
            <div class="swiper-container">
            <div class="swiper-wrapper slider-wrap">
                <div class="swiper-slide">
                    <div class="slider-item">
                        <div class="slider-top">
                            <div class="slider-top__background"></div>
                            <div class="slider-top__descr">
                                <span class="slider-top__title">John Doe</span>
                                <span class="slider-top__subtitle">Financial Controller</span>
                            </div>
                        </div>
                        <p class="slider__descr">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”</p>
                         <a href="" class="slider__link">Read more</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slider-item">
                        <div class="slider-top">
                            <div class="slider-top__background"></div>
                            <div class="slider-top__descr">
                                <span class="slider-top__title">John Doe</span>
                                <span class="slider-top__subtitle">Financial Controller</span>
                            </div>
                        </div>
                        <p class="slider__descr">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”</p>
                         <a href="" class="slider__link">Read more</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slider-item">
                        <div class="slider-top">
                            <div class="slider-top__background"></div>
                            <div class="slider-top__descr">
                                <span class="slider-top__title">John Doe</span>
                                <span class="slider-top__subtitle">Financial Controller</span>
                            </div>
                        </div>
                        <p class="slider__descr">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”</p>
                         <a href="" class="slider__link">Read more</a>
                    </div>
                </div>
            </div>

            <div class="swiper-button-prev arrow-prev">
                <img src="../assets/prev.png" alt="">
            </div>
            <div class="swiper-button-next arrow-next">
                <img src="../assets/next.png" alt="">
            </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    
}
</script>

<style>

.slider {
    background: #f8f9fa;
    padding: 100px 0 0;
}

.slider__heading {
    margin: 0 0 46px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    color: #132E57;
}
 .swiper-container {
    max-width: 1200px;
    width: 100%;
    height: 600px;
    
}


.slider-top__title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #1E2939;
    margin: 0 0 14px;
}

.slider-top__subtitle {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    color: #1c7d87;
    font-size: 14px;
}

.slider-top {
    display: flex;
    align-items: center;
    margin: 0 0 29px;
}

.slider-top__descr {
    display: flex;
    flex-direction: column;
}

.slider-top__background {
    width: 47px;
    height: 47px;
    background: #C4C4C4;
    border-radius: 50%;
    margin: 0 21px 0 0px;
}

.slider-item {
    background: #ffffff;
    border: 1px solid #dddee063;
    border-radius: 8px;
    padding: 27px 45px 35px;
    margin: 0 40px 0;
}



.slider__descr {
    margin: 0 0 27px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #57595D;
    line-height: 23px;
}

.slider__link {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #132E57;
}

.swiper-button-prev.arrow-prev {
    left: 21px;
}

.swiper-button-next.arrow-next {
    right: 21px;
}

.swiper-button-prev.arrow-prev, .swiper-button-next.arrow-next {
    top: 28%;
    margin-top: 0;
}

</style>