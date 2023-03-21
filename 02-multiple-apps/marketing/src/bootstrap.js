import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';



const mount = (el, {onNavigate}) => {
    const history = createMemoryHistory();
    history.listen(onNavigate);
    ReactDOM.render(
        <App history={history} />, el
    );
}

if (process.env.NODE_ENV === 'development') {
    const marketingRoot = document.getElementById('_marketing-dev-root');
    if (marketingRoot) {
        mount(marketingRoot);
    }
}

export { mount }