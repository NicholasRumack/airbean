<template>
<div>
		<div class="nav">
			<NavBar/>    
		</div>	
		<div class="cart" @click="active = !active">
			<CartIcon />
		</div>
	<div class="MenuPage">
			<img src="@/assets/pink-header.png" class="pinkHeader">
		<div>	
			<div class="menu">
				<h1>Meny</h1>
			</div>
			<div class="products" v-for="coffee in coffee" :key="coffee.id">
				<ProductList @addToCart="addToCart" :coffee="coffee"/>
			</div>
				<img src="@/assets/pink-footer.png" class="pinkFooter">
		</div>
	</div>
</div>	  
</template>
<script>

import NavBar from '@/components/NavBar'
import ProductList from '@/components/ProductList'
import CartIcon from '@/components/CartIcon'

export default {
	data(){
		return{
			active: false,
			productData: {},
			title: '',
			selected: ''
		}
	},
    name: 'MenuPage',

	computed:{
		coffee(){
			return this.$store.getters.coffee;
		},
	},

    components: {
		NavBar,
		ProductList,
		CartIcon,
  },

     methods:{
         addToCart(coffee){
             this.$store.commit('pushCoffeeToCart', coffee )
          }
      },
}
</script>
<style scoped>
.MenuPage {
    background-color: #F3E4E1;
    width: 375px;
    min-height: 639px;
	display: flex;
	flex-wrap: wrap;
	z-index: -10;
}
.addButton{
	max-height: 2em;
}
h1 {
    font-size: 42px;
}
.menu{
	margin-left: 8em;
	margin-top: 3em;
}
h5{
    font-size: 23px;
}
.desc{
    font-size: 12px;
}
.price{
    font-size: 23;
}
.nav{
	position: fixed;
	margin-top: 1.75em;
	margin-left: 1.2em;
}
.cart{
	margin-top: 2em;
	margin-left: 4em;
	margin-right: -5em;
	position: fixed;
}
.pinkHeader{
	width: 375px;
	height: 113px;
	margin-bottom: -5em;
}
.pinkFooter{
	width: 375px;
	height: 113px;
	margin-top: -5em;
	margin-bottom: -7em;
}
</style>