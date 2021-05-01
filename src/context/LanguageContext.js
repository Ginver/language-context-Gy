import React, { createContext, useState}  from 'react';


export const LanguageContext = createContext({})

function LanguageContextProvider({ children }) {
    // hier komt straks de state waarin we de context-data plaatsen
    const [language, toggleLanguage] = useState('nl');

    function setLanguageNl() {
        toggleLanguage('nl')
    }
    function setLanguageEs() {
        toggleLanguage('es')
    }
    const data = {
        activeLanguage: language,
        setNl: setLanguageNl,
        setEs: setLanguageEs,
    }
    return (
        <LanguageContext.Provider value={data}>
            { children }
        </LanguageContext.Provider>
    )
}
export default LanguageContextProvider;
