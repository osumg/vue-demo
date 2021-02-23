<template>
  <div id="cmp">
    <CusListRow :title="title" :content="content" @acceptMsg="acceptMsg">
      <!--具名组件-->
      <template v-slot:first>first slot</template>
      <template v-slot:second>second slot</template>
      <template v-slot:third>third slot</template>
      <div>
        我是slot
      </div>
      <h1>xiaxia</h1>
    </CusListRow>
    <div>父组件接受的消息：{{childrenMsg}}</div>
  </div>
</template>

<script>
  import CusListRow from '../../components/content/CusListRow';

  export default {
    name: "Cmp",
    data() {
      return {
        title: '标题',
        content: '内容',
        childrenMsg: ''
      }
    },
    components: {
      CusListRow
    },
    methods: {
      acceptMsg(payload) {
        this.childrenMsg = JSON.stringify(payload);
      }
    }
  }
</script>

<style scoped>

</style>
