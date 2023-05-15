import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const cardsListe = [
    {
      src: '/images/steak.jpg',
      alt: 'Steak frittes',
      title: 'Steak Frittes',
      author: 'Recette par Florian',
      duration: '15 min' 
    },
    {
      src: '/images/salade.jpg',
      alt: 'Salade',
      title: 'Salade',
      author: 'Recette par Julien',
      duration: '5 min' 
    },
    {
      src: '/images/soupe.jpg',
      alt: 'Soupe',
      title: 'Soupe',
      author: 'Recette par Marine',
      duration: '16 min' 
    }
  ];

  return (
   <div>
    Hello Ntsoa
   </div>
  );
}

export default App;
