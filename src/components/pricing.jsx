import React from "react";
import scene from "../static/images/story1b.jpeg";

export const Pricing = () => {
  return (
    <div className="w-full py-[18rem] px-4 bg-white">
      <div className="max-w-[1246px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto bg-white mt-[-3rem]"
            src={scene}
            alt="/"
          />
          <p className="text-2xl font-bold py-4 text-center">Single User</p>
          <p className="text-center font-bold text-4xl">120$</p>
          <div className="flex flex-col justify-between items-center py-8">
            <p className="py-2 font-bold border-b mx-8 mt-8">500 Gb Storage</p>
            <p className="py-2 font-bold border-b mx-8 ">Download Songs</p>
            <p className="py-2 font-bold border-b mx-8 ">Stream Offline</p>
            <p className="py-2 font-bold border-b mx-8 ">Join Channels</p>
          </div>
          <button className="bg-green-400 text-black w-[200px] rounded-md font-medium py-3 mx-auto">
            Start Trial
          </button>
        </div>
        {/* card 2 */}
        <div className="bg-gray-100 w-full shadow-xl flex flex-col rounded-lg p-4 my-8 md:my-0 hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto bg-white mt-[-3rem]"
            src={scene}
            alt="/"
          />
          <p className="text-2xl font-bold py-4 text-center">Single User</p>
          <p className="text-center font-bold text-4xl">120$</p>
          <div className="flex flex-col justify-between items-center py-8">
            <p className="py-2 font-bold border-b mx-8 mt-8">500 Gb Storage</p>
            <p className="py-2 font-bold border-b mx-8 ">Download Songs</p>
            <p className="py-2 font-bold border-b mx-8 ">Stream Offline</p>
            <p className="py-2 font-bold border-b mx-8 ">Join Channels</p>
          </div>
          <button className="bg-black text-green-400 w-[200px] rounded-md font-medium py-3 mx-auto">
            Start Trial
          </button>
        </div>
        {/* card 3 */}
        <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto bg-white mt-[-3rem]"
            src={scene}
            alt="/"
          />
          <p className="text-2xl font-bold py-4 text-center">Single User</p>
          <p className="text-center font-bold text-4xl">120$</p>
          <div className="flex flex-col justify-between items-center py-8">
            <p className="py-2 font-bold border-b mx-8 mt-8">500 Gb Storage</p>
            <p className="py-2 font-bold border-b mx-8 ">Download Songs</p>
            <p className="py-2 font-bold border-b mx-8 ">Stream Offline</p>
            <p className="py-2 font-bold border-b mx-8 ">Join Channels</p>
          </div>
          <button className="bg-green-400 text-black w-[200px] rounded-md font-medium py-3 mx-auto">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
