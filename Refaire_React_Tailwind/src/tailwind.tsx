import React from 'react'

function tailwind() {
  return (
    <div className='m-3'>
    <h1 className='text-red-400'>
      My title
    </h1>
    <section className='container border-2 border-blue-500 mx-auto'>
      <div className='md:columns-2 lg:columns-4'>
        <section className='border-2 border-green-600'>
          Section 1
        </section>
        <section className='border-2 border-green-600'>
          Section 2
        </section>
        <section className='border-2 border-green-600'>
          Section 3
        </section>
        <section className='border-2 border-green-600'>
          Section 4
        </section>
      </div>
    </section>
    <h2 className='text-2xl font-bold underline uppercase'>
      Sous titre
    </h2>
    <div className='max-w-md border border-gray-300 shadow-lg rounded-lg'>
      <a href="#">
        <img src='/images/salade.jpg' alt='Salade' className='rounded-t-lg'/>
      </a>
      <div className='p-5'>
        <a href="#" className='mb-2 text-2xl font-bold text-gray-900'>
          <h2>Titre de l'article</h2>
        </a>
        <p className='mb-3 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda nisi corporis praesentium neque dignissimos? Incidunt veritatis tenetur eum dolorum?
        </p>
        <a href="#" className='inline-flex items-center bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-900 text-white text-sm font-medium'>
          Lire la suite
        </a>
      </div>
    </div>
    <div className='container mx-auto rounded my-3 border border-gray-200 shadow-lg p-10 '>
      <h2 className='text-blue-700 font-bold text-2xl mb-6'>
        Connexion
      </h2>
      <form action="">
        <div className="mb-6">
          <label htmlFor="email" className='block text-sm text-gray-500 font-medium mb-2'>E-mail</label>
          <input type="email" name='email' id='email' className='border border-gray-300 bg-gray-50 text-gray-900 text-sm p-2 w-full rounded-lg focus:ring-yellow-600'/>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className='block text-sm text-gray-500 font-medium mb-2'>Mot de passe</label>
          <input type="password" name='password' id='password' className='border border-gray-300 bg-gray-50 text-gray-900 text-sm p-2 w-full rounded-lg focus:ring-yellow-600'/>
        </div>
        <div className="mb-6">
          <button type='submit' className='inline-flex items-center bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-900 text-white text-sm font-medium'>
            Valider
          </button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default tailwind