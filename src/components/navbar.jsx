import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1246px] px-4 mx-auto text-white">
      <h1 className="w-full text-bold text-green-400 text-3xl">Podcast</h1>

      <ul className="hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Pricing</li>
        <li className="p-4">Category</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>}
       
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] bg-[#000300] h-full border-r border-r-gray-900 ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className="w-full text-bold text-green-400 m-4 text-3xl">
          Podcast
        </h1>
        <ul className="pt-12 uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
          <li className="p-4 border-b border-b-gray-600">Pricing</li>
          <li className="p-4 border-b border-b-gray-600">Category</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
