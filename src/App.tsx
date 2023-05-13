import React from 'react';
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
  ]
  return (
    <div className='text-gray-600'>
      <div className=' dark:bg-black grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div>
              <h1 className='font-bold uppercase p-4 border-b border-gray-300'>
                <a href="/" className='hover:text-gray-800'>Mon super Restaurant</a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-700 font-bold'>
                <a href="#" className='px-4 flex justify-end items-center border-r-4 border-primary'>
                  <span>Accueil</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                </a>
              </li>
              <li>
                <a href="#" className='px-4 flex justify-end items-center border-r-4 border-white'>
                  <span>A-propos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>

                </a>
              </li>
              <li>
                <a href="#" className='px-4 flex justify-end items-center border-r-4 border-white'>
                  <span>Contactez-nous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href="#" className='text-primary btn border-primary border-2 hover:bg-primary hover:text-white'>Se connecter</a>
            <a href="#" className='text-primary ml-2 btn border-primary border-2 hover:bg-primary hover:text-white'>Créer un compte</a>
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
            <div className='mt-8 grid  md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {
                // cartes cards de nos recettes
                cardsListe.map((item, index) => 
                  <div key={index} className='card hover:shadow-lg'>
                    <img className='w-full h-32 sm:h-48 object-cover' src={item.src} alt={item.alt} />
                    <div className='m-4'>
                      <span className='font-bold'>
                        {item.title}
                      </span>
                      <span className='text-gray-500 block text-sm'>
                        {item.author}
                      </span>
                    </div>
                    <div className='badge'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mx-1 inline-block">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <span>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                )
              }
            </div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
              Les recettes les plus populaire
            </h4>
            <div className='mt-8'>
              {
                // cartes de nos recettes les plus populaire
              }
            </div>
            <div className='flex justify-center'>
              <div className='bg-secondary-100 text-secondary-200 btn hover:shadow-inner'>
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
