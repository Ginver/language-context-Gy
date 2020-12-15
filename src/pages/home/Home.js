import React from 'react';

const content = {
  nl: {
    title: 'Planten zijn een verreiking voor je huis',
    introText: 'Planten zijn organismen die zich niet kunnen voortbewegen en die fotosynthese vertonen. De naam Plantae wordt niet meer voor een taxonomische eenheid gebruikt. Bij de uitdrukking planten en bloemen gaat het in het gewone spraakgebruik vaak om kruidachtige soorten van de bedektzadigen (Angiospermae), bijvoorbeeld sierplant, kamerplant, tuinplant, kuipplant, potplant, snijbloemen. Deze worden dan voor een deel tegenover de houtige planten zoals de struiken en bomen geplaatst. Samen vormen deze slechts een klein deel van de Viridiplantae.',

  },
  es: {
    title: 'Las plantas son una extensión de tu hogar',
   introText: 'Las plantas son organismos que no pueden moverse y que exhiben fotosíntesis. El nombre Plantae ya no se usa para una unidad taxonómica. En el uso común, el término plantas y flores a menudo se refiere a especies herbáceas de la planta con flores (Angiospermae), por ejemplo, planta ornamental, planta de interior, planta de jardín, planta de contenedor, planta de maceta, flores cortadas. Luego, estos se colocan parcialmente frente a las plantas leñosas, como arbustos y árboles. Juntos, estos constituyen solo una pequeña parte de Viridiplantae.',
  },
};

function Home() {
  return (
    <div className="page-container">
      <h2>{content.nl.title}</h2>
      <p>{content.nl.introText}</p>
    </div>
  );
}

export default Home;
