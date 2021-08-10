<template>
<div>
	<div>
		<div v-if="!(userGetter && userGetter[0])" >
			<RegisterUser/>
		</div>
		<div v-else>
		<div v-if="userGetter && userGetter[0]">
			<h1 class="nameEmail">{{userGetter[0].name}}</h1>
			<p class="email">{{userGetter[0].epost}}</p>
		</div>
			<div class="orderHistory">
				<h1>Order History</h1>
				<div v-if="userGetter && userGetter[1]">
					<div v-for="order in userGetter[1]" :key="order.ordernumber">
						<OrderHistory	:orderNumber="order.orderNumber"
										:date="order.date"
										:total="order.cart"
						/>
				</div>
					<div class="total">
						<h3>Total spent</h3>
						<h3>{{total(userGetter[1])}} $</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>

import RegisterUser from '@/components/RegisterUser'
import OrderHistory from '@/components/OrderHistory.vue'
import {mapGetters} from 'vuex'

export default {
	data(){
		return{
			userOrders: '',
			user: '',
			orders: '',
		}
  },
    components: {
		RegisterUser,
		OrderHistory,
  },
    methods:{
		total(arr){
			let total=0
				if(arr)
				arr.forEach(item=>{
					total +=item.cart[0].totalPrice
				})
			return  total
		},
      },
    computed:{
        ...mapGetters({
			userGetter: 'user',

        }),
    },
}
</script>