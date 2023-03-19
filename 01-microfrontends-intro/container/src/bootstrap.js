import { mount as productsMount } from 'products/ProductsList';
import { mount as cartMount } from 'cart/CartItems';


const productsIndex = document.getElementById('products-index');
const cartShow = document.getElementById('cart-show');

productsMount(productsIndex);
cartMount(cartShow);