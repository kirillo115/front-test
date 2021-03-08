<template>
    <section class="traffic">
        <div class="container">
            <TrafficItem/>
        </div>
    </section>
</template>

<script>
import TrafficItem from './TrafficItem'

export default {
    name: 'tariffs',
    components: {
        TrafficItem
    },
    data () {
        return {
            
        }
    },
    methods: {
        het() {
           return this.input.map((item, i) => item.toUpperCase() + item.repeat(i)).join('-')
        }
    }
}
</script>

<style lang="scss">
    .traffic {
        margin: -98px 0 0px;
        position: relative;
        background: #f8f9fa;

        &-wrap {
            display: flex;
            justify-content: space-between;
            position: relative;
            z-index: 45;
        }

    }
</style>