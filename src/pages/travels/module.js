export default {
	state: {
			allInfo: []
	},
	actions: {
		getTravelsData(context) {
			console.log(context)
			fetch('/static/travels.json')
			.then((res) => {
					if(res.status === 200){
							return res.json();
					}
			})
			.then((data) => {					
					context.commit("changeAllInfo",data.data.allInfo);
			})
			.catch((error) => {
					console.log(error);
			})
		}
	},
	mutations: {		
			changeAllInfo(state,data) {
					state.allInfo = data;
			},
	},
	getters: {
		travelsGetData(state){
			if (
				!state.allInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}