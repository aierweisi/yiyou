<template>
<!--这是“我的”页面-->
    <div class="app-main">
        <div class="header">
            <div class="img">
                <img src="/static/images/wd.jpg" alt="">
            </div>
            <span>登录/注册</span>
            <i class="yo-ico">&#xe664;</i>
        </div>
        <div class="personal">
            <div class="title">
                <h5><div><i class="yo-ico">&#xe60c;</i></div><span>我的订单</span></h5>
                <ul>
                   <router-link tag="li" to="allsale">
                       <i class="yo-ico color1">&#xe63c;</i>
                       <span>全部订单</span>
                   </router-link>
                   <router-link tag="li" to="car">
                       <i class="yo-ico color2">&#xe61f;</i>
                       <span>待付款</span>
                   </router-link>
                   <router-link tag="li" to="notravel">
                       <i class="yo-ico color3">&#xe645;</i>
                       <span>未出行</span>
                   </router-link>
                   <router-link tag="li" to="notalk">
                       <i class="yo-ico color4">&#xe647;</i>
                       <span>待点评</span>
                   </router-link>
                </ul>
            </div>   
              <div class="content-box">
                  <div class="section">
                      <h5 class="bg1"><i class="yo-ico">&#xe616;</i></h5>
                      <span>我的钱包</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
                  <div class="section">
                      <h5 class="bg2"><i class="yo-ico">&#xe617;</i></h5>
                      <span>我的问答</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
                  <div class="section section-border">
                      <h5 class="bg3"><i class="yo-ico">&#xe622;</i></h5>
                      <span>我的点评</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
              </div>
              <div class="content-box">
                <div class="section">
                      <h5 class="bg4"><i class="yo-ico">&#xe884;</i></h5>
                      <span>我的优惠券</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
                  <div class="section">
                      <h5 class="bg5"><i class="yo-ico">&#xe606;</i></h5>
                      <span>我的收藏</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
                  <div class="section section-border">
                      <h5 class="bg6"><i class="yo-ico">&#xe778;</i></h5>
                      <span>我的活动</span>
                      <i class="yo-ico right">&#xe62e;</i>
                  </div>
          </div>
        </div> 
        

    </div>
    
</template>
<script>
export default {
  data(){
      return {
      }
      },
      methods:{
          turnout(){
              this.$router.push({path:"set"})
          },
           turnout1(){
              this.$router.push({path:"message"})
          }
      }
}
</script>
<style lang="scss" scoped>
    .header{
        height:1.1rem;background:url(/static/images/wd2.jpg) no-repeat;display:flex;background-size:100% 1.1rem;padding:10px 20px;
        .img{width:0.41rem;height:0.41rem;border:1px solid #fff;border-radius:50%;margin-top:35px;
            img{width:0.40rem;height:0.4rem;border-radius:50%;}
        }
        span{flex:1;color:#d9e8f7;font-size:16px;margin-top:45px;margin-left:12px;}
        .yo-ico{color:#fff;font-size:28px;}
    }
   .personal{
       .title{height:1.4rem;background:#fff;margin-bottom:5px;
            h5{display:flex;align-items:center;height:0.5rem;font-weight:normal;
                div{width:0.3rem;background:#23cdb7;border-radius:50%;
                    text-align:center;line-height:0.3rem;margin:0 10px;
                    i{color:#fff;font-size:20px;}
                }
                span{color:#333;}
            }
            ul{display:flex;
                li{
                    width:25%;display:flex;flex-direction: column;align-items: center;
                    .color1{color:#f67d57;}.color2{color:#bc66df;}.color3{color:#eed64e}
                    .color4{color:#64a5fd;}
                    i{font-size:32px;}
                }
            }
       }
       .content-box{
           height: 1.65rem;padding-left:15px;background:#fff;margin-bottom:5px;
           .section{
                padding-right:20px;align-items:center;height:0.55rem;display:flex;border-bottom:1px solid #ccc;
                span{flex:1;}
                .right{font-size:22px;color:#999;}
                .bg1{background-color:#eeaf35;font-size:26px;}
                .bg2{background-color:#3fd892;font-size:16px;}
                .bg3{background-color:#439bfe;font-size:20px;}
                .bg4{background-color:#f67d57;font-size:22px;}
                .bg5{background-color:#ff4f3f;font-size:28px;}
                .bg6{background-color:#fdde35;font-size:20px;}
                h5{
                    margin-right:15px;text-align:center;line-height:0.32rem;width:0.32rem;height:0.32rem;border-radius:50%;
                    i{color:#fff;}
                }
            }
            .section-border{border:0;}
       }
   }
</style>
