<template>
  <div class="app-eat">
      <div class="title">
          <h1><i class="border"></i>去哪吃</h1>
          <h2>更多<i class="yo-ico">&#xe62e;</i></h2>
      </div>
      <div class="content">
          <div class="img" v-for="eat in indexEat" :key="eat.id">
            <img :src="eat.url" :alt="eat.title">
            <div class="hotel">
                <p>{{eat.title}}</p>
                <p>{{eat.description}}</p>
            </div>
          </div>
         
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
      ...mapGetters(['indexEat'])
    }
}
</script>
<style lang="scss" scoped>
    .app-eat{
        width:100%;height:2rem;background:#fff;
        /******可复用的title*******/
        .title{ 
            width:100%;height:0.24rem;border-bottom:1px solid #ccc;display:flex;justify-content: space-between;padding:0 15px 0 10px;
            h1{font-size:14px;font-weight:normal;
                .border{width:3px;height:14px;display:inline-block;vertical-align: middle;background:#35a9ee;margin-right:4px; 
            }
            }
            h2{
                color:#35a9ee;font-weight:normal;font-size:12px;
            }
        }

        .content{height:1.76rem;width:100%;display:flex;justify-content: space-around;align-items:center;
            .img{
                width:1.05rem;height:90%;overflow:hidden;border-radius:5px;
                img{width:1.05rem;height:1.11rem;border-radius:5px;}
                .hotel{
                    width:1.05rem;height:0.38rem;padding-top:10px;
                    p:nth-child(1){
                        color:#333;font-size:16px;line-height:10px;
                    }
                    p:nth-child(2){
                        color:#999;font-size:12px;
                    }
                }
            }
        }
    }
</style>
