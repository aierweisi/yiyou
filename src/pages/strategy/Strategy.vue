<template>
	<div>
		<Header-content></Header-content>
		<Nav-content></Nav-content>
		<BackTop-content v-back-top v-scroll-show:600='isBackShow' :isShow='isBackShow'></BackTop-content>
	</div>
</template>


<script>
	import BackTopComponent from '../../common/back-top/BackTop'
	import HeaderComponent from './Header'
	import NavComponent from './Nav'
	export default{
		components:{
			"Header-content":HeaderComponent,
			"Nav-content":NavComponent,
			 "BackTop-content":BackTopComponent,
		},
		data(){
        	return {
        		isBackShow:{value:false}
        	}
        },
		mounted() {
		if(this.$store.getters.strategyGetData){
			this.$store.dispatch("getStrategyData");
		}
	  }
	}
</script>

<style lang="scss" scoped>
	
	
</style>