import React, {useState, useEffect} from 'react';
import UseLanguage from '../../../context/multipleLanguages/hook';
import Select from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';


const SwitchLang = () => {

    const { language, setLanguage, t } = UseLanguage();
    
    const handleChange = (event) => {
     setLanguage(event.target.value)   
    }

    return (
        <div>
            <select value={language} onChange={handleChange} name="" id="">
                <option value="russian">rus</option>
                <option value="english">eng</option>
            </select>
        </div>
    )
};

export default SwitchLang;