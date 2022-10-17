import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

/*
  传参对于多层嵌套非常繁琐且不易管理，代码维护相当麻烦，
  vuex相当于把共享状态抽取出来，以全局单例模式来进行管理，
  把共享的数据函数放进vuex，任何组件都可以进行使用
*/
// 创建store的时候记得用new操作符
const store = new Vuex.Store({
  state: {
    pushCount: 0,
  },

  // 调用时候用this.$store.commit("xxx函数")  来调用内部函数 
  mutations: {
    pushOnce(state) {
      state.pushCount ++;
    },

    pushAnyNumber(state, number) {
      if (Number(number)) {
        state.pushCount += Math.floor(Number(number));
      }
    }
  },
  // 执行异步操作，调用时候用this.$store.dispatch("xxx函数")  来调用内部函数，原理还是触发mutations方法  
  actions: {
    pushTimeout({state}) {
      setTimeout(() => {
        state.pushCount += 1; 
      }, 2000);
    }
  },
  // 类似于computed，实现缓存
  getters: {
    doubleCount(state) {
      return 2 * state.pushCount;
    }
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
