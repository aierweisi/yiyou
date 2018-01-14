<!--这是注册新账号页面-->
<template>
<div class="app-login">
    <AppHeader><p slot="middle" class="">找回密码</p></AppHeader>
    <div class="content">
        <div class="nav">
            <span :class="{'bg-color':isTel}" @click="isEmail = false;isTel=true">手机号找回</span>
            <span :class="{'bg-color':isEmail}" @click="isTel = false;isEmail=true">邮箱找回</span>
        </div>
        <!--输入框区域-->
         <div class="login1" v-if="isTel">
            <div class="tel"><i class="yo-ico">&#xe640;</i><input placeholder="请输入正确的手机号" type="text"></div>
            <div class="pattern"><i class="yo-ico">&#xe613;</i><input placeholder="请输入验证码" type="text"></div>
            <div class="message"><i class="yo-ico">&#xe63b;</i><input placeholder="请输入短信验证码" type="text"></div>   
        </div>
         <div class="login2" v-if="isEmail && !isPassword">
            <div class="tel"><i class="yo-ico">&#xe734;</i><input placeholder="请输入正确的邮箱号" type="text"></div>
            <div class="pattern"><i class="yo-ico">&#xe613;</i><input placeholder="请输入验证码" type="text"> <p class="move-passward">点击获取</p></div>
        </div>
        <!--重置密码区域-->
         <div class="login3" v-if="isPassword">
            <div class="tel"><i class="yo-ico">&#xe639;</i><input placeholder="请输入新密码" type="text"></div>
            <div class="message"><i class="yo-ico">&#xe639;</i><input placeholder="请再次输入密码" type="text"></div> 
        </div>
        <div class="reset-passward">
            <mt-button v-if="!isPassword" type="primary" @click="isPassword =!isPassword">重置密码</mt-button>
            <mt-button v-if="isPassword" type="primary" @click="isPassword =!isPassword">确定重置</mt-button>
        </div>
    </div>
</div>
    
</template>
<script>
import AppHeader from '../AppHeader'
export default {
  data(){
      return {
          isShow:'true',
          isTel:false,
          isEmail:true,
          isPassword:false
      }
  },
  components:{
      AppHeader
  }
}
</script>
<style lang="scss" scoped>
    .app-login{height:100%;background:#fff;}
    .content{
        display:flex;flex-direction: column;align-items: center;background:#fff;padding-top:60px;
         .nav{
        width:3.05rem;height:0.4rem;border-radius:5px;border:1px solid #35a9ee;display:flex;align-items:center;
                span{text-align:center;line-height:0.4rem;width:50%;display: inline-block;height:0.4rem;border-radius:5px;font-size:16px;transition: 0.3s;}
                .bg-color{
                    background:#35a9ee;color:#fff;
                }
        }
         .login1,.login2,.login3{
             width:3.05rem;margin-top:35px;
        .pattern,.tel,.message{
            width:3.05rem;border:1px solid #35a9ee;border-radius:5px;height:0.38rem;display:flex;margin-top:10px;
            i{width:0.5rem;height:0.36rem;background:#35a9ee;border-bottom-left-radius: 5px;border-top-left-radius: 5px;display:inline-block;color:#fff;font-size:24px;text-align:center;line-height:0.38rem;}
            input{
               flex:1;border:0;color:#ccc;font-size:16px;text-indent: 20px;border-radius:5px;
            }
        }
        .pattern{
            position:relative;
            i{font-size:32px;}
             .move-passward{
                position:absolute;right:10px;top:6px;color:#35a9ee;font-size:16px;
            }
        }
        
    }
        .reset-passward{
            width:3.05rem;text-align:center;padding-top:30px;
            button{width:3.05rem;}
        }
    }
</style>
