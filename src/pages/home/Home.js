import React, { useContext} from 'react';
import content from '../../data/content.json';
import { LanguageContext } from '../../context/LanguageContext';

function Home() {
    const  { activeLanguage } = useContext(LanguageContext);

    return (
        <div className="page-container">
            <h2>{content[activeLanguage].home.title}</h2>
            <p>{content[activeLanguage].home.introText}</p>
        </div>
    );
}

export default Home;
