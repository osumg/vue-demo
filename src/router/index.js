import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Account = () => import('../views/account/Account');
const Statistics = () => import('../views/statistics/Statistics');

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
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
