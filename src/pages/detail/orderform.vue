<template>
	<div class="orderform">
		<div class="orderform-list">
			<ul>			
				<li @click='type = "now-playing"' class="film-type" :class="{active:type == 'now-playing'}">
		        	亮点
		        </li>
		        <li @click='type = "coming-soon"' class="film-type" :class="{active:type == 'coming-soon'}">
		        	点评
		        </li>
		        <li @click='type = "coming-soonn"' class="film-type" :class="{active:type == 'coming-soonn'}">
		        	交通
		        </li>
		        <li @click='type = "coming-soonnn"' class="film-type" :class="{active:type == 'coming-soonnn'}">
		        	须知
		        </li>	
	        </ul>
			
			<div class="orderform-list-detail">
				<p>小编推荐</p>
				<span>概述北京故宫，又名紫禁城，位于北京市中心，今天人
					们称它为故宫，意为过去的皇宫。无与伦比的古代建筑杰作
					，世界现存最大、最完整的古建筑群。被誉为世界五大宫之
					首（北京故宫、法国凡尔赛宫、英国白金汉宫、美国白宫、
					俄罗斯克里姆林宫）。</span>
				
			</div>
		</div>

		<div class="orderform-footer">
			<div class="orderform-product-price">
				<span class="orderform-custom">咨询客服</span>
			</div>
			<router-link to="/order">
			    <span @:click="orderform-submit" class="orderform-submit">订票</span>
		    </router-link>
		</div>	
	</div>
</template>

<script>
    import bus from '../../modules/bus'
	export default {
	props:['datas','orderform-submit'],
	data(){
        	return {
        		type:'now-playing'
        	}
        },
        computed:{
        	navInfo(){
        		return this.$store.state.strategy.navInfo;
        	}
        },       
        watch:{
        	type(){
        		bus.$emit('change-type',this.type)
        	}
        }   
}
</script>

<style lang="scss" scoped>
    .orderform-list{
    	    height:2.5rem;
    ul{
			display: flex;
			justify-content: space-around;
			white-space: nowrap; 
			padding-top:.1rem;           
	li{	    		    	
	    	line-height: .3rem;
	    	font-size:20px;
	 .film-type{
	 	    width:25%;
	 }
	 &.active{
		    color: #000;
			border-bottom: 1px solid #19d1f3;
	    	    }
	        }      
	    }
	.orderform-list-detail{
		margin-left:.3rem;
		p{
			margin-top:.3rem;
			margin-left:.03rem;
			color:darkgray;
		    }
		span{
			line-height:.2rem;
			margin-left:.3rem;
			
		    }    
	    }    	
	}
	@import '../../app/reset.css';
   .orderform{
   	    margin-top:.1rem;
   	    background:#fff;
   	    
   }
	.orderform-footer{
		width: 100%;
		height: .5rem;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.orderform-product-price{
		float: left;
		width: 50%;
		line-height: .5rem;
		background: #fff;
	}
	.orderform-submit{
		width: 50%;
		height: .5rem;
		float: right;
		line-height: .5rem;
		display: block;
		color: #fff;
		text-align: center;
		font: normal .16rem/.5rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
		background: #ff9800;
	}

	.orderform-custom{
		width:100%;
		height: .5rem;
		float: left;
		line-height: .4rem;
		display: block;
		color: #fff;
		text-align: center;
		font: normal .16rem/.5rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
		background: gray;
		
	}

	
	
	

	
</style>