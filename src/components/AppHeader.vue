<template>
  <div class="header">
      <i class="yo-ico" @click="turnout">&#xe62a;</i>
      <slot name="middle"></slot>
      <div class="clear"><slot name="right"></slot></div>
        
  </div>
</template>
<script>

export default {
  components:{
  } ,
  methods:{
     turnout(){
              this.$router.go(-1)
          }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        width:100%;height:50px;background:#fff;display:flex;align-items:center;padding:0 20px;justify-content: space-between;
        .yo-ico{color:#000;font-size:22px;font-weight:bold;}
        p{font-size:16px;color:#666;font-weight:550;}
       .right-section{font-size:12px;color:#000;}
    }
</style>

