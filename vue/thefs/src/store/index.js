// 用于创建vuex最为核心的store
// 引入vuex 在这里使用Vuex插件
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 准备三步
// 用于响应组件中的动作
const actions = {
  // jia(context, value) {
  //   // 传给mutation的一般大写，action小写
  //   context.commit('JIA', value)
  // },
  // jian(context, value) {
  //   context.commit('JIAN', value)
  // },
  jiaOdd(context, value) {
    if (this.$store.state.sum % 2) {
      context.commit('JIAODD', value)
    }
  },
  jiaWait(context, value) {
    // 传给mutation的一般大写，action小写
    context.commit('JIAWAIT', value)
  },
}
// 用于操作数据
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
  JIAODD(state, value) {
    state.sum += value
  },
  JIAWAIT(state, value) {
    state.sum += value
  },
}
// 用于存储数据
const state = {
  sum: 0,
}

// Store 首字母必须大写
export default new Vuex.Store({
  // const store=new vuex.store({
  // actions:actions,
  // mutations:mutations,
  // state:state,//属性和值重名，可以简写
  actions,
  mutations,
  state,
})
// 暴露
// export default store