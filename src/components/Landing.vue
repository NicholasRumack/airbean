<template>
<div class="landing" @click="toMenu">
    <img class="background" src="@/assets/landing-background.png" alt="">
    <div class="centerpiece">

    <img class="logo" src="@/assets/Alogo.png" alt="">
    <h1>AIR BEAN</h1>    

    </div>
</div>
</template>

<script>
export default {

methods:{
	toMenu(){
		this.$router.push('MenuPage')
	}
}

}
</script>

<style scoped>
.landing {
    width: 375px;
    height: 667px;
    background-color: #38846D;
 }
.centerpiece{
    margin-top: -425px;
	text-align: center;
 }
h1{
    font-size: 42;
    color: white;
}
p{
    font-size: 9;
    color: white;
}
.logo{
    height: 85px;
    width: 85px;
    margin-bottom: -25px;
}
.background{
    height: 667px;
    width: 375px;
}

</style>