<template>
<div class="MenuPage">
    <img src="@/assets/pink-header.png" class="pinkHeader">
        <h1>Meny</h1>
    <img src="" alt="">
	<ProductList/>
    <img src="@/assets/pink-footer.png" class="pinkFooter">
	<div class="nav">
    <NavBar/>
	</div>
</div>    
</template>
<script>
import NavBar from '@/components/NavBar'
import ProductList from '@/components/ProductList'


export default {
    name: 'MenuPage',

    components: {
		NavBar,
		ProductList
  },

}
</script>
<style>
.MenuPage {
    background-color: #F3E4E1;
    width: 375px;
    min-height: 839px;
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
}
.pinkFooter{
  width: 375px;
  height: 113px;
  margin-bottom: -10px;
}
</style>