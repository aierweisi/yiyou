<template>
	<div>
		<div class="order-header">
			<a href="" class="iconfont order-iconfont">&#xe625;</a>
			<h1 class="order-title">订单填写</h1>
			<a href="" class="order-login">登录</a>
		</div>
		<div class="order-main">
			<form action="">
				<div class="order-info-outer">
					<div class="order-info-left">
						<div class="order-info-main">
							<h2 class="order-info-title">【上午场】故宫成人票凭身份证入园</h2>
							<ul class="order-info-taglist">
								<li class="order-info-tagitem">
									<img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt="" class="order-info-tagicon">
									"2017-11-11"
								</li>
								<li class="order-info-tagitem">
									<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="" class="order-info-tagicon">
									"条件退"
								</li>
							</ul>
							<ul class="order-info-taglist"></ul>
						</div>
					</div>
					<div class="order-info-right">
						<span class="pre-money">￥<em class="money">40</em></span>
						<em>/张</em>
						<a href="" class="needknow">预定须知</a>
					</div>
				</div>
				<div class="order-number-count">
					
				</div>
				<div></div>
			</form>
		</div>
		<div class="order-footer"></div>
	</div>
</template>

<script>
export default {
	components:{		
	}
}
</script>

<style>
@import '../../app/reset.css';
	.order-header{
		/* position: relative; */
		height: .5rem;
    	line-height: .3rem;
    	background: #19d1f3;
	}
	.order-iconfont{
		width: 10%;
		color: #fff;
		text-align: center;
		display: inline-block;
		float: left;
	}
	.order-title{
		float: left;
	    line-height: .88rem;
	    font-size: .32rem;
	    width: 75%;
	    text-align: center;
	    color: #fff;
	}
	.order-login{
		display: inline-block;
		float: right;
		color: #fff;
		text-align: center;
	    width: 15%;
    	font-size: .28rem;
	}

	.order-info-outer{
		position: relative;
	    overflow: hidden;
	    min-height: 1.1rem;
	    padding: .2rem .2rem .1rem .2rem;
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
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	}

	.order-info-taglist{
		margin-left: -.2rem;
    	overflow: hidden;
	}

	.order-info-tagitem{
		float: left;
	    line-height: .44rem;
	    margin-left: .2rem;
	    color: #616161;
	    font-size: .24rem;
	}
	.order-info-tagicon{
		width: .24rem;
		height: .24rem;
	}
	.pre-money{
		color:#ff8300
	}
	.money{
		font-size: .4rem;
	}

	.needknow{
		display: block;
		margin-top: .12rem;
	    line-height: .32rem;
	    color: #00bcd4;
	    font-size: .28rem;
	}

	.order-number-count{
		padding:.3rem .2rem .3rem .2rem
	}
</style>