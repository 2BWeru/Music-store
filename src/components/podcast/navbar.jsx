import React ,{useState} from "react";
import {AiOutlineCloseSquare,AiOutlineMenu} from 'react-icons/ai'  
import logo from "../../assets/146af7d996fa9cf77b40908c6694f8d8-removebg-preview.png";
const Navbar = () => {
  const[nav,setNav] =useState(false)

  const handleNav= () =>{
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1246px] px-4 mx-auto text-black bg-[#fefae0]">
      <h1 className="w-full text-3xl font-bold">SolPodcast</h1>
      <div className={nav ? 'hidden':'hidden md:flex uppercase'}>
        <ul className="flex font-bold text-sm">
          <li className="p-2">Features</li>
          <li className="p-2">About</li>
          <li className="p-2">Categories</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineCloseSquare size={30}/>:<AiOutlineMenu size={30}/>}
      </div>
      <div className={nav ? 'bg-yellow-100 fixed h-full w-[60%] mx-auto top-0 px-4 left-0 ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold">SolPodcast</h1>
      <ul className="flex flex-col font-bold text-md pt-12">
          <li className="py-10 mt-10  border-b border-b-gray-700">Features</li>
          <li className="py-10  border-b border-b-gray-700">About</li>
          <li className="py-10 border-b border-b-gray-700">Categories</li>
          <li className="py-10 border-b border-b-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
