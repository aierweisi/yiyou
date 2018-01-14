export default {
	state: {
			ChinaCityName: [],
			ForgienCityName: []
	},
	actions: {

		getCityName(context) {
			fetch('/static/city.json')
			.then((res) => {
				if(res.status === 200){
					return res.json();
				}
			})
			.then((data) => {
				const ChinaCityName= data.data.China;
				const ForgienCityName= data.data.Forgien;
				context.commit("changeChinaCityName",ChinaCityName);
				context.commit("changeForgienCityName",ForgienCityName);
					
			})
			.catch((error) => {
				console.log(error);
			})
		}
	},
	mutations: {
			changeChinaCityName(state,ChinaCity) {
				state.ChinaCityName = ChinaCity;
			},
			changeForgienCityName(state,ForgienCity) {
				state.ForgienCityName = ForgienCity;
			}

			
	},
	getters: {
		CityChangeGetData(state){
			if (!state.ChinaCityName.length &&
				!state.ForgienCityName.length){
				return true;
			}else{
				return false;
			}
		}
	}
}
