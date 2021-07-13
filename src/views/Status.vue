<template>
    <div class="status">
        <p class="order">Ordernumber</p>
        <img src="@/assets/drone.png" alt="">
        <h1>Din beställning är på väg!</h1>
        <p class="timer">xx minuter</p>
        <button>Ok, cool!</button>    
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.status{
    background-color: #E5674E;
    width: 375px;
    height: 667px;
}
img{
    width: 216px;
    height: 120px;
}
h1{
    color: white;
    padding: 50px;
    font-size: 36px;

}
.order{
    color: white;
    opacity: 70%;    
    padding: 50px;
}
.timer{
    color: white;
    font-size: 22px;
    margin-top: -50px;
    padding-bottom: 50px;
}
button{
    border-style: solid;
    border: #2F2926;
    border-radius: 30px;
    background-color: white;
    color: #2F2926;
    width: 248px;
    height: 55px;
    font-size: 24px;
}
</style>