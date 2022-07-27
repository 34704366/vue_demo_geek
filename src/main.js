import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

// 创建store的时候记得用new操作符
const store = new Vuex.Store({
  state: {
    pushCount: 0,
  },

  // 调用时候用this.$store.commit("xxx函数")  来调用内部函数  
  mutations: {
    pushOnce (state) {
      state.pushCount ++;
    }
  },
  // 执行异步操作，调用时候用this.$store.dispatch("xxx函数")  来调用内部函数，原理还是触发mutations方法  
  actions: {

  },
  // 类似于computed，实现缓存
  getters: {
    doubleCount (state) {
      return 2 * state.pushCount;
    }
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
