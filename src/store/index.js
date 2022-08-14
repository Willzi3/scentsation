import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setproduct: (state, product) => {
      state.product = product
    },
    setproducts: (state, products) => {
      state.products = products
    }
  },
  actions: {
    getproduct: async (context, id) => {
      fetch("http://localhost:6969/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setproduct", product[0]))
    },
    getproducts: async (context) => {
      fetch("http://localhost:6969/products")
      .then((res) => res.json())
      .then((products) => context.commit("setproducts",products))
    }
  },
  modules: {
  }
})
