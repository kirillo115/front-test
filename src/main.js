import Vue from 'vue'
import App from './App.vue'
import Swiper from 'swiper';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: -40,
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});