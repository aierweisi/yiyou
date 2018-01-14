export default {
	state: {
			navInfo: []
	},
	actions: {
		getStrategyData(context) {
			console.log(context)
			fetch('/static/strategy.json')
			.then((res) => {
					if(res.status === 200){
							return res.json();
					}
			})
			.then((data) => {					
					context.commit("changeNavInfo",data.data.navInfo);
			})
			.catch((error) => {
					console.log(error);
			})
		}
	},
	mutations: {		
			changeNavInfo(state,data) {
					state.navInfo = data;
			},
	},
	getters: {
		strategyGetData(state){
			if (
				!state.navInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}