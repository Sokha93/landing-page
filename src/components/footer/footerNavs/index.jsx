import React from 'react';
import { Container } from '@mui/material';
import { NavLinks } from './styled';
import { LinksBlock } from '../socialLinks/styled';
import useLanguage from '../../../context/multipleLanguages/hook';

const FooterNavs = () => {
    const {t} = useLanguage();
    return(
        <Container>
            <LinksBlock>
                <NavLinks href="#">{ t.about_us }</NavLinks><span style={{color: '#bdbdbf'}}>&#8226;</span>
                <NavLinks href="#">{t.news}</NavLinks><span style={{color: '#bdbdbf'}}>&#8226;</span>
                <NavLinks href="#">{t.contacts}</NavLinks><span style={{color: '#bdbdbf'}}>&#8226;</span>
                <NavLinks href="#">{t.interesting}</NavLinks>
            </LinksBlock>
            <LinksBlock>
                <span style={{color: '#666666', fontSize: '14px'}}>&#169; 2023 Lorem ipsum</span>
            </LinksBlock>
        </Container>
    )
};

export default FooterNavs;