<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide v-for="item in swiperInfo" :key="item.id">
            <router-link :to="item.link">
        		<div class="swiper-img-con">
        			<img class="swiper-img" :src="item.imgUrl">
        		</div>
           </router-link>
   		</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    
	export default {
    	data:function() {
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
		components: {
      		swiper,
    		swiperSlide
		},
		computed: {
			swiperInfo() {
				return this.$store.state.home.swiperInfo
			}
		}
	}
</script>


<style scoped>
	.swiper-img-con {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
		height: 1.5rem;
	}
</style>