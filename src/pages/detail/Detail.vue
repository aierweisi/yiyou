<template>
	<div>
		<header-content></header-content>
		<swiper-content></swiper-content>
		<orderform-content></orderform-content>
	</div>
	
</template>



<script>
    import HeaderComponent from './Header'
    import SwiperComponent from './Swiper'
    import OrderformComponent from './Orderform'
	export default{
		components:{
			"header-content":HeaderComponent,
			"swiper-content":SwiperComponent,
			"orderform-content":OrderformComponent,
		}
	}
</script>

<style>
	
	
</style>