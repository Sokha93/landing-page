import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import useLanguage from '../../context/multipleLanguages/hook'; 

const StickyHeader = () => {

    const { t, language, setLanguage } = useLanguage();
    const [isSticky, setIsSticky] = useState(false);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

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
                <a>{ t.all_projects }</a>
                <select name="" id="" value={language} onChange={handleChange}>
                    <option value="russian">{language === 'russian' ? t.russian_lang : t.lang_ru }</option>
                    <option value="english">{language === 'english' ? t.lang_en : t.english_lang }</option>
                </select>
            </Container>
        </div>
    )
};

export default StickyHeader;