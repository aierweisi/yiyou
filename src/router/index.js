import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import Home from '@/pages/home/Home'
import CityChange from '@/pages/cityChange/CityChange'
import Strategy from '@/pages/strategy/Strategy'
import Hotel from '@/pages/hotel/Hotel'
import Order from '@/pages/order/Order'
import Detail from '@/pages/detail/Detail'
import Buy_tickets from '@/pages/buy_tickets/Buy_tickets'
import List from '@/pages/list/List'
import Travels from '@/pages/travels/Travels'

import HotSearch from '@/pages/list/HotSearch'
=======
import AppMine  from "@/components/mine/AppMine"
import AppSet  from "@/components/mine/AppSet"
import AppMessage from "@/components/mine/AppMessage"
import AppLogin from "@/components/login/AppLogin"
import AppRegister from "@/components/register/AppRegister"
import AppReset from "@/components/resetpassward/AppReset"
import AppDestination from "@/components/destination/AppDestination"
>>>>>>> tian
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      children:[{
        path: 'hotSearch',
        name: 'hotSearch',
        component:HotSearch
      }]
    },
    {
      path: '/cityChange',
      name: 'cityChange',
      component: CityChange
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy
    },
    {
    	path: '/hotel',
    	name: 'hotel',
    	component:Hotel
    },
    {
      path: '/order',
      name: 'order',
      component:Order
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component:Detail
    },
    {
    	path: '/buy_tickets',
    	name: 'buy_tickets',
    	component:Buy_tickets
    },
    {
    	path: '/travels',
    	name: 'travels',
    	component:Travels
    }  
=======
    {path: '/',redirect:"mine"},
    {path: '/mine',name: 'mine',component: AppMine},
    {path: '/set',name: 'set',component: AppSet},
    {path: '/message',name: 'message',component: AppMessage},
    {path: '/login',name: 'login',component: AppLogin},
    {path: '/register',name: 'register',component: AppRegister},
    {path: '/reset',name: 'reset',component: AppReset},
    {path: '/destination',name: 'destination',component: AppDestination}    
>>>>>>> tian
  ]
})
