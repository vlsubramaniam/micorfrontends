import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />, el
    );
    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location.pathname;
            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }

        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const marketingRoot = document.getElementById('_marketing-dev-root');
    if (marketingRoot) {
        mount(marketingRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount }