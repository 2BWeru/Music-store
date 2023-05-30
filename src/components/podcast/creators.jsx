import React from "react";
import face1 from "../../assets/pexels-andrea-piacquadio-3786522-removebg-preview.png"
import face2 from "../../assets/pexels-mart-production-7605223-removebg-preview.png"
import face3 from "../../assets/pexels-somie-14905029-removebg-preview.png"
import Analytics from "./analytics";

const Creators = () => {
  return (
  <>
    <div className="w-full bg-white text-black py-16 px-6">
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
            Most popular Creators
          </h1>
          <p>
            Discover their unique journeys, musical influences, and the stories
            behind their most popular tracks.{" "}
          </p>
          <button className="w-[200px] rounded-md py-3 bg-purple-600 text-white mt-2">
            View All 
          </button>
        </div>
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="w-full flex mt-4 border rounded-lg border-black bg-orange-600 hover:scale-105 duration-300">
                <img className="w-[300px]" src={face1} alt="" />
                <div className="flex flex-col px-2 mt-8">
                    <h2 className="font-bold">Get to know about user Research</h2>
                    <p className="text-sm py-2">Stay up-to-date with our comprehensive music reviews that cover the latest album releases, singles, and EPs.</p>
                    <button className="bg-black text-white w-[200px] my-2 rounded-md py-3 md:mx-auto mx-0">Play Now</button>
                </div>
            </div>
            <div className="flex mt-4 w-full border rounded-lg border-black bg-yellow-400 hover:scale-105 duration-300">
                <img className="w-[300px]" src={face2} alt="" />
                <div className="flex flex-col px-2 mt-8">
                    <h2 className="font-bold">Get to know about marketing</h2>
                    <p className="text-sm py-2">Stay up-to-date with our comprehensive music reviews that cover the latest album releases, singles, and EPs.</p>
                    <button className="bg-black text-white w-[200px] my-2 rounded-md py-3 md:mx-auto mx-0">Play Now</button>
                </div>
            </div>
            <div className="flex mt-4 w-full border rounded-xl border-black bg-teal-600 hover:scale-105 duration-300">
                <img className="w-[300px]" src={face3} alt="" />
                <div className="flex flex-col px-2 mt-8">
                    <h2 className="font-bold">How to manage money well</h2>
                    <p className="text-sm py-2">Stay up-to-date with our comprehensive music reviews that cover the latest album releases, singles, and EPs.</p>
                    <button className="bg-black text-white w-[200px] my-2 rounded-md py-3 md:mx-auto mx-0">Play Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  <Analytics />
  </>
  );
};

export default Creators;
