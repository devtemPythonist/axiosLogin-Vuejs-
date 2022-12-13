import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
//login
import login from '../components/auth/login.vue'
// not found
import notFoun from '../views/notFoun.vue'
import testPage from '../views/testPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/admin/home',
    name: 'adminHome',
    component: DashboardView,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/test',
    name: 'testPage',
    component: testPage,
    meta:{
      requiresAuth:true
    }
  },
  // login
  {
    path: '/login',
    name: 'Login',
    component: login,
    meta:{
      requiresAuth:false
    }
  },
  // not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoun',
    component: notFoun,
    meta:{
      requiresAuth:false
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    return { name: 'Login'}
  }
})

export default router
