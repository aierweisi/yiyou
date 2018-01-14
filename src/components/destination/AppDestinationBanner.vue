<template>
  <div class="app-banner swiper-container">
      <div class="swiper-wrapper slider">
            <div :key='bill.id' v-for='bill of billboards' class="swiper-slide">
                <img width='100%' height="188" :src="bill.imageUrl" alt="bill.name">
            </div>
      </div>
      <div class="swiper-pagination">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper'
export default {
  name:'app-banner',
  data:function(){
      return {
          billboards:[],
          datasales:''
      }
  },
  methods:{
      getData(){
          let that = this;
            axios.get('http://localhost:9000/mz/v4/api/billboard/home',{
                params:{__t:Date.now()}
            }).then((response)=>{
                that .billboards = response.data.data.billboards
            })
      }
  },
  created(){
    this.getData()
  },
  updated(){
        new Swiper('.app-banner',{
            loop:true,
            // autoplay:{
            // delay:3000,
            // disableOnInteraction:false
            // },
             pagination: {
                 el: '.swiper-pagination'
            }
        })
  }
}
</script>
<style lang="scss" scoped>
  
</style>
