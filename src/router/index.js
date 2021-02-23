import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Account = () => import('../views/account/Account');
const Statistics = () => import('../views/statistics/Statistics');
const Cmp = () => import('../views/cmp/Cmp');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/account'
      },
      {
        path: '/account',
        component: Account
      },
      {
        path: '/statistics',
        component: Statistics
      },{
      path:'/cmp',
        component: Cmp
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
