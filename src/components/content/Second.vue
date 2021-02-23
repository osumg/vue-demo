<template>
  <div id="second">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Second",
    data() {
      return {
        msg: '这是一个嵌套组件'
      }
    }
  }
</script>

<style scoped>

</style>
