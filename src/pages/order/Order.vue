<template>
	<div>
		<order-header></order-header>
		<order-details @change="Totalprice"></order-details>
		<order-footer :datas="datanum"></order-footer>
	</div>
</template>

<script>
	
import HeaderComponent from "./components/Header";
import DetailsComponent from "./components/Details";
import FooterComponent from "./components/Footer";
	


export default {
	data() {
		return {
			datanum:""
		}
	},
	components:{
		"order-header":HeaderComponent,
		"order-details":DetailsComponent,
		"order-footer":FooterComponent
	},
	methods:{
		Totalprice:function(datas){
			this.datanum = datas;
		}
	}
}
</script>

<style>
	body{
		background: #f5f5f5;
	}
</style>