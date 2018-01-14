
export default {
	state: {
			swiperInfo: [],
			postypeInfo: [],
			localgroomInfo: []
	},
	actions: {
		getHomeData(context) {
			console.log(context)
			fetch('/static/home.json')
			.then((res) => {
					if(res.status === 200){
							return res.json();
					}
			})
			.then((data) => {
					context.commit("changeSwiperInfo",data.data.swiperInfo);					
					context.commit("changeLocalgroomInfo",data.data.localgroomInfo);
					context.commit("changePostypeInfo",data.data.postypeInfo);
			})
			.catch((error) => {
					console.log(error);
			})
		}
	},
	mutations: {
			changeSwiperInfo(state,data) {
					state.swiperInfo = data;
			},
						
			changeLocalgroomInfo(state,data) {
					state.localgroomInfo = data;
			},
			
			changePostypeInfo(state,data) {
					state.postypeInfo = data;
			},
			refreshInfo(state,data) {
			state.postypeInfo.push(...state.postypeInfo);
		}
	},
	getters: {
		homeGetData(state){
			if (!state.swiperInfo.length &&
				!state.localgroomInfo.length&&
				!state.postypeInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}