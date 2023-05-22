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
    <nav>
      <div>
        <h1>
          <a href="#">
          Mon super restaurant
          </a>
        </h1>
      </div>
      <ul>
        <li>
          <a href='#'>
            Accueil
          </a>
        </li>
        <li>
          <a href='#'>
            A-propos
          </a>
        </li>
        <li>
          <a href='#'>
            Conctez-nous
          </a>
        </li>
      </ul>
    </nav>
    <main>
      <div>
        <span>
          Se connecter
        </span>
        <span>
          Créer un compte
        </span>
      </div>
      <header>
        <h2>
          Recettes
        </h2>
        <h4>
          Pour les Tailwinders
        </h4>
      </header>
      <div>
        <div>
          <h4>
            Les dernières recettes
          </h4>
          <div>
            {
              // cartes cards de nos recettes
              <div>
                <img src="/images/steak.jpg" alt="Steak"/>
                <div>
                  <span>
                    Steak Frittes
                  </span>
                  <span>
                    Recette par Florian
                  </span>
                </div>
              </div>
            }
          </div>
        </div>
        <div>
          <h4>
            Les recettes les plus populaire
          </h4>
          <div>
            {
              // cartes cards de nos recettes
            }
          </div>
        </div>
        <div>
          <div>
            Plus
          </div>
        </div>
      </div>
    </main>
   </div>
  );
}

export default App;
