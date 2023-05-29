import React from 'react'
import man from '../static/images/Story1a.jpeg';

const Analytics= () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1246px] mx-auto grid md:grid-cols-2'>
          <img className='w-[300px] mx-auto my-4' src={man} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='uppercase font-bold text-green-400'>Music News and Updates</p>
            <h1 className='md:text-4xl sm:text-1xl text-xl font-bold py-2'> Stay informed with the latest news and updates.</h1>
            <p className=''>From major tour announcements and festival lineups to album release dates and award show highlights, we've got your finger on the pulse of the music world.
            From major tour announcements and festival lineups to album release dates and award show highlights, we've got your finger on the pulse of the music world.</p>
            <button className='bg-black text-green-400 rounded-md font-medium w-[200px] mx-auto md:mx-0 py-3 mt-4'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics