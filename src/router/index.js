import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = () => import('@/views/login')
const home = () => import('@/views/home')
const headTop = () => import('@/components/headTop')

export default new Router({
    
  mode: 'hash',
  
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: '/headTop',
        component: headTop,
        meta: ['公共头部分']
      }]
    }
  ]
})
