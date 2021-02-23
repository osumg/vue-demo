<template>
  <div id="vuex">
    <div>原始值：{{count}}</div>
    <div>diff值：{{diffCount}}</div>
    <button @click="grow({years: 1})">生长</button>
    <button @click="growSlow({years:1})">缓慢生长</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: "Vuex",
    computed: {
      ...mapState('vuex', ['count']),
      ...mapGetters('vuex', ['diffCount'])
    },
    methods: {
      ...mapActions('vuex', ['growSlow']),
      ...mapMutations('vuex', ['grow'])
    }
  }
</script>

<style scoped>

</style>
