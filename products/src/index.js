import {faker} from '@faker-js/faker';

const div = document.getElementById('dev-products');
let products = '<h1><u> Products List <u></h1>';

for (let i=1; i<=5; i++) {
    products += `<li>${faker.commerce.productName()}</li>`
}

div.innerHTML = `<ul>${products}</ul>`;