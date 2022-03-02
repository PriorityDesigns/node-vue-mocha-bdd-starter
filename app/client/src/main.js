import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App.vue'
import Home from './views/Home.vue'
import PageNotFound from './views/PageNotFound.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

let isProd = process.env.NODE_ENV == "prod";
console.log("Build: " + process.env.NODE_ENV + ", " + isProd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
