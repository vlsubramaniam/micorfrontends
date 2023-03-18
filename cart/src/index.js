import {faker} from '@faker-js/faker';

const div = document.getElementById('dev-cart');

let cartItems = `<h1>Cart Items</h1>`;

for (let i=1; i<4; i++) {
    cartItems += `<div> ${faker.company.name()} </div>`
}

div.innerHTML = cartItems;