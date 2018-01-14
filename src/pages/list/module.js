export default {
	state: {
		listCitys: [],
		listView: []
	},
	actions: {	
		getListData(context) {
			fetch('/static/listTourist.json')
			.then((res) => {
				if(res.status === 200){
						return res.json();
				}
			})
			.then((data) => {
					context.commit("changeMpBookInfo",data.data.listCitys);
					context.commit("changeBookView",data.data.listView);
			})
			.catch((error) => {
					console.log(error);
			})
		}
		
	},
	
	mutations: {
		
			changeMpBookInfo(state,data) {
					state.listCitys = data;
			},
			changeBookView(state,data) {
					state.listView = data;
			}
	},
	getters: {
		listGetData(state){
			if (!state.listCitys.length &&
				!state.listView.length){
				return true;
			}else{
				return false;
			}
		}
	}
}
