import React from "react";
import {IoIosCheckmarkCircle} from "react-icons/io"
const Analytics = () => {
  return (
    <div className="w-full pt-20 mx-auto py-18 px-4 max-w-[1246px]">
      <div className="w-full flex flex-col">
          <div className="text-center md:text-start">
              <h1 className="font-bold text-2xl py-4 md:text-4xl">What makes us<br /> <span className="text-purple-600">Unique</span> from others</h1>
              <p className="text-xl">Explore our diverse range of content designed to inspire, entertain, and inform.</p>
              <ul className="max-w-md space-y-1 text-xl list-inside mx-auto py-4 md:mx-0">
                  <li className="flex items-center"><IoIosCheckmarkCircle className="text-green-600"/>Explore our diverse range of content.</li>
                  <li className="flex items-center"><IoIosCheckmarkCircle className="text-green-600"/>Explore our diverse range of content.</li>
                  <li className="flex items-center"><IoIosCheckmarkCircle className="text-green-600"/>Explore our diverse range of content.</li>
              </ul>
              <button className="mt-2 bg-purple-600 text-white w-[200px] py-3 rounded-lg mx-auto">Know More</button>
          </div>
          <div className="flex">
                <img src="" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Analytics;
