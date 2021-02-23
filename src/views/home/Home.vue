<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout style="position: absolute; top: 64px; bottom: 0; left: 0; right: 0;">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                用户
              </template>
              <MenuItem name="1-1" @click.native="toView('account',['用户','用户'])">用户信息</MenuItem>
              <MenuItem name="1-2" @click.native="toView('statistics',['用户','数据统计'])">数据统计</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                主体
              </template>
              <MenuItem name="2-1" @click.native="toView('cmp',['主体','自定义组件'])">自定义组件</MenuItem>
              <MenuItem name="2-2" @click.native="toView('vuex',['主体','vuex'])">vuex</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem v-for="item in breadcrumbs" :key="item">{{item}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '10px', background: '#fff'}">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: "Home",
    computed: {
      ...mapState('home', ['breadcrumbs']),
    },
    methods: {
      ...mapMutations('home', ['setBreadcrumbs']),
      toView(view, breadcrumbs) {
        this.setBreadcrumbs({breadcrumbs})
        this.$router.push(`/${view}`);
      }
    }
  }
</script>

<style scoped>
  .layout {
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
    position: relative;
    /*border-radius: 4px;*/
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
