import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='text-gray-600 font-body'>
      <div className=' dark:bg-black'>
        <div>
          <nav>
            <div>
              <h1 className='font-bold uppercase p-4 border-b border-gray-300'>
                <a href="/">Mon super Restaurant</a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-700 font-bold'>
                <a href="#">
                  <span>Accueil</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>A-propos</span>
                </a>
              </li>
              <li><a href="#">
              <span>Contactez-nous</span>
              </a></li>
            </ul>
          </nav>
        </div>
        <main className='px-16 py-6'>
          <div>
            <a href="#" className='text-primary'>Se connecter</a>
            <a href="#" className='text-primary'>Créer un compte</a>
          </div>
          <header>
            <h2 className='text-gray-700 text-6xl font-semibold'>
              Recettes
            </h2>
            <h3 className='text-2xl font-semibold'>
              Pour les tailwinders
            </h3>
          </header>
          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
              Les dernieres recettes
            </h4>
            <div className='mt-8'>
              {
                // cartes cards de nos recettes
              }
              <div>
                <img src="/images/steak.jpg" alt="Steak frittes" />
                <div>
                  <span>Steak Frittes</span>
                  <span>Recette par Florian</span>
                </div>
              </div>
            </div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
              Les recettes les plus populaire
            </h4>
            <div className='mt-8'>
              {
                // cartes de nos recettes les plus populaire
              }
            </div>
            <div>
              <div className='bg-secondary-100 text-secondary-200'>
                Plus
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
