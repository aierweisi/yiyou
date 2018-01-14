<template>
	<div class="order-header">
		<ul>
			<li class="order-header-left iconfont icon-fanhui" @click="handleBackClick"></li>  
			<li><h1 class="order-title">订单填写</h1></li>
			<li class="order-login">登录</li>
		</ul>	
		
	</div>
</template>

<script>
export default {
	methods: {
			handleBackClick:function(){
				this.$router.go(-1);
			}
		}
    }
</script>

<style scoped>
	.order-header{
		height:.7rem;
		background:#19d1f3;			
	}
	ul{	
		display:flex;
		flex:1;
		justify-content: space-around;
		padding-top:.07rem;
	}
	li{
		display:flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;	
	}
	h1{font-size:.3rem;color:#fff;}
	.order-header-left{
		color:#fff;
		font-size:.3rem;
		padding-top:.05rem;
	}
	.order-title{
	     font-size:.2rem;
	}
	.order-login{
		color:#fff;
		font-size:.18rem;
		
	}

	
</style>