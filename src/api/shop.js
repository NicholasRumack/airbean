const _products = [
	{"id": 1, "title": "Black Coffee", "price": 4.99},
	{"id": 2, "title": "Cappuccino", "price": 4.99},
	{"id": 3, "title": "Latte", "price": 4.99},
	{"id": 4, "title": "Espresso", "price": 4.99},
	{"id": 5, "title": "Black Coffee", "price": 4.99},
	{"id": 6, "title": "Black Coffee", "price": 4.99}
]

export default {
	getProducts (cb) {
		setTimeout(() => cb(_products), 100)
	},
  
  }