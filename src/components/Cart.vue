<template>
    <div>
        <div>{{coffee.name}}</div>
        <div>{{coffee.quantity}}</div>
        <div>{{coffee.price}}</div>
    </div>
</template>
<script>

export default {
    props:{
		coffee: Object
	}
}
</script>