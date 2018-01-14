<template>	
		<div class="order-footer">
			<div class="order-product-price">
				<span class="total-price-title">产品价格￥</span>
				<strong class="order-total-price">{{datas.m}}</strong>
				<span class="order-view-btn iconfont icon-jiantoushang" @click="show=!show"></span>
			</div>
			<a class="order-submit">提交订单</a>
		</div>	
</template>

<script>
	
export default {
	props:['datas'],
	data(){
		return {
			show:false
		}
	}
}
</script>

<style scoped>
	.order-footer{
		width: 100%;
		height: .5rem;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.order-product-price{
		float: left;
		width: 50%;
		line-height: .5rem;
		background: #fff;
	}
	.order-submit{
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

	.total-price-title{
		margin-left: .15rem;
		display: block;
		float: left;
		color: #ff8300;
	}

	.order-total-price{
		display: block;
		float: left;
		font-size: .22rem;
		font-weight: 500;
		color: #ff8300;
	}
	.order-view-btn{
		display: block;
		float: left;
	}
	 .promptbg{
		/* visibility: hidden; */
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 20%;
        z-index: 999;
        background:#000;
        opacity: 0.3;
	}
	.order-booking-detail-outer{
		/* visibility: hidden; */
		position: fixed;
		box-sizing: border-box;
		bottom: 1rem;
		width: 100%;
		background: #fff;
		z-index: 100;
	} 

	.order-booking-detail{
		margin: .2rem;
		/* height: 2rem; */
	}

	.order-count-title{
		color: #212121;
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	}

	.or-info-price{
		height: .44rem;
	    line-height: .44rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
</style>