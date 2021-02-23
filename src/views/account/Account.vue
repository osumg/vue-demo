<template>
  <div class="account">
    <Modal
            v-model="modal1"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel"
            width="50%">
      <span>要显示的内容</span>
    </Modal>
    <Table :columns="columns" :data="data" height="450" @on-row-click="clickRow"></Table>
    <div class="bottom-page">
      <Page :total="100" show-elevator @on-change="changePage"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Account",
    data() {
      return {
        modal1: false,
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: []
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        axios.post("/account").then(res => {
          console.log('response', res.data)
          this.data = res.data.data;
        })
      },
      changePage(page) {
        axios.post("/account").then(res => {
          console.log('response', res.data)
          this.data = res.data.data;
        })
      },
      clickRow() {
        this.modal1 = true;
      },
      ok() {
        this.modal1 = false;
      },
      cancel() {
        this.modal1 = false;
      }
    }
  }
</script>

<style scoped>
  .bottom-page {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
</style>
