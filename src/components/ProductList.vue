<template>
    <div>
		<ul>
			<li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}
			<button @click="addProductToCart(product)">Add to cart</button>
			</li>
		</ul>
    </div>
</template>
<script>

export default {
	computed: {
		products () {
			return this.$store.state.products
		}
	},
	created () {
		this.$store.dispatch('fetchProducts')
	},
	methods: {
		addProductToCart (product) {
			this.$store.dispatch('addProductToCart', product)
		}
	}
}
</script>
<style scoped>
ul {
	list-style-type: none;
}
div {
	background-color: #F3E4E1;
}
</style>