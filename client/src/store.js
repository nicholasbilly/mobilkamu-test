import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://35.198.202.116'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
    },

    mutations: {
        GETPRODUCTS(state, payload) {
            state.products = payload
        },

    },

    actions: {
        getProducts(context) {
            let token = localStorage.getItem('token')
            axios.get(`${url}/mobil`)
            .then(({data}) => {
                 context.commit('GETPRODUCTS', data)
            })
            .catch(console.log)
        },
    }
})