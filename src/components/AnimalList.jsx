// src/components/AnimalList.jsx
import React from 'react';

const AnimalList = ({ animals, onRemoveAnimal, onToggleStatus }) => {
  return (
    <ul>
      {animals.map((animal) => (
        <li key={animal.id}>
          <img src={animal.photoUrl} alt={animal.breed} />
          <div>
            <p>Raça: {animal.breed}</p>
            <p>Localização: {animal.location}</p>
            <p>Tipo: {animal.type}</p>
            <button onClick={() => onRemoveAnimal(animal.id)}>Remove</button>
            <button onClick={() => onToggleStatus(animal.id)}>
              Toggle Status
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;

