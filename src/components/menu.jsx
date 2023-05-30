import React,{useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {FaRegWindowClose} from "react-icons/fa"
const Menu = () => {

  const[nav,setNav] = useState(false);

  const handleNav=()=>{
    setNav(!nav)
    
  }
  return (
    <div className='bg-hero-bg h-screen bg-cover bg-center'>
        <nav className='flex fustify-between text-white items-center p-6'>
          <h1 className="font-bold text-2xl">React& Tailwind</h1>
          <ul className={nav ? 'hidden':'hidden md:flex p-4 items-center'}>
            <li className='p-4'>Home</li>
            <li className='p-4'>Podcast</li>
            <li className='p-4'>Movie</li>
            <li className='p-4'>Books</li>
            <li className='p-4'>Gym</li>
          </ul>

          <div className="block md:hidden" onClick={handleNav}>
           {nav ? <FaRegWindowClose size={30}/> :<GiHamburgerMenu size={30} />}
          </div>
          <div className={nav ? 'fixed top-0 h-full right-0 pt-10 text-center border border-black bg-black w-[40%]' :'fixed right-[-100%]'}>
            <ul className="py-4">
              <li className='cursor-default py-4 pb-8 hover:text-blue-100'>Home</li>
              <li className='cursor-default py-4 pb-8 hover:text-blue-100'>Podcast</li>
              <li className='cursor-default py-4 pb-8 hover:text-blue-100'>Movie</li>
              <li className='cursor-default py-4 pb-8 hover:text-blue-100'>Books</li>
              <li className='cursor-default py-4 pb-8 hover:text-blue-100'>Gym</li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Menu;