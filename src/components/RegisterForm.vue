<template>
<div class="background">
    <img src="@/assets/header.png" alt="">
    <div class="form">
    <form action="">
        <img src="" alt="">
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        <label for="">Namn</label>
        <input type="text">
        <label for="">Epost</label>
        <input type="email">
        
        <button>Brew me a cup!</button>
  
    </form>  
    </div>  
</div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
img{
    width: 375px;
    z-index: 2;
}
.background{
    background-color: #2F2926;
    width: 375px;
    height: 667px;
}
.form{
    z-index: 3;
    background-color: #F3E4E1;
    width: 341px;
    height: 566px;
    margin: -70px 10px;
}
input{
    background-color: #F3E4E1;
    width: 310px;
    height: 48px;
    border-radius: 10px;
    border-width: 1.5px;
}
button{
  margin-top: 20px;
  border-style: solid;
  border: #2F2926;
  border-radius: 30px;
  background-color: #2F2926;
  color: white;
  width: 248px;
  height: 55px;
  font-size: 24px;
}
</style>