import React from 'react'
import banner from "../../assets/pexels-tima-miroshnichenko-5703532-removebg-preview.png"
import music from "../../assets/146af7d996fa9cf77b40908c6694f8d8-removebg-preview.png"
import Navbar from './navbar'
import Creators from './creators'

const Hero = () => {
  return (
  <>
   <Navbar />
    <div className='w-full h-screen px-4 py-16 bg-[#fefae0]'>
        <div className='max-w-[1246px] mx-auto grid lg:grid-cols-3 gap-8'>
          <div className='flex flex-col lg:col-span-2 text-center justify-center md:text-start '>
              <h1 className='text-purple-600 font-bold text-2xl'>New Session Available</h1>
              <p className='py-2 font-bold md:text-6xl sm:text-5xl text-3xl'>The best place to listen to your favourite <span className='text-purple-600'>podcast</span></p>
              <p className='pt-2 text-sm font-normal'>Dive into in-depth profiles of both emerging and established artists from various genres. Discover their unique journeys, musical influences, and the stories behind their most popular tracks. Get a behind-the-scenes look at their creative process and gain insights into their future projects.</p>
                <div className='md:flex py-4'>
                    <button className='bg-purple-400 text-white py-3 rounded-md w-[200px]'>Start Trial For Free!</button>
                    <button className='py-3 rounded-md w-[200px] font-medium'>How it works</button>
                </div>
          </div>
          {/* <div className='flex mx-auto'>
            <img className='w-[400px] md:relative bg-orange-500 px-6 py-8 rounded-tl-full rounded-tr-full md:bottom-[-40%] bottom-0' src={banner} alt=""/>
            <img className='w-[400px]  hidden md:block px-2 ml-10 top-0 bg-blue-500 px-6 py-8 rounded-bl-full rounded-br-full top-[-20%]' src={banner} alt=""/>

          </div> */}
        </div>
    </div>
    <Creators />
  </>
  )
}

export default Hero;