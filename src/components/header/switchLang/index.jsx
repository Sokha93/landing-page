import React, {useState, useEffect} from 'react';
import UseLanguage from '../../../context/multipleLanguages/hook';


const SwitchLang = () => {


    const styles = {
        select: {

        }
    }

    const { language, setLanguage, t } = UseLanguage();
    
    const handlechange = (event) => {
     setLanguage(event.target.value)   
    }

    return (
        <div>
            <select value={language} onChange={ handlechange }>
                <button style={{color: 'red'}}>
                    sdsdsd
                </button>
                <option value="russian">
                   Русский
                </option>
                <option value="english">
                    English
                </option>
            </select>
        </div>
    )
};

export default SwitchLang;