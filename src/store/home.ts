import { defineStore } from "pinia";

export const useMain = defineStore('main', {
  // 相当于data
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo'
    };
  },
  // 相当于computed
  getters: {
    doubleCount: (state) => {
      return state.counter * 2;
    }
  },
  // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      setTimeout(() => {
        this.counter = Math.round(100 * Math.random());
      }, 0);
    }
  }
})