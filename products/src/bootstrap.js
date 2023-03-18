import { faker } from '@faker-js/faker';

const mount = (el) => {
    let products = '<h1><u> Products List </u></h1>';
    for (let i = 1; i <= 5; i++) {
        products += `<li>${faker.commerce.productName()}</li>`
    }
    el.innerHTML = products;
}


if (process.env.NODE_ENV === 'development') {
    const div = document.getElementById('dev-products');
    if(div) {
        mount(div)
    }
}


export { mount }