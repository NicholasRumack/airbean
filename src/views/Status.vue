<template>
<div class="background">
	<div class="order">
		<h4>Ordernummer: {{ orderNumber }}</h4>
    </div>

		<img src="@/assets/drone.png" class="drone">

    <div>
		<h1>Din beställning är på väg!</h1>
    </div>
    <div class="Timer">
		<Timer :orderTime="order.time" />
    </div>
    <button @click="routeToProfile"><h3>Ok, cool!</h3></button>
</div>
</template>

<script>

import Timer from "../components/Timer.vue";

export default {
	components: {
		Timer,
},

	computed: {
		orderNumber() {
		return	this.$store.getters.user && this.$store.getters.user[1] ? 
				this.$store.getters.user[1][this.$store.getters.user[1].length-1].orderNumber: null;
		},
		order(){
		return	this.$store.getters.user && this.$store.getters.user[1] ? 
				this.$store.getters.user[1][this.$store.getters.user[1].length-1]: null;
		}
		},
	methods: {
		routeToProfile() {
		this.$router.push("Profile");
    },
  },
};
</script>

<style scoped>
.background {
	background-color: #e5674e;
	min-height: 667px;
	width: 23em;
	position: relative;
}
.menu-button {
	position: fixed;
}
.drone {
	margin-top: 3rem;
	max-width: 23em;
}
h1 {
	font-size: 30px;
	line-height: 120%;
	color: white;
}
.Timer {
	text-align: center;
	color: white;
}
h4 {
	font-size: 16px;
	line-height: 120%;
	color: rgba(255, 255, 255, 0.7);
}
button {
	width: 10em;
	height: 4em;
	background: white;
	box-sizing: border-box;
	border-radius: 50px;
	color: #2f2926;
	border-style: none;
	margin-top: 3rem;
	margin-left: 9em;
}
.order {
	margin-top: 6rem;
	margin-left: 1em;
}
</style>
