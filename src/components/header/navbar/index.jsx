import React from 'react';
import { Navbar } from '../../../styles/styledComponents/header';

const Nav = () => {
    return(
        <Navbar>
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">news</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">interesting</a></li>
            </ul>
        </Navbar>
    )
};

export default Nav;