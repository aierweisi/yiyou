<!--这是登录页面-->
<template>
<div class="app-login">
    <AppHeader><p slot="middle" class="">注册</p></AppHeader>
    <div class="content">
        <div class="nav">
            <span :class="{'bg-color':isVip}" @click="isTel = false;isVip=true">用户名注册</span>
            <span :class="{'bg-color':isTel}" @click = "isVip = false;isTel=true">手机号注册</span>
        </div>
        <!--输入账号密码区域-->
             <div v-if="isVip" class="login1">
                <div class="username"><i class="yo-ico">&#xe657;</i><input placeholder="请输入昵称" v-verify="username" v-model="username" type="text"></div>
                <p  class="f1" v-remind="username"></p>
                <div class="passward"><i class="yo-ico">&#xe639;</i><input placeholder="请输入密码" type="password" v-verify="password" v-model="password"></div>
                <p  class="f1" v-remind="password"></p>
                 <div class="passward"><i class="yo-ico">&#xe639;</i><input placeholder="请再次输入密码" type="password" v-verify="surepassword" v-model="surepassword"></div>
                <p  class="f1" v-remind="surepassword"></p>
            </div>
            <!--手机号登录-->
             <div class="login2"  v-if="isTel">
                <div class="username"><i class="yo-ico">&#xe640;</i><input placeholder="请输入正确的手机号" type="text"></div>
                <div class="passward"><i class="yo-ico">&#xe639;</i><input placeholder="请输入密码" type="text"><p class="move-passward">发送动态密码</p></div>
            </div>
        <!--点击登录或注册新用户-->
        <div class="login-in">
            <mt-button type="danger" @click ='submit'>注册</mt-button>
        </div>
        <!--第三方登录区域-->
        <div class="other-login">
            <div class="other">
                <span></span>
                <p>第三方账号登录</p>
                <span></span>
            </div>
            <div class="app-icon">
                <div><i class="yo-ico">&#xe612;</i></div>
                <div><i class="yo-ico">&#xe66e;</i></div>
                <div><i class="yo-ico">&#xe614;</i></div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
  import AppHeader from '../AppHeader'
  import Vue from "vue";
  import verify from "vue-verify-plugin";
  import axios from 'axios'
  import { Toast } from 'mint-ui';
    Vue.use(verify,{
        blur:true
    });   
export default {
  data(){
      return {
          isVip : true,
          isTel : false,
          username:"",
          password:'',
          surepassword:""
      }
  },
  components:{
      AppHeader
  },
  verify: {
          username:[
            "required",
            {
                test:function(val){
                if(val.length<2){
                    return false;
                }
                return true;
                },
                message:"姓名不得小于2位"
            }
        ],
         password:[
            "required",
            {
                test:function(val){
                if(val.length>16 || val.length<6){
                    return false;
                }
                return true;
                },
                message:"密码长度6-16位"
            }
        ],
         surepassword:[
            "required",
            {
                test:function(val){
                if(val !== this.password){
                    return false;
                }
                return true;
                },
                message:"两次密码不一致"
            }
        ]
  },
   methods:{
          submit() {
           console.log(this.$verify.check());
             if(this.$verify.check()){
                let that = this;
                let url = ''
            axios.get('http://localhost:9000/mz/v4/api/billboard/home',{
                params:{__t:Date.now()}
            }).then((response)=>{
        /****这里拿到后端的状态码后，根据状态码判断是否登录****/
                Toast({
                    message: '注册成功！即将跳转到登录页面',
                    position: 'middle',
                    duration: 1000
                });
                setTimeout(
                    function(){
                         that.$router.push({path:"/login"})
                    },1000)
            })
                // axios.post(url,{
                //    username:that.username,
                //    passward:that.password
                // }).then((response)=>{
                //     if(1){
                //         that.$router.push({path:"mine",query:{username:that.username}})
                //              
                // }
                //
                // })
            }        
        }
    }
}
</script>
<style lang="scss" scoped>
    .app-login{height:100%;background:#fff;}
    /****登录选项及输入账号密码区域*****/
    .content{
        display:flex;flex-direction: column;align-items: center;background:#fff;padding-top:40px;
        /******头部登陆选项区域*******/
        .nav{
            width:3.05rem;height:0.4rem;border-radius:5px;border:1px solid #35a9ee;display:flex;align-items:center;
            span{text-align:center;line-height:0.4rem;width:50%;display: inline-block;height:0.4rem;border-radius:5px;font-size:16px;transition: 0.3s;}
            .bg-color{
                background:#35a9ee;color:#fff;
            }
        }
        /**********登陆区域，信息输入**********/
         .login1{width:3.05rem;margin-top:35px;
        .username,.passward{
            width:3.05rem;border:1px solid #35a9ee;border-radius:5px;height:0.38rem;display:flex;margin-top:10px;
            i{width:0.5rem;height:0.36rem;background:#35a9ee;border-bottom-left-radius: 5px;border-top-left-radius: 5px;display:inline-block;color:#fff;font-size:22px;text-align:center;line-height:0.38rem;}
            input{
               flex:1;border:0;color:#ccc;font-size:16px;text-indent: 20px;border-radius:5px;
            }
        }
    }
         .login2{width:3.05rem;margin-top:35px;
        .username,.passward{
            width:3.05rem;border:1px solid #35a9ee;border-radius:5px;height:0.38rem;display:flex;margin-top:10px;
            i{width:0.5rem;height:0.36rem;background:#35a9ee;border-bottom-left-radius: 5px;border-top-left-radius: 5px;display:inline-block;color:#fff;font-size:22px;text-align:center;line-height:0.38rem;}
            input{
               flex:1;border:0;font-size:16px;text-indent: 20px;border-radius:5px;
            }
        }
        .f1{
            width:3.05rem;height:20px;background:#ccc;border-radius:5px;
        }
        .passward{position:relative;
            .move-passward{
                position:absolute;right:10px;top:6px;color:#35a9ee;font-size:16px;
            }
        }
    }
        /**********忘记密码**********/
        .login-in{
            margin-top:30px;display:flex;flex-direction:column;align-items: center;
            button{width:3.05rem;margin-bottom:.1rem;}
        }
                /**********第三方登录区域**********/
        .other-login{
            width:3.05rem;
    /*********文字及水平线**********/
            .other{
                display:flex;justify-content: space-between;width:100%;align-items: center;margin-top:30px;
            }
            span{width:26%;height:1px;background:#ccc;display:block;}
            p{font-size:14px;color:#333;}
        }
                /**********第三方软件按钮**********/
        .app-icon{
            width:3.05rem;display:flex;justify-content: center;align-items:center;margin-top:20px;
            div{width:33%;height:0.5rem;text-align:center;
                i{font-size:44px;color:#666;cursor: pointer;}
            }
        }
    }
</style>
