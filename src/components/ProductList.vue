<template>
<div>
	<div>
		<div class="add-plus" @click="$emit('addToCart', coffee)">
			<img class="button" src="@/assets/addButton.png">
	</div>
		<div @click="modalAction()">
			
			<div>
				<h2>
					{{coffee.name}}
				</h2>
					<div class="point-line">
				</div>
			</div>
		</div>
			<div class="price">
				<h2>
					{{coffee.price}} kr
				</h2>
			</div>
		<p>
			{{coffee.description}}
		</p>
		<vModal :modal="showModal" @close="modalAction" :product="coffee" />
		</div>
	</div>
</template>
<script>

import vModal from "../components/modalPopup";


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
/* 	computed: {
		products () {
			return this.$store.state.products
		}
	},
	created () {
		this.$store.dispatch('fetchProducts')
	}, */
	/* methods: {
		pushProductToCart (product) {
			this.$store.dispatch('pushProductToCart', product)
		}
	} */
}
</script>
<style scoped>
ul {
	list-style-type: none;
}

.button {
	max-height: 2em;
}
</style>