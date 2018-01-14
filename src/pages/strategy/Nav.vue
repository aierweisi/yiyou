<template>
	<div class="strategy-nav">
			<ul>			
				<li @click='type = "now-playing"' class="nav-type" :class="{active:type == 'now-playing'}">
		        	推荐
		        </li>
		        <li @click='type = "coming-soon"' class="nav-type" :class="{active:type == 'coming-soon'}">
		        	主题
		        </li>
		        <li @click='type = "coming-soonn"' class="nav-type" :class="{active:type == 'coming-soonn'}">
		        	中国
		        </li>
		        <li @click='type = "coming-soonnn"' class="nav-type" :class="{active:type == 'coming-soonnn'}">
		        	外国
		        </li>	
	        </ul>
        
            <div class="strategy-nav-list">
            	<p class="title">旅游景点</p>
		            <ol>
						<li class="nav-list" v-for="item in navInfo" :key="item.id">									
							<dl>
								<dt><img class="nav-img" :src="item.img"></dt>
								<dd>
									<p class="introduce">{{item.introduce}}</p>
								</dd>
					        </dl>	
						</li>
		            </ol>
		          
            </div>
	</div>
</template>

<script>
	import bus from '../../modules/bus'
	export default{
		name:'strategy-nav',
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
	ul{
			display: flex;
			justify-content: space-around;
			white-space: nowrap; 
			padding-top:.1rem;            
	li{	    		    	
	    	line-height: .2rem;
	    	font-size:15px;
	 .nav-type{
	 	    width:25%;
	 }
	 &.active{
		    color: #000;
			border-bottom: 1px solid #19d1f3;
	    	}
	    }      
	}	
@import '../../app/reset.css';
    .title{padding:.2rem;font-size:.2rem;font-weight: 800;}
    dd{padding-top:.1rem;padding-bottom:.1rem;}
    .nav-img{width:100%;height:1.5rem;}
    .introduce{margin-left:.1rem;}
</style>