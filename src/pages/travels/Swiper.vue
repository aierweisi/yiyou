<template>
	<div class="travels-swiper">
		<p>今日精选游记</p>
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide>
		    	<img src="../../assets/xiaobanner1.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/xiaobanner2.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/xiaobanner3.png">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/xiaobanner4.png">
		    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
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
@import '../../app/reset.css';
	.detail-swiper{
		height:3rem;
		background:#fff;
	}
	img{
		width:80%;
	    height:1.5rem;
	    margin: .2rem .4rem;
	   }
	
	p{
		font-size:.1rem;
		margin-left:.3rem;
		margin-top:.18rem;
	} 
	
</style>