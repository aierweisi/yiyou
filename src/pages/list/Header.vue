<template>
 	<header class="header">
 		<div class="header-left iconfont icon-fanhui" @click="handleBackClick"></div>
 		<div class="header-title">
 			<input type="text"  @focus="handleFocus"   placeholder="输入城市\景点\游玩主题"/>
 		</div>
 		<div class="header-right">
 			<a class="header-search">搜索</a>
 		</div>
 	</header>
</template>
<script>
	
	export default {
		methods: {
			handleFocus:function(){
				this.$router.push("/list/hotSearch")
			},
			handleBackClick:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	
	.header {
		height: .5rem;
		background: #19d1f3;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .5rem;
		font-size: .2rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .55rem;
		right: .8rem;
		top: .08rem;
	}
	.header-title input{
		width:100%;
		border:none;
		line-height: .33rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
	}
	.header-right {
		float: right;
		line-height: .5rem;
		text-align: center;
		padding:0 .14rem;
	}
	.header-search {
		display: inline-block;
    	width: .54rem;
		color: #fff;
	}
</style>
