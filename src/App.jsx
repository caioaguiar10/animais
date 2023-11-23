// src/App.jsx
import React, { useState } from 'react';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';
import './App.css';

const App = () => {
  const [animals, setAnimals] = useState([]);

  const addAnimal = (animalData) => {
    setAnimals((prevAnimals) => [
      ...prevAnimals,
      { ...animalData, id: Date.now() },
    ]);
  };

  const removeAnimal = (id) => {
    setAnimals((prevAnimals) => prevAnimals.filter((animal) => animal.id !== id));
  };

  const toggleStatus = (id) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) =>
        animal.id === id ? { ...animal, location: animal.location === 'lost' ? 'found' : 'lost' } : animal
      )
    );
  };

  return (
    <div>
      <h1>Animais Encontrados e Perdidos</h1>
      <AnimalForm onAddAnimal={addAnimal} />
      <AnimalList
        animals={animals}
        onRemoveAnimal={removeAnimal}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
};

export default App;