import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex)
const state = {
    nowCity:"上海",
    cityMessage:""
}
const getters = {
    indexLive(state){
        if(state.cityMessage){
            return state.cityMessage.live.slice(0,3)  
        }        
    },
    indexPlay(state){
        if(state.cityMessage){
            return state.cityMessage.play.slice(0,3)  
        }        
    },
    indexEat(state){
        if(state.cityMessage){
            return state.cityMessage.eat.slice(0,3)  
        }        
    },
    indexBuy(state){
        if(state.cityMessage){
            return state.cityMessage.buy.slice(0,3)  
        }        
    }, 
    indexSale(state){
        if(state.cityMessage){
            return state.cityMessage.sale.slice(0,3)  
        }        
    }
}
const mutations = {
    getCityData(state,res){
        this.state.cityMessage = res.data.citySH;
    }
}
const actions = {
    getCityData({commit},city){
        axios.get("/static/mock/shanghai.json",{
            params:{city}
        }).then((res)=>{
            commit("getCityData",res)
        })
    }
}
const store = new Vuex.Store({
    state,actions,mutations,getters
})

export default store