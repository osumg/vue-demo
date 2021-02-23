<template>
  <div class="cus-list-row">
    <div class="cus-list-main">
      <span>{{title}}：</span>
      <span>{{content}}</span>
    </div>
    <button @click="sendMsg">向父组件发送消息</button>
    <Second></Second>
    <div>以下是slot:
<!--      第一个：<slot name="first"></slot>-->
<!--      第二个：<slot name="second"></slot>-->
<!--      第三个：<slot name="third"></slot>-->

      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Second from './Second';

  export default {
    name: "CusListRow",
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      }
    },
    data() {
      return {
        msg: 'my message'
      }
    },
    components: {
      Second
    },
    methods: {
      sendMsg() {
        this.$emit('acceptMsg', {
          msg: '接受到了消息',
          time: '不确定的时间'
        })
      }
    }
  }
</script>

<style scoped>

</style>
