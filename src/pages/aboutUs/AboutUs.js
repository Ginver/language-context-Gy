import React from 'react';
import writers from '../../assets/bob_betsy.jpg'

const content = {
  nl: {
    title: 'Over ons',
    writers: 'Wij, Bob en Betsy, zijn altijd al plantenliefhebbers geweest. We hebben daarom heel bewust een groter huis gekocht zodat we er nog meer planten in kunnen zetten, want het loopt een beetje uit de hand. We hebben wel lekker veel zuurstof binnen. Wij vinden het leukst om tropische planten te houden, want die hebben veel zorg nodig in een Nederlands klimaat. We gaan ieder jaar 4 keer naar Spanje om daar op plantjesjacht te gaan. ',

  },
  es: {
    title: 'Sobre nosotros',
    writers: 'Nosotros, Bob y Betsy, siempre hemos sido amantes de las plantas. Por lo tanto, compramos deliberadamente una casa más grande para poder poner aún más plantas en ella, porque se está saliendo un poco de control. Tenemos mucho oxígeno adentro. Preferimos mantener plantas tropicales, porque requieren mucho cuidado en un clima holandés. Cada año vamos a España 4 veces a cazar plantas allí.',
  },
};

function AboutUs() {
  return (
    <div className="page-container">
      <h2>{content.nl.title}</h2>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content.nl.writers}</p>
    </div>
  );
}

export default AboutUs;
