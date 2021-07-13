import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { // = data
		products: [],
		cart: []
	},
	getters: {// = computed properties
		productsCount (){

		}
	},
	actions: {
		fetchProducts (context) {
			// = make the call
			// run setProducts mutation
			shop.getProducts(products => {
				context.commit('setProducts', products)
			})
		},

	addProductToCart (context, product) {
		const cartItem = context.state.cart.find(item => item.id === product.id)
		if (!cartItem){
			//pushProductToCart
			context.commit('pushProductToCart', product.id)
		} else {
			//increaseItemQuantity
			context.commit('incrementItemQuantity', cartItem)
		}
	}
},
	mutations: {
		setProducts (state, products) {
			//update products
			state.products = products
		}
	},

	pushProductToCart (state, productId) {
		state.cart.push({
			id: productId,
			quantity: 1
		})
	},

	incrementItemQuantity (state, cartItem) {
		cartItem.quantity++
	}

})