<template>
  <div class="app-play">
      <div class="title">
          <h1><i class="border"></i>去哪玩</h1>
          <h2>更多<i class="yo-ico">&#xe62e;</i></h2>
      </div>
      <div class="content">
          <div class="img" v-for="play in indexPlay" :key="play.id">
            <img :src="play.url" :alt="play.title">
            <div class="hotel">
                <p>{{play.title}}</p>
                <p>{{play.description}}</p>
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
      ...mapGetters(['indexPlay'])
    }
}
</script>
<style lang="scss" scoped>
    .app-play{
        width:100%;height:1.24rem;background:#fff;
        /******可复用的title*******/
        .title{ 
            width:100%;height:0.28rem;border-bottom:1px solid #ccc;display:flex;justify-content: space-between;padding:0 15px 0 10px;
            h1{font-size:14px;font-weight:normal;
                .border{width:3px;height:14px;display:inline-block;vertical-align: middle;background:#35a9ee;margin-right:4px; 
            }
            }
            h2{
                color:#35a9ee;font-weight:normal;font-size:12px;
            }
        }

        .content{height:1rem;width:100%;display:flex;justify-content: space-around;align-items:center;
            .img{
                width:1.05rem;height:0.75rem;position: relative;overflow:hidden;border-radius:5px;
                img{width:100%;height:100%;border-radius:5px;}
                .hotel{
                    width:0.9rem;height:0.45rem;background:rgba(255,255,255, 0.6);position:absolute;left:0.075rem;top:0.15rem;padding-top:5px;
                    p:nth-child(1){
                        color:#333;font-size:16px;line-height:16px;
                    }
                    p:nth-child(2){
                        color:#666;font-size:14px;
                    }
                }
            }
        }
    }
</style>
