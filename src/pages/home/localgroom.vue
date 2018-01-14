<template>
	<div class="app-localgroom">
		<h3 class="localgroom-font">本地推荐</h3>
		<hr>
		<ul>			
				<li @click='type = "now-playing"' class="film-type" :class="{active:type == 'now-playing'}">
		        	全部
		        </li>
		        <li @click='type = "coming-soon"' class="film-type" :class="{active:type == 'coming-soon'}">
		        	景点
		        </li>
		        <li @click='type = "coming-soonn"' class="film-type" :class="{active:type == 'coming-soonn'}">
		        	一日游
		        </li>
		        <li @click='type = "coming-soonnn"' class="film-type" :class="{active:type == 'coming-soonnn'}">
		        	美食
		        </li>	
        </ul>
       		
	    <ol>
			<router-link to="/detail">
				<li class="localgroom-list" v-for="item in localgroomInfo" :key="item.id">
					<dl>
						<dt><img class="localgroom-img" :src="item.img"></dt>
						<dd>
							<p class="view">{{item.place}}</p>
							<div class="yiti">
							<p class="pingfen">{{item.grade}}</p>
							<p class="xingji">{{item.rate}}</p>
							</div>
							<div class="erti">
							<p class="describe">{{item.introduce}}</p>
							<p class="price">￥<em>{{item.price}}</em><span>元</span></p>
							</div>
						</dd>
					</dl>
				</li>
			</router-link>
	    </ol>
	</div>
	
</template>

<script>
    import bus from '../../modules/bus'
	export default{
		name:'app-localgroom',
		data(){
        	return {
        		type:'now-playing'
        	}
        },  
        computed:{
		    localgroomInfo() {
			return this.$store.state.home.localgroomInfo;
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
	.app-localgroom{
		    margin-top:.1rem;
		    background:#fff;
		    border-radius:.1rem;
	.localgroom-font{
	    	color: #212121;
	    	height: .2rem;
	    	padding-top:.05rem;
	    	padding-left: .32rem;
	    	font-size:.15rem;	    	
	                } 
	hr{height:1px;border:none;border-top:1px solid #f2f2f2;}                
	ul{
			display: flex;
			justify-content: space-around;
			white-space: nowrap;             
	li{	    		    	
	    	line-height: .2rem;
	    	font-size:12px;
	 .film-type{
	 	    width:25%;
	 }
	 &.active{
		    color: #000;
			border-bottom: 1px solid #35a9ee;
	    	  }
	       }
	    } 
	   
	}	
	@import "../../app/reset.css";	
	.localgroom-list{
			padding-left: .14rem;
			border-bottom: 1px solid #e0e0e0;	
			background:#fff;	
	}
	dt{
			float:left;
			width: 0.5rem;
	    	height: 0.5rem;
	    	background-size: cover;
	    	background-position: center;
	}
	.localgroom-img{
			width: 0.5rem;
	    	height: 0.5rem;
	}
	
	dd .view{
			margin-left: .6rem;
			margin-top: .04rem;	    
		    color: #212121;
		    font-size: .1rem;    
	}
	dd .yiti{
			display:flex;
			flex-direction: row;
	}
	dd .pingfen{
			margin-left: .1rem;		
		    color: #212121;
		    font-size: .1rem;	    
	}
	dd .xingji{
			margin-left:.2rem;		
		    color: green;
		    font-size: .1rem;	    
	}
	dd .erti{
			display:flex;
			flex-direction: row;
	}
	dd .describe{
			margin-left:.1rem;
			margin-bottom: .1rem;
		    color: #9e9e9e;	
		    font-size:1px;
	}
	dd .price{
			font-size: .04rem;
			color:red;
			margin-right:.1rem;
	}
	dd .price em{
			font-size: .16rem;
			color:red;
			padding: .04rem;
	}
	dd .price span{
		    color:red;
	}
	.more{
			display: block;
			line-height: 0.88rem;
			text-align: center;
			background: #fff;
	}
	
	
	   
</style>

