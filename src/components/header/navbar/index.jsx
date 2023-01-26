import React from 'react';
import { Navbar } from '../../../styles/styledComponents/header';
import useLanguage from '../../../context/multipleLanguages/hook';

const Nav = () => {

    const { t } = useLanguage();
    return(
        <Navbar>
            <ul>
                <li><a href="#">{ t.about_us }</a></li>
                <li><a href="#">{t.news}</a></li>
                <li><a href="#">{t.contacts}</a></li>
                <li><a href="#">{t.interesting}</a></li>
            </ul>
        </Navbar>
    )
};

export default Nav;