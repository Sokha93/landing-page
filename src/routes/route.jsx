import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/home';
import Registerpage from '../components/register';
import LoginPage from '../components/login';
import Posts from '../components/posts';

const Routers = () => {
    return(
        <Routes>
            <Route 
                path='/register'
                exact 
                element={ <Registerpage /> }
            />
            <Route 
                path="/login"
                exact
                element={ <LoginPage /> }
            />
            <Route 
                path="/"
                exact
                element={ <HomePage /> }
            />
            <Route 
                path="posts"
                exact
                element={ <Posts /> }
            />
        </Routes>
    )
};

export default Routers;