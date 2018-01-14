<template>
	<div>
		<div v-if="historysType" class="history">
			<div class="history-top">
		 		搜索历史
		 		<span class="delete" @click="handleDeleteClick">清除</span>
		 	</div>
		 	<div class="history-body">
		 		<div :style="{width: widths + 'rem'}" class="kong">
		 			<span v-for="item in historys"class="history-item">{{item}}</span>
		 		</div>
		 	</div>
		</div>
	 	<div class="search-top">
	 		热门搜索
	 		<span class="refresh"  @click="handleCutClick"><i class="icon-shuaxin iconfont"></i>换一换</span>
	 	</div>
	 	<div class="search-body">
	 		<div class="view">
	 			<div class="view-left">
	 				<div class="view-left-connent">
	 					<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png">
	 				</div>
	 			</div>
	 			<div class="view-right">
	 				<div class="view-right-connent" :style="{top: spotTop + 'rem'}">
		 				<span v-for="item in listView"class="view-spot" @click="handleClick">{{item.spot}}</span>
	 				</div>
	 			</div>
	 		</div>
	 		<div class="citys">
	 			<div class="citys-left">
	 				<div class="citys-left-connent">
	 					<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png">
	 				</div>
	 			</div>
	 			<div class="citys-right">
	 				<div class="citys-right-connent" :style="{top: cityTop + 'rem'}">
		 				<span v-for="item in listCitys" class="city" @click="handleClick">{{item.city}}</span>
	 				</div>
	 			</div>
	 		</div>
	 	</div>
	 	<div class="nearViwe">
			<div class="nearViwe-connent">
				搜索身边的景点
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			listCitys() {
				return this.$store.state.list.listCitys
			},
			
			listView() {
				return this.$store.state.list.listView
			}
		},
		
		data: function(){
			return {
				spotTop: 0,
				cityTop:0,
				historys:[],
				historysType:false,
				widths: 0
			}
		},

		methods:{
			handleCutClick: function() {
				this.spotTop -= 1.71;
				if (this.spotTop == -8.55){
					this.spotTop = 0;
				}
				this.cityTop -= .86;
				if (this.cityTop == -Math.ceil(this.listCitys.length/4)*0.86){
					this.cityTop = 0;
				}
			},
			handleClick:function(e){
				var history = e.target.innerHTML;
				if(this.historys.indexOf(history) == -1){
					this.historys.unshift(history);
					this.historysType =true;
					this.widths += e.target.offsetWidth;
				}
			},
			handleDeleteClick:function(){
				this.historys.splice(0);
				this.historysType = false;
			}
		}
	}
</script>

<style scoped>
	.search-top,.history .history-top{
		height: .4rem;
    	line-height: .4rem;
    	padding: 0 .2rem;
    	background-color: #f0f5f6;
    	border-bottom:1px solid #dce5e7;
	}
	.search-top .refresh,.history .history-top .delete{
		float:right;
		font-size: .16rem;
   		color: #00afc7;
	}
	.search-top .refresh i{
		font-size: .16rem;
		padding:0 .1rem;
	}
	.history .history-body{
		height: .6rem;
		width:100%;
	    overflow-y: hidden;
	    background-color: #fff;
	    border-bottom: 1px solid #dce5e7;
	}
	.kong{
		margin-top: .1rem;
	}
	.history .history-body .history-item{
		max-width: 2rem;
	    height: .3rem;
	    font-size: .16rem;
	    color: #333;
	    background-color: #fff;
	    line-height: .3rem;
	    padding: 0 .15rem;
	    text-align: center;
	    border: 1px solid #c9cccd;
	    border-radius: 3px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    margin-left: .2rem;
	    display:block;
	    float: left;
	}
	
	.search-body .view{
		background-color: #fff;
		height: .9rem;
		border-bottom:1px solid #dce5e7;
	}
	.search-body .view .view-left,.citys .citys-left{
		position: relative;
		float: left;
		width: 0.62rem;
		height:100%;
	}
	.view .view-left .view-left-connent,.citys .citys-left .citys-left-connent{
		position: absolute;
		text-align: center;
		width: .62rem;
		height: 40%;
		top: 20%;
		border-right: 1px solid #dce5e7;
	}
	.view .view-left .view-left-connent img,.citys .citys-left .citys-left-connent img{
		width: .2rem;
    	height: .2rem;
    	position: relative;
    	top: 40%;
    	margin-top: -.3rem;
	}
	
	.search-body .view .view-right,.citys .citys-right{
		height:100%;
		position: relative;
		overflow: hidden;
	}
	.view-right .view-right-connent,.citys-right .citys-right-connent{
		position: absolute;
	}
	.view-right .view-right-connent .view-spot,.citys-right .citys-right-connent .city{
		float:left;
		height: .3rem;
    	line-height: .26rem;
    	text-align: center;
		display: block;
		margin:.08rem 0;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.view-right .view-right-connent .view-spot{
		max-width: 2rem;
		padding:  .1rem;
		
	}
	.search-body .citys{
		height: .5rem;
		background-color: #fff;
		border-bottom:1px solid #dce5e7;
	}
	.citys-right .citys-right-connent .city{
    	width: 24.5%;
	}
	
	.nearViwe{
		background-color: #fff;
		padding: .05rem;
		border-bottom:1px solid #dce5e7;
	}
	.nearViwe .nearViwe-connent{
	    line-height: .32rem;
	    text-align: center;
	    font-size: .16rem;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #dde1e3;
	    border-radius: 2px;
	}
</style>
