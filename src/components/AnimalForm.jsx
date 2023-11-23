// src/components/AnimalForm.jsx
import React, { useState } from 'react';

const AnimalForm = ({ onAddAnimal }) => {
  const [animalData, setAnimalData] = useState({
    photoUrl: '',
    breed: '',
    location: 'lost',
    type: 'lost',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnimal(animalData);
    setAnimalData({
      photoUrl: '',
      breed: '',
      location: 'lost',
      type: 'lost',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Foto URL:
        <input
          type="text"
          name="photoUrl"
          value={animalData.photoUrl}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Raça:
        <input
          type="text"
          name="breed"
          value={animalData.breed}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Local:
        <input
          name="location"
          value={animalData.location}
          onChange={handleInputChange}
        >
          
        </input>
      </label>
      <label>
        Tipo:
        <select
          name="type"
          value={animalData.type}
          onChange={handleInputChange}
        >
          <option value="lost">Perdido </option>
          <option value="rescued">Salvo</option>
        </select>
      </label>
      <button type="submit">Adicionar Animal</button>
    </form>
  );
};

export default AnimalForm;