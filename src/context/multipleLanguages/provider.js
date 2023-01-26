import React, { useEffect, useState } from 'react';
import LanguageContext from './context';
import Translation from './Data.json';

const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState("russian");
    const [t, setT] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('languages', JSON.stringify(language));
        if(language === "english") {
            setT(Translation.english)
        } else if (language === "russian") {
            setT(Translation.russian)
        }
    }, [language])

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t,
            }}
        >
            { children }
        </LanguageContext.Provider>
    )
};

export default LanguageProvider;