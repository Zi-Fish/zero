//引入Vue
// import 会提升到最前面，和编写的位置无关 
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入vue-resource插件库
import vueResource from 'vue-resource'
// import vuex from 'vuex'
// 引入store,脚手架认识的index可不写
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)
// Vue.use(vuex)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	// 安装全局事件总线
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})