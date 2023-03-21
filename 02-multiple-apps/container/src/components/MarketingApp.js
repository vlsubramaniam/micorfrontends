import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const ref = useRef(null);
    const history = useHistory();
   
    useEffect(() => {
        mount(ref.current, {
            onNavigate: ({pathname: nextPathName}) => { // location.pathname
                const {pathname} = location;
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }                
            }
        })
    })
    return (
        <div ref={ref} />
    )
}


export default MarketingApp
