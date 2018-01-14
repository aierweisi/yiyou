<template>
	<div>
		<list-header></list-header>
	 	<router-view></router-view>
	</div>
</template>

<script>
import HeaderComponent from "./Header";
export default {
	components:{
		"list-header":HeaderComponent,
	},
	
	mounted() {
		if(this.$store.getters.listGetData){
			this.$store.dispatch("getListData");
		}
		
	}
}
</script>

<style>
	
</style>