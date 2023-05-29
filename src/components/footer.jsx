import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1246px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="">
          <h1 className="w-full text-bold text-green-400 m-4 text-3xl">
            Podcast
          </h1>
          <p>
            Receive a curated selection of upcoming concerts, music festivals,
            and local events in your area. Stay informed about ticket sales,
            lineup announcements, and exclusive discounts.
          </p>
          <div className="flex justify-between md:w-[75%] my-5">
            <FaFacebookSquare size={28} />
            <FaTwitterSquare size={28} />
            <FaDribbbleSquare size={28} />
            <FaGithubSquare size={28} />
            <FaInstagramSquare size={28} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-0 ml-0 md:mt-12 ml-20 ">
          <div>
            <h6 className="font-medium text-gray-500 border-b py-2 border-b-gray-500">Solutions</h6>
            <ul className="">
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Category</li>
              <li className="py-2 text-sm">Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-500 border-b py-2 border-b-gray-500">Support</h6>
            <ul className="">
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-500 border-b py-2 border-b-gray-500">Company</h6>
            <ul className="">
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-500 border-b py-2 border-b-gray-500">Legal</h6>
            <ul className="">
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
