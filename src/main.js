// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import store from './vuex'

import './modules/directives'

Vue.config.productionTip = false

=======
import './style/usage/app.scss'
Vue.config.productionTip = false

//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'

 // 引入全部组件 
 import MintUI from 'mint-ui'
 import 'mint-ui/lib/style.css'
 Vue.use(MintUI) 

 import store from '@/vuex/store'
>>>>>>> tian
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
