<template>
	<div>
		<Header-content></Header-content>
		<Homehotel-content></Homehotel-content>
	</div>
</template>

<script>
import HeaderComponent from './Header'
import HomehotelComponent from './Homehotel'
	export default{
		components:{
			"Header-content":HeaderComponent,
			"Homehotel-content":HomehotelComponent,
		}
	}
</script>

<style>
	
</style>