import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import HomePage from './pages/home'
import AboutPage from './pages/about'
import notFound from './pages/notFound'
import Item from './pages/_itemAlias'

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: notFound
    }
  ]
})

export default routers
