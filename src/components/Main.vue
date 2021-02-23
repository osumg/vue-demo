<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <h2>count: {{count}}</h2>
    <h2>number: {{number}}</h2>
    <h2>总计：{{total}}</h2>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Main",
    data() {
      return {
        number: 100
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      }
    },
    computed: mapState({
      count: state => state.count,
      total(state) {
        return state.count + this.number
      }
    })
  }
</script>

<style scoped>

</style>
