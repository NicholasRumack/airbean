const _products = [
	{"id": 1, "title": "Black Coffee", "price": 4.99},
	{"id": 1, "title": "Cappuccino", "price": 4.99},
	{"id": 1, "title": "Latte", "price": 4.99},
	{"id": 1, "title": "Espresso", "price": 4.99},
	{"id": 1, "title": "Black Coffee", "price": 4.99},
	{"id": 1, "title": "Black Coffee", "price": 4.99}
]

export default {
	getProducts (cb) {
		setTimeout(() => cb(_products), 100)
	},
  
	buyProducts (products, cb, errorCb) {
		setTimeout(() => {
		// simulate random checkout failure.
		(Math.random() > 0.5 || navigator.webdriver)
			? cb()
			: errorCb()
		}, 100)
	}
  }