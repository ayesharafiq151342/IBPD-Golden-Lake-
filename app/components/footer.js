import React from "react";

import { ArrowRight ,Facebook, Instagram, Globe, MessageCircle } from "lucide-react";



import Link from 'next/link';  
const Footer = () => {
  return (
    <footer className=" mt-20 text-white ">
       <section className="grid grid-cols-1 md:grid-cols-2 h-[700px] text-white">
      {/* Left Section */}
      <div className="bg-darkblue flex flex-col justify-center px-10 md:px-20 lg:px-32 py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact us</h2>
    <p className="text-sm md:text-base">
      <span className="font-semibold">Contact:</span> Use the Contact Form and submit your details, Our expert will soon call you back.
    </p>
    <p className="mt-4 text-sm md:text-base">
      <span className="font-semibold">Address:</span> IBPD, Business Incubation Center (BIC) Bahria University, 13 National Stadium Rd, Karsaz Faisal Cantonment, Karachi, Karachi City, Sindh 75260
    </p>
    <p className="mt-4 text-sm md:text-base">
      <span className="font-semibold">Phone:</span> 0334 3563399
    </p>

    <Link href="/contact">
      <button className="relative inline-block text-white bg-black border-2 border-white rounded-full px-4 py-2 mt-6 font-medium bg-blue-500 transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
        <span className="text-sm md:text-lg font-bold">Contact us</span>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
          <ArrowRight className="text-white" />
        </span>
      </button>
    </Link>
  </div>
{/* Right Section */}
<div className="bg-white flex flex-col justify-center items-start lg:items-center text-left lg:text-center py-10 px-6 md:px-8 w-full lg:w-1/2 lg:mx-auto">
  <div className="flex flex-col space-y-4">
    <Link href="https://www.google.com/maps/place/Narwala+Rd,+Faisalabad,+Pakistan" target="_blank">
      <button className="relative inline-block bg-white border-4 border-blue text-black px-4 py-2 font-medium rounded-md transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
        <span className="text-sm md:text-lg text-blue font-bold">Visit Map</span>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
          <ArrowRight className="text-black" />
        </span>
      </button>
    </Link>
  </div>

  <div className="flex gap-6 mt-6 justify-start lg:justify-center">
    <a href="#" className="text-darkblue text-xl">
      <Facebook className="text-blue-600" size={24} />
    </a>
    <a href="#" className="text-pink-500 text-xl">
      <Instagram className="text-pink-500" size={24} />
    </a>
    <a href="#" className="text-blue-500 text-xl">
      <Globe className="text-darkblue" size={24} />
    </a>
    <a href="#" className="text-green-700 text-xl">
      <MessageCircle className="text-green-500" size={24} />
    </a>
  </div>
</div>

    
    </section>
    </footer>
  );
};

export default Footer;
