<template>
	<div class="app-postype">
		<h3 class="postype-font">目的地推荐</h3>
		<hr>		
		           <ul>			
						<li @click='type = "now-playing"' class="film-type" :class="{active:type == 'now-playing'}">
				        	热推
				        </li>
				        <li @click='type = "coming-soon"' class="film-type" :class="{active:type == 'coming-soon'}">
				        	出境游
				        </li>
				        <li @click='type = "coming-soonn"' class="film-type" :class="{active:type == 'coming-soonn'}">
				        	国内游
				        </li>
				        <li @click='type = "coming-soonnn"' class="film-type" :class="{active:type == 'coming-soonnn'}">
				        	周边游
				        </li>	
                    </ul>
        <div class="city-choose">
        	<ul>
	        	<li class="city-qiehuan">厦门</li>
	        	<li class="city-qiehuan">上海</li>
	        	<li class="city-qiehuan">南京</li>
	        	<li class="city-qiehuan">杭州</li>
	        	<li class="city-qiehuan">青岛</li>
        	</ul>
        </div>
        <div id="wrapper">
			<div id="scroll">
				<p v-if="showLoading">正在加载</p>
	            <ol>
					<router-link to="/header">
						<li class="postype-list" v-for="item in postypeInfo" :key="item.id">
							<dl>
								<dt><img class="postype-img" :src="item.img"></dt>
								<dd>
									<p class="postypeview">{{item.place}}</p>
									<div class="postypeyiti">
									<p class="postypepingfen">{{item.grade}}</p>
									<p class="postypexingji">{{item.rate}}</p>
									</div>
									<div class="postypeerti">
									<p class="postypedescribe">{{item.introduce}}</p>
									<p class="postypeprice">￥<em>{{item.price}}</em><span>元</span></p>
									</div>
								</dd>
							</dl>
						</li>
					</router-link>
	            </ol>
	        </div>
	    </div>
	</div>
	
</template>

<script>
    import bus from '../../modules/bus';
    import { mapState } from 'vuex'
	require('../../iscroll/iscroll-probe.js');
	export default{
		name:'app-postype',
		data(){
        	return {
        		type:'now-playing',
        		showLoading : false
        	}
        },
        computed:mapState({
        	postypeInfo(){
        		return this.$store.state.home.postypeInfo;
        	},
			postypeInfo(state) {
				return state.home.postypeInfo;
			}
		}), 
		mounted() {
			this.myScroll = new IScroll('#wrapper', {probeType:0, mouseWheel:true}) 
			this.myScroll.on('scroll', () => {
				if(this.myScroll.y > 30) {
					this.showLoading = true;
						this.$store.commit("refreshInfo");
				}
			})
		},
		updated() {
				this.showLoading = false;
				this.myScroll.refresh();
		},
        watch:{
        	type(){
        		bus.$emit('change-type',this.type)
        	}
        }   
	}
</script>

<style lang="scss" scoped>
	.app-postype{
		     width:100%;
       	     height:1.1rem;
       	     background:#fff;
       	     border-radius: .1rem;
       	     margin-top:.5em;
	.postype-font{	
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
	#wrapper {
		height: 300px;
		overflow: hidden;
	}
	.city-choose{
     	display:flex;
     	flex:1;
     	margin-left:.5rem;
     	flex-direction: row;
     	padding-top:.1rem;
     	}
    .city-qiehuan{
    	margin-left:.2rem;
    	border:1px solid #9E9E9E;
    	border-radius: .05rem;
    	width:2.9em;
    	text-align: center;
    }
	.postype-list{
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
	.postype-img{
			width: 0.5rem;
	    	height: 0.5rem;
	}
	dd .postypeview{
			margin-left: .6rem;
			margin-top: .04rem;	    
		    color: #212121;
		    font-size: .1rem;    
	}
	dd .postypeyiti{
			display:flex;
			flex-direction: row;
	}
	dd .postypepingfen{
			margin-left: .1rem;		
		    color: #212121;
		    font-size: .1rem;	    
	}
	dd .postypexingji{
			margin-left:.2rem;		
		    color: green;
		    font-size: .1rem;	    
	}
	dd .postypeerti{
			display:flex;
			flex-direction: row;
	}
	dd .postypedescribe{
			margin-left:.1rem;
			margin-bottom: .1rem;
		    color: #9e9e9e;	
		    font-size:1px;
	}
	dd .postypeprice{
		    padding-right:.15rem;
			font-size: .04rem;
			color:red;
	}
	dd .postypeprice em{
			font-size: .16rem;
			color:red;
			padding: .04rem;
	}
	dd .postypeprice span{
		    color:red;
	}
	.more{
			display: block;
			line-height: 0.88rem;
			text-align: center;
			background: #fff;
	}	   
</style>

