<template>
  <div class="app-index">
      <div class="header">
          <div class="search">
              <div class="city">
                  <span>上海</span>
                  <i class="yo-ico">&#xe633;</i>
              </div>
              <div class="search-content">
                  <i class="yo-ico search-ico">&#xf067;</i>
                  <input type="text" placeholder="目的地/景点/酒店等">
              </div>
              <i class="yo-ico message-ico">&#xe637;</i>
          </div>
          <div class="weather">
              <AppWeather></AppWeather>
          </div>
        <AppDestinationBanner></AppDestinationBanner>   
      </div>
      <div class="nav">
          <router-link class="nav-box" v-for="nav in navs" :key="nav.id" tag="div" :to="nav.content">
              <img width="50" height="50" :src='"../../../static/images/"+nav.url +".jpg"' alt="nav.title">
              <p>{{nav.title}}</p>
          </router-link>
      </div>
      <div class="city-box">
          <h1>玩转上海</h1>
          <div class="play">
              <AppPlay></AppPlay>
          </div>
          <div class="live">
              <AppLive></AppLive>
          </div>
          <div class="eat">
              <AppEat></AppEat>
          </div>
          <div class="buy">
              <AppBuy></AppBuy>
          </div>
          <div class="sale">
              <AppSale></AppSale>
          </div>
      </div>
  </div>
</template>
<script>
import AppDestinationBanner from "./AppDestinationBanner"
import AppWeather from './AppWeather'
import AppPlay from "./play/AppPlay"
import AppEat from "./eat/AppEat"
import AppBuy from "./buy/AppBuy"
import AppSale from "./sale/AppSale"
import AppLive from "./live/AppLive"

import axios from "axios"
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  components:{
      AppDestinationBanner,AppWeather,AppPlay,AppEat,AppBuy,AppSale,AppLive
  },
  computed:{
      ...mapState(['cityMessage'])
      },
  data(){
      return {
          navs:[
              {id:1,title:"景点",url:"n1",content:"spot"},
              {id:2,title:"酒店",url:"n2",content:"hotel"},
              {id:3,title:"美食",url:"n3",content:"food"},
              {id:4,title:"购物",url:"n4",content:"buy"},
              {id:5,title:"本地特惠",url:"n5",content:"localSale"}
          ]
      }
  },
  methods:{
      ...mapActions(['getCityData'])
  },
  created(){
     this.getCityData("上海")
  }
}
</script>

<style lang="scss" scoped>
.app-index{
    display:flex;flex-direction: column;align-items: center;
}
 .header{
        width:100%;
        .search{
            z-index:1000;position:fixed;left:0px;top:20px;height:.35rem;width:100%;display: flex;padding:0 12px;
            .city{
                padding-right:12px;
                span{font-size:14px;color:#fff;}
                i{color:#fff;}
            }
            .search-content{
                width:2.5rem;height:0.25rem;background:#fff;border-radius:0.25rem;opacity:0.8;display:flex;align-items:center;
                input{background:none;border:0;font-size:12px;}
               .search-ico{
                    color:#37aaee;font-size:16px;padding:0 12px;margin-top:5px;
                }
            }
            .message-ico{
                color:#fff;font-size:24px;padding-left:12px;line-height:24px;
            }
        }
        .weather{position:fixed;z-index:199;top:50px;right:20px;}     
   }
   .nav{
       width:3.55rem;display:flex;justify-content: space-around;height:1.06rem; background:#fff;border-radius:8px;position: relative;top:-10px;z-index:200;
       box-shadow:0 2px 4px #ccc;       
.nav-box{
          width:20%;display:flex;flex-direction: column;align-items:center;padding:15px 0;
          p{color:#666;margin-top:10px;}          
       }
   }  
   .city-box{width:100%;overflow:scroll;height:3.25rem;text-align:center;line-height:0.25rem;border-bottom:1px solid #ccc;
    h1{font-weight:normal;font-size:18px;color:#666;background:#fff;}
    .play,.eat,.buy,.live,.sale{margin-bottom:10px;}
   }
</style>
