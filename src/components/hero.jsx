import React from 'react'

const hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col text-center justify-center'>
            <p className='text-green-400 p-2 text-2xl font-bold'>New Session Available</p>
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold md:py-6'>Your Favourite Podcast</h1>
            <div>
                <p className='md:text-3xl sm:text-1xl text-xl py-6 font-bold'>The best place to listen to your favourite Podcast</p>
            </div>
            <p className='md:text-2xl font-bold text-gray-500'>Dive into in-depth profiles of both emerging and established artists from various genres. </p>
            <button className='bg-green-400 w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default hero