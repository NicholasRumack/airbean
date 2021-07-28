<template>
<div class="MenuPage">
   
    <img src="@/assets/pink-header.png" class="pinkHeader">
    <NavBar/>    
	
	<h1>Meny</h1>

	<div v-for="coffee in coffee" :key="coffee.id">

		<ProductList @addToCart="addToCart" :coffee="coffee"/>
	</div>
	
	<div @click="active = !active">
		<CartIcon />
	</div>
	
	
    <img src="@/assets/pink-footer.png" class="pinkFooter">
	<div class="nav">
    
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
<style>
.MenuPage {
    background-color: #F3E4E1;
    width: 375px;
    min-height: 839px;
}
.addButton{
	max-height: 2em;
}
h1 {
    font-size: 42px;
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
}
.pinkHeader{
  width: 375px;
  height: 113px;
  z-index: -2;
}
.pinkFooter{
  width: 375px;
  height: 113px;
  margin-bottom: -10px;
}
</style>