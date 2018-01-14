<template>
	<div class="hotel-header">
		<ul>
			<router-link to="/">
			    <li class="strategy-header-left iconfont icon-jiantou"></li>
			</router-link>
				<li><span>酒店</span></li>	
		</ul>
	</div>
</template>

<script>
	
</script>
<style scoped>
	.hotel-header{
		height:.7rem;
		background:#19d1f3;			
	}
	ul{	
		display:flex;
		flex:1;
		padding-top:.1rem;
	}
	li{
		display:flex;
		flex-direction: row;
		align-items: center;		
	}
	span{font-size:.3rem;color:#fff;padding-top:.05rem;padding-left:1rem;}
	.strategy-header-left{
		color:#fff;
		font-size:.3rem;
		padding-top:.1rem;
		padding-left:.3rem;
	}
	
</style>