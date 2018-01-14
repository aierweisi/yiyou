<template>
    <div class="app-message">
        <AppHeader><p class="message" slot="middle">消息</p><div class="right-section" slot="right">全部已读</div></AppHeader>
        <div class="content">
            <div class="nav">
                <span>通知</span>
                <span>广播</span>
                <span>私信</span>                
            </div>
            <AppMessageSection></AppMessageSection>
        </div>
    </div>
</template>
<script>
import AppHeader from '../AppHeader'
import AppMessageSection from "./message/AppMessageSection"
export default {
  components:{
    AppHeader,AppMessageSection   
  }
}
</script>
<style lang="scss" scoped>
    .nav{
        height:90px;width:100%;background:#fff;display:flex;justify-content: space-around;align-items: center;padding-top:20px;
        span{
            display:block;width:50px;height:30px;text-align:center;line-height:30px;border-bottom:1px solid #000;
        }
    }
</style>
