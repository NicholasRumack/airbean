<template>
<div>
	<div class="productContainer">
		<div class="addButton" @click="$emit('addToCart', coffee)">
			<img class="button" src="@/assets/addButton.png">
		</div>
		<div @click="modalAction()">
			
			<div class="coffeeName">
				<h2>
					{{coffee.name}}
				</h2>
			</div>
		</div>
		<div class="price">
			<h2>
				${{coffee.price}}
			</h2>
		</div>
		<vModal class="details" :modal="showModal" @close="modalAction" :coffee="coffee" />
	</div>
</div>
</template>
<script>

import vModal from "../components/CoffeeDetails";


export default {
	props:{
		coffee: Object
	},
	components:{
		vModal
	},
		data() {
    return {
      showModal: false,
    }
	},

	methods: {
		modalAction() {
		this.showModal = !this.showModal;
	},
}
}
</script>
<style scoped>
ul {
	list-style-type: none;
}
.addButton{
	margin-left: 1em;
	margin-right: 1em;
}
.coffeeName{
	margin-top: -1.125em;
	min-width: 200px;
	text-align: start;
}
.price{
	margin-top: -1em;

}
.button {
	max-height: 2em;
	
}
.productContainer{
	display: flex;
	flex-flow: row wrap;
	background-color: #F3E4E1;
	
}
.details{
	margin-left: 40px;
	margin-top: -10px;
	margin-bottom: 10px;
}
</style>