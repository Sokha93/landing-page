import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../main';

const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location])

    return <Main />
};

export default HomePage;