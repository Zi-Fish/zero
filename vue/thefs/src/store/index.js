// 用于创建vuex最为核心的store
// 引入vuex 在这里使用Vuex插件
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 求和功能相关的配置
const countOptions = {
  actions: {
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 1500)
    },
  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0,
    name: 'lizishi',
    sex: 'nan',
  },
  getters: {
    bigSum(state) {
      return state.sum * (10 - (2 * 3))
    }
  },
}
const personOptions = {
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutations中的ADD_PERSON被调用了')
      state.personList.unshift(value)
    }
  },
  state: {
    personList: [
      { id: '001', name: 'lizishi' }
    ],
  },
  getters: {},
}


// Store 首字母必须大写
export default new Vuex.Store({
  modules: {
    a: countOptions,
    b: personOptions
  }
})
