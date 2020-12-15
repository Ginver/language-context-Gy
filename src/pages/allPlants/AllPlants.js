import React from 'react';

const content = {
  nl: {
    title: 'Alle planten',
    text: 'Wij houden nog veel meer planten dan hieronder beschreven staan, maar dit zijn wel de bomen  waar we het meest trots op zijn. Vooral omdat we ze allemaal in onze woonkamer staan en dat is best krap.',
    plants: [
      'Hartbladige els',
      'Zwarte els',
      'Witte els',
      'Japanse Kaukasische boom',
      'Chinese berk',
      'Papierberk',
      'Witte Himalayaberk of Himalayaberk',
      'Boomhazelaar of Turkse hazelaar',
      'Lambertsnoot',
    ]
  },
  es: {
    title: 'Todos las plantas',
    text: 'Conservamos muchas más plantas de las que se describen a continuación, pero estos son los árboles de los que estamos más orgullosos. Sobre todo porque los tenemos todos en nuestra sala de estar y eso es bastante ajustado.',
    plants: [
      'Aliso de hojas de corazón',
      'Aliso negro',
      'Aliso blanco',
      'Árbol caucásico japonés',
      'Abedul chino',
      'Abedul de papel',
      'Abedul blanco del Himalaya o abedul del Himalaya',
      'Tree Hazel o Turkish Hazel',
      'Nuez de Lambert',
    ],
  },
};

function AllPlants() {
  return (
    <div className="page-container">
      <h2>{content.nl.title}</h2>
      <p>{content.nl.text}</p>
      <ul>
        {content.nl.plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
