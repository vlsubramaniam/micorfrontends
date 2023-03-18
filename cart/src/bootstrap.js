import {faker} from '@faker-js/faker';

const mount = (el) => {
    let cartItems = `<h1>Cart Items</h1>`;
    for (let i=1; i<4; i++) {
        cartItems += `<div> ${faker.company.name()} </div>`
    }
    el.innerHTML = cartItems;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-cart');
    if(el) {
        mount(el)
    }
}

export {mount}