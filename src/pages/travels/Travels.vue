<template>
	<div>
		<header-content></header-content>
		<swiper-content></swiper-content>
		<all-content></all-content>
	</div>
</template>

<script>
    import HeaderComponent from './Header' 
    import SwiperComponent from './Swiper'
    import AllComponent from './All'
	export default{
		components:{
			"header-content":HeaderComponent,
			"swiper-content":SwiperComponent,
			"all-content":AllComponent,
		},
		mounted() {
		if(this.$store.getters.travelsGetData){
			this.$store.dispatch("getTravelsData");
		}
	  }
	}
</script>

<style>
	
</style>