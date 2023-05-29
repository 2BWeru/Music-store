import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black w-full px-4 py-16 text-white">
      <div className="max-w-[1246px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-5xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay upto date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full pb-2">
            <input className="py-3 text-black rounded-md w-full" type="email" placeholder=" Enter email" />
            <button className="bg-green-400 text-black rounded-md w-[200px] mx-auto md:mx-0 py-3 sm:ml-2 md:ml-2 mt-4 sm:mt-0">Notify Me</button>
          </div>
          <p className="py-2">We Care about the protection of your data <span className="text-green-400">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
