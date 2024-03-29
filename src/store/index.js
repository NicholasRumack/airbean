import Vuex from 'vuex'
import Vue from 'vue'
import UUID, { uuid } from 'vue-uuid'

const short = require('short-uuid')
const today = new Date()
const orderdate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

Vue.use(Vuex)
Vue.use(UUID)

export default new Vuex.Store({
	state: { // = data
		coffee: [
		{
			id: uuid.v4(),
			name: "Black Coffee",
			price: 2,
			beanType: "Type A",
			info: "words", 
		},
		{
			id: uuid.v4(),
			name: "Coffee",
			price: 3,
			beanType: "Type A",
			info: "words", 
		},
		{
			id: uuid.v4(),
			name: "Espresso",
			price: 4,
			beanType: "Type A",
			info: "words", 
		},
		{
			id: uuid.v4(),
			name: "Latte",
			price: 5,
			beanType: "Type B",
			info: "words", 
		},
		{
			id: uuid.v4(),
			name: "Frappe",
			price: 6,
			beanType: "Type B",
			info: "words", 
		},
		],
			cart: [],
			cartCount: 0,
			order: null,
			date: null,
			user: [],
	},
	getters: {// = computed properties
		coffee: state => {
			return state.coffee;
		},
		cart: state => {
			return state.cart;
		},
		sortByBean: (state) => (beanType) => {
			return state.coffee.filter(item=> item.beanType == beanType);
		},
		user: state => {
			return state.user;
		},
	},
	
	
	mutations: {
		setUser(state, payload) {
			state.user.push(payload);
			console.log('state')
		},
		setOrders(state,payload){
			state.user.push(payload);
		},

	pushCoffeeToCart (state, coffee) {
		let product = state.cart.find(item => item.id == coffee.id)

		if(product){
			product.quantity++;
			product.totalPrice = product.quantity * product.price;
		} else {
			state.cart.push(coffee)
			Vue.set(coffee, 'quantity', 1);
			Vue.set(coffee, 'totalPrice', coffee.price);
		}
		state.cartCount ++;
	},

	pushToDelivery(state){
		const date = new Date()
		let order = {
			cart: state.cart,
			orderNumber: state.orderNumber,
			date: state.date,
			time: date.getTime()
		}
		state.user.push(order)
	},

	createOrderNum(state){
		const translator = short()
		state.orderNumber = translator.new();
		state.date = orderdate;
  },
	pushToOrders(state){
		const date = new Date()
		let order = {
			cart: state.cart,
			orderNumber: state.orderNumber,
			date: state.date,
			time: date.getTime()
	}
		state.user.push(order)
 
	if(!localStorage.orders){
		localStorage.orders = JSON.stringify([])
	}
	let storedOrders  = JSON.parse(localStorage.orders)
	localStorage.orders = JSON.stringify([...storedOrders, order])
	console.log(JSON.parse(localStorage.orders))
		state.cart = [];
		state.orderNumber = null;
		state.date = null;
		state.cartCount = 0;
		state.user = [];
	},
},
  actions: {
	setUser(context, user) {
		context.commit("setUser", user)
		if (!localStorage.User){	
			localStorage.setItem("User", JSON.stringify(user));
		}
	}
},
})