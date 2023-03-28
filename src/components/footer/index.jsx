import { Container } from '@mui/system';
import React from 'react';
import EmailForm from './emailForm';
import FooterNavs from './footerNavs';
import SocialLinks from './socialLinks';

const Footer = () => {
    return (
            <footer style={{
                marginTop: '40px',
                width: '100%',
                height: '100%',
                minHeight: '220px',
                backgroundColor: '#272729',
                borderTop: '12px solid #564D66',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                    <SocialLinks />
                    <FooterNavs />
                {/* <EmailForm /> */}
            </footer>
    )
};

export default Footer;