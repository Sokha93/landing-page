import { Container } from '@mui/system';
import React from 'react';
import EmailForm from './emailForm';
import FooterNavs from './footerNavs';
import SocialLinks from './socialLinks';

const Footer = () => {
    return (
        <Container>
            <FooterNavs />
            <EmailForm />
            <SocialLinks />
        </Container>
    )
};

export default Footer;