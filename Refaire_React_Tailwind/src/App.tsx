import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showMenue, setShowMenue] = useState<string>('hidden md:block');
  const [screenSize, setScreenSize] = useState(0);
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

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  }, [])
  
  useEffect(() => {
    if (window.innerWidth > 768 && showMenue === 'block' )
    setShowMenue('hidden md:block')
  }, [screenSize, showMenue])
  
  const handleClickMenue = () => {
    setShowMenue(showMenue === 'hidden md:block' ? 'block': 'hidden md:block')
  } 
  return (
   <div className='grid md:grid-cols-3 text-gray-600 '>
    <div className='md:col-span-1 md:flex md:justify-end'>
      <nav className='text-right'>
        <div className='flex justify-between items-center border-b border-gray-200'>
          <h1 className='font-bold uppercase p-4'>
            <a href="#" className='hover:text-gray-800'>
              Mon super restaurant
            </a>
          </h1>
          <div className='md:hidden mr-4 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={() => handleClickMenue()}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <ul className={showMenue}>
          <li className='border-r-4 border-red-500 '>
            <a href='#' className='font-bold px-4 text-gray-700 flex justify-end items-center'>
              <span>Accueil</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon_menue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </a>
          </li>
          <li className='border-r-4 border-white'>
            <a href='#' className='px-4 flex justify-end items-center'>
              <span>A-propos</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon_menue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </a>
          </li>
          <li className='border-r-4 border-white'>
            <a href='#' className='px-4 flex justify-end items-center'>
              <span>Conctez-nous</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon_menue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <main className='md:col-span-2'>
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
