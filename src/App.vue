<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script> 
export default {

 created () {
   let user
   if(localStorage.User){

     user = JSON.parse(localStorage.User)
   }let orders
   if(localStorage.orders)
   {
      orders= JSON.parse(localStorage.orders)

   }
   if (user)
      this.$store.dispatch("setUser", user)
      if (orders )
      this.$store.commit('setOrders', orders)
},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
