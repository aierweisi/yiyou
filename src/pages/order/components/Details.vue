<template>
	<div>
		<div class="order-main">
			<form action="">
				<div class="order-info-outer">
					<div class="order-info-left">
						<div class="order-info-main">
							<h2 class="order-info-title" ref="title">【全天一日游】故宫博物院一日游</h2>
							<ul class="order-info-taglist">
								<li class="order-info-tagitem">
									<i class="order-info-tagicon iconfont icon-cu"></i>
									2017-12-22促销
								</li>
								<li class="order-info-tagitem">
									<i class="order-info-tagicon iconfont icon-hui"></i>
									优惠
								</li>
								<li class="order-info-tagitem">
									<i class="order-info-tagicon iconfont icon-ziyuan"></i>
									团购
								</li>
							</ul>
							
						</div>
					</div>
					<div class="order-info-right">
						<span class="pre-money">￥<em class="money">{{UnitPrice}}</em></span>
						<em>/张</em>
						<a href="" class="needknow">预定须知</a>
					</div>
				</div>
				<div class="order-count-box">
					<div class="order-number-count">
						<label class="order-field">购买数量</label>
						<span class="order-limit-note">
                            <span id="order-limit-desc">最多买5张</span>
                            <span style="display:none" id="order-limit-phoneiddesc">每个身份证限购1张</span>
                    	</span>
                    	<div class="order-change">
                    		<span class="order-num-reduce" @click="handleClickReduce">-</span>
                    		<input type="text" class="order-number" v-model="num">
                    		<span class="order-num-add" @click="handleClickAdd">+</span>
                    	</div>
					</div>
				</div>
				<div class="traveller-info-container">
					<div>
						<div class="tourist-group">
							<div class=tourist-row>
								<label for="" class="statement">游客</label>
								<input type="text" class="tourist-info info2" placeholder="游客姓名">
							</div>
							<div class=tourist-row>
								<label for="" class="statement">手机号</label>
								<span class="order-code">+86></span>
							</div>
							<div class=tourist-row>
								<label for="" class="statement">身份证</label>
								<input type="text" class="tourist-info info2" placeholder="请填写正确身份证号码">
							</div>
						</div>
					</div>
					<div v-for="item in person" :key="item">
						<div class="tourist-group">
							<div class=tourist-row>
								<label for="" class="statement">游客<span>{{item}}</span></label>
								<input type="text" class="tourist-info info2" placeholder="游客姓名">
							</div>
							<div class=tourist-row>
								<label for="" class="statement">身份证</label>
								<input type="text" class="tourist-info info2" placeholder="请填写正确身份证号码">
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
 	data(){
 		return {
 			num:1,
	 		person:[],
	 		UnitPrice:60
 		}
 	},
	methods:{
	 	handleClickAdd:function(){
	 		if(this.num < 5){
	 			this.num++;
	 			this.person.push(this.num);
	 			this.TotalPrice();
	 		}
	 	},

	 	handleClickReduce:function(){
	 		if(this.num > 1){
	 			this.num--;
	 			this.person.pop(this.datas);
	 			this.TotalPrice();
	 		}
	 	},

	 	TotalPrice:function(){
			const m =this.UnitPrice * this.num;
	 		var datas = {m:m,a:this.num,b:this.UnitPrice};
			this.$emit("change",datas);
		}	
	},

	mounted(){
		this.TotalPrice();
	}
}
</script>

<style scoped>
@import '../../../app/reset.css';
	.order-main{
		flex: 1;
		overflow: auto;
		margin-bottom:1rem;
	}
	.order-info-outer{
		position: relative;
	    overflow: hidden;
	    min-height: 1.1rem;
	    padding: .05rem .2rem 0.05rem .2rem;
	    background: #fff;
	}
	.order-info-left{
		margin-right: 1.9rem;
    	float: left;
	}
	.order-info-right{
		position: absolute;
	    right: .2rem;
	    top: .24rem;
	    width: 1.8rem;
	    text-align: right;
	    float: right;
	    height: 1rem;
	}
	.order-info-title{
	    color: #212121;
	    font-size: .15rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	    
	}

	.order-info-taglist{
		margin-left: -.2rem;
    	overflow: hidden;
    	display:flex;
    	flex-direction: row;
    	justify-content: space-around;
    	white-space: nowrap;
    	margin-top:.3rem;
   
	}

	.order-info-tagitem{
		float: left;
	    line-height: .2rem;
	    margin-left: .2rem;
	    color: #616161;
	    font-size: .15rem;
	    display:flex;
	}
	.order-info-tagicon{
		width: .24rem;
		height: .24rem;
		color:forestgreen;
	}
	.pre-money{
		color:#ff8300
	}
	.money{
		font-size: .2rem;
	}
	.needknow{
		display: block;
		margin-top: .05rem;
	    line-height: .05rem;
	    color: #00bcd4;
	    font-size: .15rem;
	}
	.order-count-box{
		height: 0;
		padding-bottom: 12%;
		margin: .1rem 0;
		background: #fff;
	}
	.order-number-count{
		padding:.05rem .1rem .3rem .2rem;
		height: .1rem;
		line-height: .3rem;

	}
	.order-field{
		float: left;
		width: 1.2rem;
	    color: #616161;
	    font-size: .15rem;
	    line-height: .3rem;
	}
	.order-limit-note{
		float: left;
	    color: #ccc;
	    font-size: .15rem;
	    
	}
	.order-change{
		float: right;
	}
	.order-num-reduce,.order-num-add{
		width: .2rem;
		height: .2rem;
		line-height: .2rem;
		color: #fff;
		text-align: center;
		display: block;
	    margin: .05rem;
	    font-size: .1rem;
	}
	.order-change{
		border:.02rem solid #c7ced4;
	}
	.order-num-reduce{
		float: left;
		background: #f0f0f0;

	}
	.order-num-add{
		float: right;
	    background-color: #00afc7;

	}
	.order-number{
		width: .24rem;
		height: .24rem;
		line-height: .15rem;
		text-align: center;
		display: block;
		float: left;
		border: 0;
	}
	.tourist-group{
		margin: .1rem 0;
		background: #fff;
		
	}
	.order-code{
		float: left;
		width: .6rem;
		height: .4rem;
		display: inline-block;
		
		
	}	
	.tourist-row{
		border-bottom: 1px solid #ddf;
		height: .6rem;
		overflow: hidden;
		padding: .24rem;
		min-height: .2rem;
		line-height: .15rem;
		font-size: .2rem;
		color: #616161;
	}
	.statement{
		margin-right: .05rem;
		float: left;
		width: 22%;
	}
	.tourist-info{
		display: block;
		height:.18rem;
		line-height: .15rem;
		margin-right: .1rem;
		float: right;
		font: normal .2rem/.1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    	color: #CCCCCC;
    	outline: none;
    	border: 0;
	}
	.info1{
		width:60%;
	}
	.info2{
		width:70%;
	}
</style>
