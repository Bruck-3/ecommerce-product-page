import { createStore } from "vuex";

export default createStore({
  state: {
        cartNumber: 0,
      cartOnCart: 0,
  },
  mutations: {
    increaseCartNumber(state) {
      state.cartNumber = state.cartNumber + 1;
    },
    decreaseCartNumber(state) {
      if (state.cartNumber !== 0) {
        state.cartNumber = state.cartNumber - 1;
      }
      },
      addToCart(state) {
          console.log(state.cartNumber)
        state.cartOnCart = state.cartNumber
    },
    clearRealCart(state) {
        state.cartOnCart = 0
    }
  },
  actions: {
    increaseCartNumber(context) {
      context.commit('increaseCartNumber');
    },
    decreaseCartNumber(context) {
      context.commit('decreaseCartNumber');
    },
    addToCart(context) {
        context.commit('addToCart')
    },
    removeFromCart(context) {
        context.commit('clearRealCart')
    }
  },
  getters: {
      getCartNumber: (state) => state.cartNumber,
      getRealCart: (state) => state.cartOnCart
  }
})
