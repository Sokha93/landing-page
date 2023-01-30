import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import useLanguage from '../../context/multipleLanguages/hook'; 
import { DownHeaderBlock } from '../../styles/styledComponents/downHeader';

const StickyHeader = () => {

    const { t } = useLanguage();
    const [isSticky, setIsSticky] = useState(false);

    const classes = {
        sticky: {
            backgroundColor: '#fff',
            background: isSticky 
            ? '#fff'
            : '',
            width: '100%',
            top: isSticky ? 0 : '48px',
            zIndex: 999,
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #838387',
            opacity: 0.9,
            position: isSticky
            ? 'fixed'
            : 'absolute'
        },
        stickyBlock: {
            backgroundColor: 'green'
        }
    }

    const handleScroll = () => {
        const windowScroll = window.scrollY;
        if(windowScroll > 10){
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
        <div>
            <div style={classes.sticky}>
                <Container>
                    <div className={classes.stickyBlock}>
                        <a>{ t.all_projects }</a>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default StickyHeader;