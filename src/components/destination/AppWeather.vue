<template>
    <div class="weather">
            <img :src="isDay ? weather.dayImg : weather.nightImg" alt="天气实况">
            <div class="font">
                <span>{{weather.dudu}}</span>
                <span>{{weather.now}}</span>
            </div>
            
    </div>
</template>
<script>
import axios from "axios"
import {mapState} from 'vuex'
export default {
  data(){
      return {
          data:"",
          weather:{
              dayImg:"",
              nightImg:'',
              now:'',
              dudu:''
          },
          isDay:true,
          timer:new Date()
      }
  },
  computed:{
      ...mapState(
      ['nowCity']
  )
  },
  created(){
      let that = this;
      let url = "tq/telematics/v3/weather?location="+this.nowCity+"&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw"
      axios.get(url,).then((response)=>{
          that.data = response.data.results[0].weather_data[0]
          console.log(that.data)
         // 白天： http://php.weather.sina.com.cn/images/yb3/78_78/duoyun_0.png
        //夜间： http://php.weather.sina.com.cn/images/yb3/78_78/duoyun_1.png
        that.weather.now = that.data.date.split("(")[1].split("：")[1].split(")")[0];
        that.weather.dudu = that.data.weather;
        let url1 = "http://php.weather.sina.com.cn/images/yb3/78_78/";
        let url2 = that.data.dayPictureUrl.split("day/")[1].split(".png")[0];
        let url3 = that.data.nightPictureUrl.split("night/")[1].split(".png")[0];
        that.weather.dayImg= url1+url2+"_0.png";
        that.weather.nightImg = url1+url3+"_1.png";
      })
  },
  mounted(){
          let time = this.timer.getHours() 
          if(time > 16 || time < 6){
              this.isDay = false
          }else{
              this.isDay = true
          }
  }
}
</script>
<style lang="scss" scoped>
    .weather{
        display:flex;flex-direction: column;
        img{width:100px;height:100px;opacity:0.8;}
        .font{
             display:flex;flex-direction: column;margin-top:-35px;margin-left:10px;opacity:0.6;
             span:nth-of-type(1){
            font-size:16px;color:#fff;
            }
            span:nth-of-type(2){
                font-size:22px;color:#fff;
            }
        }
       
    }
</style>
