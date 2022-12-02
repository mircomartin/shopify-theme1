// Put your application javascript here

const productsCard = document.querySelectorAll('.product-card.grids');

if ( productsCard.length > 0) {
		
	
	for (let i = 0; i < productsCard.length; i++) {

		const element = productsCard[i];
		const buttonAddToCart = element.querySelector('#addtocartGrid')
		
			buttonAddToCart.addEventListener('submit', e => {
				e.preventDefault()
				
				const idProductElement = element.querySelector('[name="id"]');
				const idProduct = idProductElement.getAttribute('value')
	
				let formData = {
					'items': [{
					 'id': idProduct,
					 'quantity': 1
					 }]
				 };
				 fetch(window.Shopify.routes.root + 'cart/add.js', {
					 method: 'POST',
					 headers: {
						 'Content-Type': 'application/json'
					 },
					 body: JSON.stringify(formData)
				 })
				 .then(response => {
					 return response.json();
				 })
				 .catch((error) => {
					 console.error('Error:', error);
				 });

			})

		}

}

