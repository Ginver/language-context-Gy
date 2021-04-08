import React from 'react';
import content from '../../data/content.json';

function AllPlants() {
  return (
    <div className="page-container">
      <h2>{content.nl.plants.title}</h2>
      <p>{content.nl.plants.text}</p>
      <ul>
        {content.nl.plants.plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
