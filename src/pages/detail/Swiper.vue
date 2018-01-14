<template>
	<div class="detail-swiper">
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide>
		    	<img src="../../assets/gugong1.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/gugong2.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/gugong4 (1).jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/gugong4 (2).jpg">
		    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
	    <div class="detail-bottom">
	        <h2>故宫博物院一日游+订票</h2>
	        <p><em>¥</em>60<span>人/张</span></p>
	    </div>
	</div>
</template>

<script>
	 import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {		
	    data() {
		    return {
		        swiperOption: {
			        autoplay: 3000,
			        direction: 'horizontal',
			        autoHeight: true,
			        pagination: '.swiper-pagination',
			        observeParents: true,
		        }
		    }
	    },
	    computed: {
	    	swiperInfo(){
	    		return this.$store.state.home.swiperInfo
	    	}
	    },  
	    components: {
		    swiper,
		    swiperSlide
	  	}
	}
</script>

<style scoped>
	.detail-swiper{
		height:3rem;
		background:#fff;
	}
	img{
		width:100%;
	    height:2rem;
	   }
	h2{
		font-weight: 100;
		margin-left:.2rem;
		font-size:.2rem;
		
	}  
	p{
		font-size:.2rem;
		color:red;
		margin-left:.2rem;
		
	} 
	em{
		font-style: normal;
		color:red;
	}
	span{
		font-size:.15rem;
		color:gray
	}
</style>