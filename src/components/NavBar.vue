<template>
<div @click="showNav = !showNav">
<div v-if="showNav">
	<button>click</button>
</div>
<div v-else-if="!showNav">
<button>click</button>

<div class="nav">
    <nav>
    <router-link tag="li" to="MenuPage">Meny</router-link>
    <hr>
    <router-link tag="li" to="AboutPage">Vårt kaffe</router-link>
    <hr>
    <router-link tag="li" to="Profile">Min profil</router-link>
    <hr>
    <router-link tag="li" to="Status">Orderstatus</router-link>
</nav>
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
    font: white;
    width: 375px;
    min-height: 417px;
    padding-top: 250px;
	position: fixed;
}
nav li  {
    font: white;
    list-style: none;
	font-size: 32px;
}
hr {
    width: 48px;
    opacity: 0.2;
}
</style>