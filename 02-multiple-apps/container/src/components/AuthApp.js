import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

const AuthApp = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current,
            {
                initialPath: history.location.pathname,
                onNavigate: ({ pathname: nextPathName }) => { // location.pathname
                    const { pathname } = location;
                    if (pathname !== nextPathName) {
                        history.push(nextPathName);
                    }
                }
            })
        history.listen(onParentNavigate);
    }, [])
    return (
        <div ref={ref} />
    )
}


export default AuthApp
