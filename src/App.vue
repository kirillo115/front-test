<template>
  <div id="app">
    <Intro/>
    <Tariffs/>
    <Table/>
    <Questions/>
    <Slider/>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Tariffs from './components/Tariffs'
import Table from './components/Table'
import Questions from './components/Questions'
import Slider from './components/Slider'

export default {
  name: 'App',
  components: {
    Intro,
    Tariffs,
    Table,
    Questions,
    Slider
  }
}
</script>

<style lang="scss">
@import '~normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
@import '~swiper/swiper-bundle.css';

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Open Sans;
}

.container {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
