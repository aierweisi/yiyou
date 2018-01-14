import Vue from 'vue'
import Vuex from 'vuex'

import home from '../pages/home/module.js'
import strategy from '../pages/strategy/module.js'
import cityChange from '../pages/cityChange/module.js'
import list from '../pages/list/module.js'
import travels from '../pages/travels/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		strategy: strategy,
		cityChange: cityChange,
		list: list,
		travels: travels,
	}
});