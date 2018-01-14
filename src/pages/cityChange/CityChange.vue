<template>
	<div>
		<div class="CityChange-header">
			<a class="iconfont icon-fanhui CityChange-fanhui" @click="handleBackClick"></a>
				<div class="foreignOrChina">
					<div class="foc-connent">
					<a class="CityChange-city" :class="{currentCity:move}" @click="OnChange1">国内</a>
					<a class="CityChange-city" :class="{currentCity:!move}" @click="OnChange2">国外</a>
					</div>
				</div>
		</div>
		<div>
			<div class="CityChange-main">
				<div class="CityChange-search">
					<input @focus="handleFocus" @blur="handleBlur" :style="{textAlign:textalign}" class="input-city" placeholder="请输入城市" />
				</div>
				<div class="your-position">
					<div class="CityChange-main-title">您的位置</div>
					<div class="your-position-now">
						<a class="your-position-now-name">北京</a>
					</div>
				</div>
				<div class="your-position">
					<div class="CityChange-main-title">热门城市</div>
					<div class="your-position-now">
						<div class="your-position-now-name" v-for="item in city">
							<a>{{item}}</a>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="item in cities" :ref="item.text" class="cityPosition">
						<div class="CityChange-main-title">{{item.text}}</div>
						<ul>
							<li v-for="item in item.cityName" class="city-detail">{{item}}</li>
						</ul>
					</li>
				</ul>
				<ul class="letterPosition" @touchstart="handleTouchstart">
					<li v-for="item in cities" :id="item.text" class="statirs">
						{{item.text}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			scrollTop: "",
			fixheight: 44,
			move: true,
			textalign:"center",
			china: [
				"北京","大连","哈尔滨","石家庄","南宁","济南","秀峰","秀峰"
			],
			foreign: [
				"夏威夷","罗马","泰国","俄罗斯","伦敦","波兰","休斯顿","马来西亚"
			],
			city:[],
			isForeign:false
		}
	},
	
	computed: {
    	cities () {
    		if(!this.isForeign){
    			return this.$store.state.cityChange.ChinaCityName;
    		}else {
    			return this.$store.state.cityChange.ForgienCityName;
    		}
    	}
    },
	 
	methods:{
		handleBackClick:function(){
			this.$router.go(-1);
		},
		handleFocus:function(){
			this.textalign="left";
		},
		handleBlur:function(){
			this.textalign="center";
		},
		OnChange1:function() {
			this.move = true;
			this.isForeign = false;
			this.city  = this.china;
			document.documentElement.scrollTop = 0;
		},
		OnChange2:function() {
			this.city  = this.foreign;
			this.move = false;
			this.isForeign = true;
			document.documentElement.scrollTop = 0;
		},
		
		handleTouchstart:function(e){
			e.preventDefault();
			var id = e.target.id;
			console.log(this.$refs[id][0].offsetTop)
			this.scrollTop = this.$refs[id][0].offsetTop;
			document.documentElement.scrollTop = this.scrollTop-this.fixheight;
			
			this.ulTop = e.currentTarget.offsetTop;
			this.ulHeight = e.currentTarget.offsetHeight;
			this.citiesLength = this.cities.length;
			this.num = parseInt(this.ulHeight/this.citiesLength);
			document.addEventListener("touchmove",this.handleTouchmover,false);
			document.addEventListener("touchend",this.handleTouchend,false)
		},		
		
		handleTouchmover:function(e){
			var mousePosition = e.touches[0].clientY;
			var gap = Math.floor((mousePosition-this.ulTop)/this.num);
			console.log(gap);
			if(gap>=this.citiesLength){
				gap=this.citiesLength-1
			}else if(gap<0){
				gap=0
			}
			var id = this.cities[gap].text;
			var scrollTop = this.$refs[id][0].offsetTop;
			if(gap == 0  && mousePosition < this.ulTop){
				document.documentElement.scrollTop = 0;
			}else{
				document.documentElement.scrollTop =scrollTop-this.fixheight;
			}
		},
		
		handleTouchend:function(){
			document.removeEventListener("touchmove",this.handleTouchmover);
			document.removeEventListener("touchend",this.handleTouchend)
		}
		
	},
	
	created: function(){
		this.city  = this.china;
		this.Aletter = this.Cletter;
	},
	
	mounted() {
		if(this.$store.getters.CityChangeGetData){
			this.$store.dispatch("getCityName");
		}
	},
		
	updated(){
		
	}	
}
</script>


<style scoped>
@import '../../app/reset.css';
	.CityChange-header {
		position: fixed;
	    top: 0;
	    left: 0;
	    height: .5rem;
	    width: 100%;
	    background: #19d1f3;
	    color: #fff;
	    z-index: 100;
	}	
	.CityChange-fanhui {
		display: inline-block;
		position: absolute;
		z-index:10;
	    width: .1rem;
	    line-height: .5rem;
	    padding: 0 .2rem;
	    font-size: .24rem;
	    color: #fff;
	}	
	.foreignOrChina {
		position: absolute;
		text-align: center;
		top:.1rem;
		width:100%;
	}
	.foc-connent{
		border: .02rem solid #fff;
		border-radius: .05rem;
		display: inline-block;
	}
	.CityChange-city {
		display: inline-block;
		width: 1rem;
		height: .27rem;
		padding-top:.04rem;
		text-align: center;
		color: #fff;
	}	
	.currentCity {
		background: #fff;
		color: #00afc7;
	}	
	.CityChange-main {
		margin-top: .5rem;
	}
	
	.CityChange-search {
		height: .45rem;
	    width: 100%;
	    background: #19d1f3;
	    color: #fff;
	}	
	.input-city {
		margin-left: .1rem;
		width: 95%;
		height: 85%;
		border: 0;
		border-radius: .05rem;
		font-size: .15rem;	
	}	
	.CityChange-main-title {
		line-height: .25rem;
	    padding-left: .15rem;
	    color: #616161;
	    font-size: .1rem;
	    border-bottom:1px solid darkgray;
	    background: lightgray;
	}
	.your-position-now-name {
		display: inline-block;
		box-sizing: border-box;
		width:33.33%;
		padding: .08rem .1rem 0 .1rem;
	}
	.your-position-now {
		padding-top: .04rem;
    	padding-bottom: .06rem;
    	padding-left: .1rem;
    	padding-right: .15rem;
    	background-color: #fff;
	}	
	.your-position-now-name a{
		display: block;
		width:100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 28px;
		text-align: center;
		border-radius: .06rem;
		border: .02rem solid #c9cccd;
	}
	.letterPosition {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		position: fixed;
		right: 0;
		top: 20%;
		height:60%;
		color: #00AFC7;
	}	
	.statirs {
		height:.32rem;
		font-size:.1rem;
	}	
	.cityPosition {
		background: #fff;
		border-bottom: .05px solid darkgray;
	}	
	.city-detail {
		line-height: .46rem;
	    padding-left: .1rem;
	    font-size: .13rem;
	    color: #212121;
	    border-bottom: .01rem solid darkgray;
	}
</style>