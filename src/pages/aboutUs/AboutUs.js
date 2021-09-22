import React, { useContext } from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import  { LanguageContext } from '../../context/LanguageContext';

function AboutUs() {
    const  { activeLanguage } = useContext(LanguageContext);
    console.log(activeLanguage)
    return (
        <div className="page-container">
            <h2>{content[activeLanguage].aboutUs.title}</h2>
            {/*<p>Dit is je profielpagina!</p>*/}
            <img src={writers} alt="Bob & Betsy"/>
            <p>{content[activeLanguage].aboutUs.writers}</p>
        </div>
    );
}

export default AboutUs;
