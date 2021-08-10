<template>
<div>
	<div @click="showNav = !showNav">
	<div v-if="showNav">
		<img class="menuIcon" src="@/assets/hamburgerMenu.png">
	</div>
	<div class="nav" v-else-if="!showNav">
		<div class="menu">
			<nav>
				<router-link to="MenuPage"><h1>Meny</h1></router-link>
		<hr>
				<router-link to="AboutPage"><h1>About Us</h1></router-link>
		<hr>
				<router-link to="Profile"><h1>My Profile</h1></router-link>
		<hr>
				<router-link to="Status"><h1>Order Status</h1></router-link>
			</nav>
		</div>
	</div>
	</div>
</div>
</template>
<script>
export default {
	data(){
		return{
			showNav: true
		}
	},

}
</script>
<style scoped>
nav{
	background-color: #2F2926;
	width: 375px;
	height: 80%;
	text-align: center;
	position: fixed;
	margin-left: -1.2em;
	margin-top: -1.75em;
	z-index: 10;
	padding-top: 10em;
}
.menuIcon{
	padding: 5px;
}
h1{
	font: white;
}
a{
	text-decoration: none;
}
hr{
    width: 48px;
    opacity: 0.2;
}
img{
	width: 3em;
}
</style>