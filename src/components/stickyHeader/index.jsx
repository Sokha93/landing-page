import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import useLanguage from '../../context/multipleLanguages/hook'; 
import { DownHeaderBlock } from '../../styles/styledComponents/downHeader';

const StickyHeader = () => {

    const { t } = useLanguage();
    const [isSticky, setIsSticky] = useState(false);

    const classes = {
        sticky: {
            background: isSticky 
            ? '#fff'
            : '',
            width: '100%',
            top: isSticky ? 0 : '48px',
            zIndex: 10,
            height: '56px',
            borderBottom: '1px solid #838387',
            opacity: 0.9,
            position: isSticky
            ? 'fixed'
            : 'absolute'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%'
        }
    }

    const handleScroll = () => {
        const windowScroll = window.scrollY;
        if(windowScroll > 48){
            setIsSticky(true);
        }else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <div style={classes.sticky}>
            <Container style={classes.container}>
                <a style={{color: '#000'}}>{ t.all_projects }</a>
                <select name="" id="">
                    <option value="">awd</option>
                    <option value="">awd</option>
                    <option value="">awd</option>
                </select>
            </Container>
        </div>
    )
};

export default StickyHeader;