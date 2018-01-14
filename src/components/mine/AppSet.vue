<template>
<div class="set-box">
  <!--这是个人设置页-->
    <AppHeader><P slot="middle">设置</P></AppHeader>
    <div class="content">
      <p><span>账号绑定与设置</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>常用信息设置</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>消息设置</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>清除缓存</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>常见问题与反馈</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>推荐给好友</span><i class="yo-ico">&#xf07f;</i></p>
      <p><span>关于我们</span><i class="yo-ico">&#xf07f;</i></p> 
      <div class="btn-exit"><mt-button type="primary" >退出当前账号</mt-button></div>
    </div>
</div>
    
</template>
<script>
import AppHeader from '../AppHeader'
export default {
  components:{
      AppHeader
  }
}
</script>
<style lang="scss" scoped>
.set-box{background:#fff;height:100%;}
  .content{
    padding-top:60px;
    p{width:100%;height:50px;padding:10px 26px;background:#fff;display:flex;justify-content: space-between;}
    .btn-exit{
      text-align:center;width:100%;margin-top:30px;
    }
  }
</style>
