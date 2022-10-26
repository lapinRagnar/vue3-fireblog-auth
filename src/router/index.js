import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Profile from '@/views/Profile.vue'
import Admin from '@/views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
    meta: {
      title: 'Blogs'
    }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },

  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      title: 'Admin'
    }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`
  next()
})

export default router
