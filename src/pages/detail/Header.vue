<template>
	<div class="detail-header">
		<ul>
			<router-link to="/">
			    <li class="detail-header-left iconfont icon-fanhui"></li>
			</router-link>
				<li><span>详情</span></li>
		</ul>
	</div>
	
</template>



<script>
	
</script>

<style scoped>
	.detail-header{
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
		justify-content: center;	
	}
	span{font-size:.2rem;color:#fff;padding-top:.05rem;margin-left:1.2rem;}
	.detail-header-left{
		color:#fff;
		font-size:.3rem;
		padding-top:.1rem;
		margin-left:.2rem;
	}	
</style>