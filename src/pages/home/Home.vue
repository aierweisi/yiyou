<template>
	<div class="app-home app-box">
	      <home-header></home-header>
	      <swiper-content></swiper-content>   
	      <category-content></category-content>
	      <localgroom-content></localgroom-content>
	      <postype-content></postype-content>
	      <footer-content></footer-content>
	      <transition leave-active-class="animated fadeOut">
        	<div class="homeStart" v-if="isShow"></div>
          </transition>
    </div>
</template>
	</div>
</template>
<script>
    import HeaderComponent from "./Header"
    import SwiperComponent from "./Swiper"
    import CategoryComponent from "./Category"
    import LocalgroomComponent from "./Localgroom"
    import PostypeComponent from "./Postype"
    import FooterComponent from "./Footer"
	export default{
		data(){
    	       return{
    		         isShow:false
    	    }
        },
		components:{
			"home-header":HeaderComponent,
			"swiper-content":SwiperComponent,
			"category-content":CategoryComponent,
			"localgroom-content":LocalgroomComponent,
			"postype-content":PostypeComponent,
			"footer-content":FooterComponent,
		},
		
		mounted() {
		if(this.$store.getters.homeGetData){
			this.$store.dispatch("getHomeData");
		}
	 },
	  beforeRouteEnter(to, from, next) {
	  next((vm)=>{
	  	console.log(vm)
	  	if(from.name == null){
	  		vm.isShow = true
	  		setTimeout(function(){
	  			vm.isShow = false
	  		},4000)
	  	}
	  })
	}	
	}
</script>

<style scoped>
	.homeStart{
		z-index:3000;
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		background:url(../../assets/2.png);
		background:url(../../assets/2.png);
		background-size:cover;
	}
</style>