import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Account = () => import('../views/account/Account');
const Statistics = () => import('../views/statistics/Statistics');
const Cmp = () => import('../views/cmp/Cmp');
const Vuex = () => import('../views/vuex/Vuex');

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
      },
      {
        path: '/cmp',
        component: Cmp
      },
      {
        path: '/vuex',
        meta: {
          roles: ['admin']
        },
        component: Vuex
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  // if (to.meta.roles && to.meta.roles.includes('admin')) {
  //   next({path: '/account'})
  // } else {
  //   next();
  // }

  next();
})

export default router
