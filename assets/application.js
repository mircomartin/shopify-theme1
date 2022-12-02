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

const openFilter = document.querySelector('#filter-grid');
const filterWrap = document.querySelector('.filters-wrap');
const overlayFilter = document.querySelector('.filter_overlay');
const closeFilter = document.querySelector('.closeFilter');

openFilter.addEventListener('click', (e) => {
	e.preventDefault();
	filterWrap.classList.add('show-filters');
	overlayFilter.classList.remove('hidden');
	overlayFilter.classList.add('block');
	document.querySelector('body').style.overflow = 'hidden';
})
closeFilter.addEventListener('click', (e) => {
	e.preventDefault();
	closeFilterOverlay()
})
overlayFilter.addEventListener('click', (e) => {
	e.preventDefault();
	closeFilterOverlay()
})

function closeFilterOverlay () {
	filterWrap.classList.remove('show-filters');
	overlayFilter.classList.add('hidden');
	overlayFilter.classList.remove('block');
	document.querySelector('body').style.overflow = 'unset';
}