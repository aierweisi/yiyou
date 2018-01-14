<template>
	<div class="app-footer">
		<ul class="sort_list">
			<li class="app-footer-left iconfont icon-shouye">
			<span>首页</span>
		    </li>
		    <li class="app-footer-left iconfont icon-mudedi">
			<span>目的地</span>
		    </li>
		    <li class="app-footer-left iconfont icon-fuwu">
			<span>服务</span>
		    </li>
		    <li class="app-footer-left iconfont icon-wode">
			<span>我的</span>
		    </li>
		</ul>
	
	</div>	
</template>



<script>
	export default{
		
	}
	
</script>


<style lang="scss" scoped >
	.app-footer{
				position: fixed;
				bottom:0;
				left:0;
				width:100%;
				height: .6rem;		
				background:#cccccc;
		        z-index: 1000;
		        opacity: 1;
    .sort_list {
			    overflow: hidden;
			    width: 100%;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: -moz-box;
			    display: -moz-flex;
			    display: -ms-flexbox;
			    display: flex;
			    font-size: 12px;
			    color: #fff;
			    background-color:#cccccc;
			    opacity: 1;
	li {
		display:flex;
		flex:1;
		color: #666666;
		flex-direction: column;
		text-align: center;
		font-size:.29rem;
		padding-top:.05rem;
		span{font-size:.045rem;}	
	        }	        
        }
	}
	
</style>