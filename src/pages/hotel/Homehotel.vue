<template>
	<div class="app-hotel">
		<div class="img1">
		    <img src="https://pages.ctrip.com/hotel_h5/res/img/index-hb.jpg" alt width="100%">
        </div>
	    <div class="app-homehotel">
	    	<ul>
	    		<li @click='type = "now-playing"' class="film-type" :class="{active:type == 'now-playing'}">
		        	国内酒店
		        </li>
		        <li @click='type = "coming-soon"' class="film-type" :class="{active:type == 'coming-soon'}">
		        	国际酒店
		        </li>
	    	</ul>
	    	<hr>
	    	<p class="position">北京市昌平区沙阳路
	    		<i class="position-middle iconfont icon-youjiantou"></i>
	    		<i class="position-right iconfont icon-mudedi"><span class="position-weizhi">我的位置</span></i>
	    	</p>
	    	<hr>
	    	<p class="position-time">
	    		<ol>
	    			<li>入住</li><span class="position-ruzhutime">12月21日</span>
	    			<li>离店</li><span class="position-lidiantime">12月22日</span>
	    		</ol>	
	    	</p>
	    	<hr>
	    	<p class="hoteltype">
	    		<span>关键字/位置/品牌/酒店名</span>
	    	</p>
	    	<hr>
	    	<p class="hotelprice">
	    		<span>档次/星级/价格</span>
	    	</p>
	    	<hr>
	    	<div class="chaxun">
	    		查询
	    	</div>
	    </div>
	</div>		
</template>

<script>
	import bus from '../../modules/bus'
	export default{
		name:'app-hotel',
		data(){
        	return {
        		type:'now-playing'
        	}
        },  
        watch:{
        	type(){
        		bus.$emit('change-type',this.type)
        	}
        }   
	}
</script>

<style lang="scss" scoped>
    ul{
			display: flex;
			justify-content: space-around;
			white-space: nowrap;             
	li{	    		    	
	    	line-height: .4rem;
	    	font-size:20px;
	    	margin-top:.1rem;
	 .film-type{
	 	    width:25%;
	 }
	 /*&.active{
		    color: #000;
			border-bottom: 1px solid #19d1f3;
	    	  }*/
	       }
	    } 
	hr{ 
		    width:2.5rem;
		    height:1px;
		    border:none;
		    border-top:1px solid #000;
		    margin-left:.24rem;
	  }
	.position-time{
		
	ol{
		   display:flex;
		   flex-direction: row;
		   justify-content: space-around;
	    }  
	span{
		 margin-top:.3rem;
		 margin-left:-1.5rem;  
	   }
	}          
@import '../../app/reset.css';
    .img1{padding-top:.1rem;}
    .app-homehotel{
    	           width:3rem;
                   height:3rem;
                   background:#cccccc;
                   border-radius: .1rem;
                   margin:.5rem auto;               
      }
    .position{
		    	margin-left:.3rem;
		    	margin-top:.2rem;
		    	white-space: nowrap;
		    	font-size:.1rem;
      }  
    .position-middle{
    	             margin-left:.1rem;
                     margin-top:.7rem;
                     }            
    .position-right{
    	            margin-left:.35rem;
                    font-size:.2rem;
                    }
	.position-weizhi{
		            font-size:.1rem;
		            }
	.hoteltype{
		       height:.08rem;
		       margin-left:.3rem;
		       color:#9d9da4;
		       font-size:6px;
	}
	.hotelprice{
		        height:.08rem;
		        margin-left:.3rem;
		        color:#9d9da4;
		        font-size:6px;	       
	}
	.chaxun{
		
		width:2.5rem;
		line-height: .35rem;
		background: forestgreen;
		border-radius: .05rem;
		text-indent: .1rem;
		margin-left:.24rem;
		display: inline-block;
		overflow: hidden;
		text-align: center;
		color:#fff;
	}
	             
	      
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   	
</style>