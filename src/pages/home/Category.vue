<template>
  <div class="app-category">
    
        <div class="swiper-img-con">
          <ul class="first">
            <li>
            	<router-link to="/strategy">
	                <div class="icon-pic">
	                    <img src="../../assets/tubiao1.jpg"> 
	                </div>
                </router-link>
                <span>攻略</span>
            </li>
            <li>
            	<router-link to="/hotel">
	                <div class="icon-pic">
	                    <img src="../../assets/tubiao2.jpg">
	                </div>
            	</router-link>
                <span>酒店</span>
            </li>
            <li>
            	<router-link to="/buy_tickets">
	                <div class="icon-pic">
	                    <img src="../../assets/tubiao3.jpg">
	                </div>
            	</router-link>
                <span>购票</span>
            </li>
            <li>
            	<router-link to="/travels">
	                <div class="icon-pic">
	                    <img src="../../assets/tubiao4.jpg">
	                </div>
               </router-link>
                <span>游记</span>               
            </li>
            <li>
            	<router-link to="/travels">
	                <div class="icon-pic">
	                    <img src="../../assets/tubiao5.jpg">
	                </div>
	            </router-link>    
                <span>问答</span>
            </li>       
          </ul>
        </div>
      <hr>
      <div class="swiper-img-under">
          <ul class="second">
            <li>
            	<router-link to="/strategy">
	                <div class="icon-pic">
	                    <img src="../../assets/tu1.jpg"> 
	                </div>
                </router-link>
                <span>签证</span>
            </li>
            <li>
            	<router-link to="/hotel">
	                <div class="icon-pic">
	                    <img src="../../assets/tu2.jpg">
	                </div>
            	</router-link>
                <span>租车</span>
            </li>
            <li>
            	<router-link to="/buy_tickets">
	                <div class="icon-pic">
	                    <img src="../../assets/tu3.jpg">
	                </div>
            	</router-link>
                <span>WiFi</span>
            </li>
            <li>
            	<router-link to="/travels">
	                <div class="icon-pic">
	                    <img src="../../assets/tu4.jpg">
	                </div>
               </router-link>
                <span>外币</span>               
            </li>
            <li>
            	<router-link to="/travels">
	                <div class="icon-pic">
	                    <img src="../../assets/tu5.jpg">
	                </div>
	            </router-link>    
                <span>更多</span>
            </li>       
          </ul>
        
      </div>
     
 </div>
</template>

<script>
      
        export default {
          name: 'carrousel',
          data() {
            return {
//            swiperOption: {
//              direction: 'horizontal',
//              autoHeight: true,
//              pagination: '.swiper-pagination',
//              observeParents: true,     
//            }
          } 
          },        
//        mounted() {   
//          this.$refs.mySwiper.swiper.slideTo(0, 1000, false)
//        },
//        components:{
//              swiper,
//            swiperSlide
//          }
        }
</script>

<style lang="scss">
       .app-category{
       	     width:100%;
       	     height:1.8rem;
       	     background:#fff;
       	     border-radius: .1rem;
       	     
       .swiper-img-con{
	          
	          background:white;
       	.first{
       		  display:flex;
       		  flex:1;
       		  justify-content:space-around;
        li{
	        	display:flex;
	        	align-items: center;
	        	flex-direction: column;	
	        	padding-top:0.15rem;
        
        span{padding-top:0.05rem;}
       	img{
	       		height: .5rem;
	       		width:.5rem;	
              }	  
       	    }
          }
        } 
        hr{height:1px;border:none;border-top:1px solid #f2f2f2;}
        .swiper-img-under{
        	   
       	.second{
       		  display:flex;
       		  flex:1;
       		  justify-content:space-around;
        li{
	        	display:flex;
	        	align-items: center;
	        	flex-direction: column;	
	        	padding-top:0.05rem;
        
        span{padding-top:0.05rem;}
       	img{
	       		height: .27rem;
	       		width:.3rem;	
              }	  
       	    }
          }
        }   
      }  
</style>
     
