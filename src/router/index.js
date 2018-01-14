import Vue from 'vue'
import Router from 'vue-router'
import AppMine  from "@/components/mine/AppMine"
import AppSet  from "@/components/mine/AppSet"
import AppMessage from "@/components/mine/AppMessage"
import AppLogin from "@/components/login/AppLogin"
import AppRegister from "@/components/register/AppRegister"
import AppReset from "@/components/resetpassward/AppReset"
import AppDestination from "@/components/destination/AppDestination"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:"mine"},
    {path: '/mine',name: 'mine',component: AppMine},
    {path: '/set',name: 'set',component: AppSet},
    {path: '/message',name: 'message',component: AppMessage},
    {path: '/login',name: 'login',component: AppLogin},
    {path: '/register',name: 'register',component: AppRegister},
    {path: '/reset',name: 'reset',component: AppReset},
    {path: '/destination',name: 'destination',component: AppDestination}    
  ]
})
