<template>
	<div class="app-header">
		<div class="header-left city-position">
			<router-link to="/cityChange">
			    <div class="header-city">
			        <span>北京</span>
			        <i class="fa fa-angle-down"></i>
			    </div>
		    </router-link>
		    <router-link to="/list/hotSearch">
				<div class="header-title">
					输入目的地/景点/酒店等
				</div>
		    </router-link>
		
		</div>
		
		<div class="header-right">
			<i class="fa fa-envelope-o"></i>
		</div>
	</div>
</template>
<script>
	export default{
		name:'app-header',
	}
</script>


<style  lang="scss" scoped>
	.app-header{
		height:.5rem;
		width:100%;
		/*background: #00bcd4;*/
		overflow: hidden;
		position:fixed;	
		z-index:2000;
		text-overflow: ellipsis;
        white-space: nowrap;
        
    
	.header-city{
		font-size: .18rem;
		overflow:hidden;
		display:inline-block;
		text-overflow: ellipsis;	
		white-space:nowrap;
		padding-top: .16rem;
		padding-left: .2rem;
		color:black;
		}
	.header-title {
		position: absolute;
		left: .8rem;
		right: .6rem;
		top: .12rem;
		line-height: .3rem;
		background: #fff;
		border-radius: .2rem;
		text-indent: .1rem;
		color: #ccc;
		display: inline-block;
		overflow: hidden;
	}
	.header-right{
		white-space: nowrap;
		float:right;
		margin-top:-.3rem;
		margin-right:.25rem;
		font-size:.22rem;
		
	}
	}	
</style>