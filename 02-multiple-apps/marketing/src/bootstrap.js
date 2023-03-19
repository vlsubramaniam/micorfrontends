import React from 'react';
import ReactDOM  from 'react-dom';


const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>, el
    );
}

if(process.env.NODE_ENV === 'development') {
    const marketingRoot = document.getElementById('_marketing-dev-root');
    if(marketingRoot) {
        mount(marketingRoot);
    }
}

export {mount}