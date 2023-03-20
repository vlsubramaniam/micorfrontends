import React from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <MarketingApp />
        </BrowserRouter>
    )
}

export default App;