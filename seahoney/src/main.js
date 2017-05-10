// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueResource) 
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;
Vue.config.silent = false;

var store=new Vuex.Store({ 
	state:{
		loadingShow:false,
		cartList:[]
	},
	mutations:{
		showLoading(state,n){
			state.loadingShow = n;
		},
		setCartList(state,data){
			state.cartList=data;
		},
		addCartList(state,data){
			state.cartList.pudh(data);
			window.localStorage['cartList']=JSONstate.stringify(state.cartList);
		}
	},
	actions:{
		getCartList(context){
			var data=JSON.parse( window.localStorage['cartList']);
			if(data){
				context.commit('setCartList',data)
			}
		}
	}
})

Vue.http.interceptors.push(
	(request, next) => {
		store.commit('showLoading',true)	
		next((response) => {
			store.commit('showLoading',false)
			return response
		})
	}
)

/* eslint-disable no-new */
var myApp = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App},
  created(){
  	this.$store.dispatch('getCartList'); 
  }
})


