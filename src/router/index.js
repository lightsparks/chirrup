import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import VueToast from 'vue-toast-notification';

// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueRouter)
Vue.use(VueToast);
Vue.component('navbar', NavBar);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/Login.vue')
  },
  {
    path: '/register-new-user',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Register" */ '../views/Register/Register.vue')
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/SendMessage",
    name: "Send Message",
    component: () =>
        import(/* webpackChunkName: "SendMessage" */ '../views/SendMessage/SendMessage.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/Friends",
    name: "Friends",
    component: () =>
        import(/* webpackChunkName: "Friends" */ '../views/Friends/Friends.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/FindFriends",
    name: "Find Friends",
    component: () =>
        import(/* webpackChunkName: "FindFriends" */ '../views/FindFriends/FindFriends.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/Account",
    name: "Account",
    component: () =>
        import(/* webpackChunkName: "Account" */ '../views/Home/Home.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/Logout",
    name: "Logout",
    component: () =>
        import(/* webpackChunkName: "Logout" */ '../views/Logout/Logout.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
        import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})



router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('token') === null) {
      next({
        name: 'Login'
      });
    } else {
        next();
    }
  } else {
    next();
  }
});

export default router
