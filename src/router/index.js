import Vue from 'vue'
import VueRouter from 'vue-router'
import VueToast from 'vue-toast-notification';

// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueRouter)
Vue.use(VueToast);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/register-new-user',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: "/user",
    name: "User",
    component: () =>
        import(/* webpackChunkName: "User" */ '../views/User.vue'),
    meta: {requiresAuth: true}
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
        name: 'Home'
      });
    } else {
        next();
    }
  } else {
    next();
  }
});

export default router
