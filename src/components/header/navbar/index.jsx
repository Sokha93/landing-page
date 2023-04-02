import React from 'react';
import { Navbar } from '../../../styles/styledComponents/header';
import useLanguage from '../../../context/multipleLanguages/hook';
import { Link } from 'react-router-dom';

const Nav = () => {

    const { t } = useLanguage();
    return(
        <Navbar>
            <ul>
                <li><a href="#">{ t.about_us }</a></li>
                <li><a href="#">{t.news}</a></li>
                <li><a href="#">{t.contacts}</a></li>
                <li><a href="#">{t.interesting}</a></li>
                <li><Link to="/posts">{t.posts}</Link></li>
                
            </ul>
        </Navbar>
    )
};

export default Nav;