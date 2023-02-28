import React, {useState, useEffect} from 'react';
import UseLanguage from '../../../context/multipleLanguages/hook';
import Select from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import './styles.css'


const SwitchLang = () => {

    const { language, setLanguage, t } = UseLanguage();
    
    const handleChange = (event) => {
     setLanguage(event.target.value)   
    }

    return (
        <div>
            <div className='select-wrapper'>
                <select value={language} onChange={handleChange} className='select'>
                    <option className='option' value="russian">{language === 'russian' ? t.russian_lang : t.lang_ru}</option>
                    <option className='option' value="english">{language === 'russian' ? t.english_lang : t.lang_en}</option>
                </select>
            </div>
        </div>
    )
};

export default SwitchLang;