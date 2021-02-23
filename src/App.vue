<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import mock from './common/mock';
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  #app {
    padding: 0;
    margin: 0;
    height: 100%;
  }
</style>
