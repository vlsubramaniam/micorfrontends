import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Suspense fallback={<Progress />}>
            <Switch>
                <Route path='/auth' component={AuthLazy} />
                <Route path='/' component={MarketingLazy} />
            </Switch>
        </Suspense>
        </BrowserRouter>
    )
}

export default App;