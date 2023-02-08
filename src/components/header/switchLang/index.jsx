import React, {useState, useEffect} from 'react';
import UseLanguage from '../../../context/multipleLanguages/hook';
import Select from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
// import { useStyles } from '../../../styles/makeStyles/register';


const SwitchLang = () => {

    const { language, setLanguage, t } = UseLanguage();
    
    const handleChange = (event) => {
     setLanguage(event.target.value)   
    }

    // const classes = {
    //     muiInput: {
    //         color: '#f34g32'
    //     },
    //     muiSelect: {
    //         top: '-3px',
    //         maxHeight: '28px',
    //         maxWidth: '70px',
    //         color: '#fff',
            
    //     },
    //     muiLabel: {
    //         color: '#fff',
    //         top: '-6px',
            
    //     },
    //     muiFormControl: {
    //         m: 1,
    //         '& .MuiOutlinedInput': {
    //             backgroundColor: 'red'
    //         }
    //     }
    // }

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