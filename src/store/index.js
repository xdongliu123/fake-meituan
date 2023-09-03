import { createStore } from "vuex";
export default createStore({
  state: {
    cartList: [],
    count: 0,
  },
  mutations: {
    ADDCART(state, value) {
      state.cartList = value;
    },
  },
  getters: {
    cartListCount(state) {
      return state.cartList.length;
    },
  },
  actions: {},
});
