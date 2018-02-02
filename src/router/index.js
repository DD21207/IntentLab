import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Home from '@/views/Home'
import Login from '@/views/Login'





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },{
  	path: '/Home',
    name: 'Home',
    component: Home
  }]
})
