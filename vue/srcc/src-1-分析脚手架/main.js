// 该文件是整个项目的入门文件
// 引入vue
// import Vue from 'vue'
import Vue from 'vue/dist/vue'
// 引入app组件，它是所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vue实例对象
new Vue({
  el:'#app',
  // 完成以下功能：将app组件放入容器中
  render: h => h(App),
  // template:`<h1>你好啊<h1>`
})
//.$mount('#app')
