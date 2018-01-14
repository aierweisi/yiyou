<template>
  <div class="app-sale">
      <div class="title">
          <h1><i class="border"></i>去哪买</h1>
          <h2>更多<i class="yo-ico">&#xe62e;</i></h2>
      </div>
      <div class="content">
          <div class="img" v-for="sale in indexSale" :key="sale.id">
            <img :src="sale.url" :alt="sale.title">
            <div class="hotel">
                <p>{{sale.title}}</p>
                <p>{{sale.price}}<i class="price">起</i> </p>
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
      ...mapGetters(['indexSale'])
    }
}
</script>
<style lang="scss" scoped>
    .app-sale{
        width:100%;height:1.56rem;background:#fff;
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

        .content{height:1.32rem;width:100%;display:flex;justify-content: space-around;align-items:center;
            .img{
                width:1.05rem;height:1.10rem;position: relative;overflow:hidden;border-radius:5px;
                img{width:100%;height:100%;border-radius:5px;}
                .hotel{
                    width:1.05rem;height:0.38rem;background:#000;background:rgba(0,0,0, 0.5);position:absolute;bottom:0;left:0;padding-top:3px;
                    p:nth-child(1){
                        color:#fff;font-size:14px;line-height:16px;
                    }
                    p:nth-child(2){
                        color:orangered;color:12px;
                    }
                }
            }
        }
    }
</style>
