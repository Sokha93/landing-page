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
            <FormControl
            //  sx={classes.muiFormControl}
            
            >
                <InputLabel 
                // sx={classes.muiLabel}
                 id="demo-simple-select-autowidth-label"><LanguageIcon style={{width: '28px', height: '28px'}}/></InputLabel>
                <Select
                    // sx={classes.muiSelect}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={language}
                    onChange={handleChange}
                    autoWidth
                    label={'language'}
                >
                    <MenuItem 
                    // sx={classes.muiInput} 
                    value={'russian'}>{language === 'russian' ? t.russian_lang : t.lang_ru }</MenuItem>
                    <MenuItem 
                    // sx={classes.muiInput} 
                    value={'english'}>{language === 'english' ? t.lang_en : t.english_lang }</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default SwitchLang;