<template>
	<div class="strategy-header">
		<ul>
			<router-link to="/">
			    <li class="strategy-header-left iconfont icon-jiantou"></li>
			</router-link>
				<li><span>找攻略</span></li>
				<li class="strategy-header-right iconfont icon-sousuo"></li>
		</ul>
	</div>
</template>

<script>
	
</script>
<style scoped>
	.strategy-header{
		height:.7rem;
		background:#19d1f3;			
	}
	ul{	
		display:flex;
		flex:1;
		justify-content: space-around;
		padding-top:.1rem;
	}
	li{
		display:flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;	
	}
	span{font-size:.3rem;color:#fff;padding-top:.05rem;}
	.strategy-header-left{
		color:#fff;
		font-size:.3rem;
		padding-top:.1rem;
	}
	.strategy-header-right{
		color:#fff;
		font-size:.3rem;
		padding-top:.08rem;
	}
</style>