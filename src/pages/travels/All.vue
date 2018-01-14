<template>
	<div class="travels-all">
		<p class="travels-title">全部游记</p>
		<div class="travels-list">
			<ol>
				<li class="all-list" v-for="item in allInfo" :key="item.id">									
					<dl>
						<dt><img class="all-img" :src="item.img"></dt>
						<dd>
							<p class="introduce">{{item.introduce}}</p>
						</dd>
			        </dl>	
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
   
	export default{
		computed:{
        	allInfo(){
        		return this.$store.state.travels.allInfo;
        	}
        }       
        
	}
</script>

<style scoped>
   @import '../../app/reset.css';
   .travels-all{
   	
   }
   .travels-title{
   	    font-size:.1rem;
		margin-left:.3rem;
		margin-top:.18rem;
   }
	
</style>