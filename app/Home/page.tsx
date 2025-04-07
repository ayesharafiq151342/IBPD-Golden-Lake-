// app/page.tsx
"use client";
import React from 'react';
import Navbar from '../components/navbar';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/footer';
import Link from 'next/link';
import { Boxes,File } from 'lucide-react';
import Institute_of_Business from './components/Institute_of_Business';
export default function Homepage() {
  return (
    <div className='m-auto'>
      <Navbar />
      <div className="bg-[url('/home-bg.jpg')] relative bg-cover bg-center h-96 w-full md:h-[600px] lg:h-screen">
  {/* Center content using Flexbox */}
  <div className="absolute inset-0 flex flex-col justify-center items-start space-y-4 sm:ml-0 md:ml-24 lg:ml-44">
    {/* Button 1 */}
    <Link href="/course-syllabus">
  <button className="relative inline-block text-white bg-darkblue border-[4px] border-white rounded-full px-4 py-2 font-medium bg-blue-500 transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-44 md:w-64 ml-10 lg:w-56 h-12">
    <span className="text-sm md:text-lg lg:text-xl">Browse Courses</span>
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
      <ArrowRight className="text-white" />
    </span>
  </button>
</Link>

{/* Button 2 */}
<Link href="/contact">
  <button className="relative inline-block text-white bg-black border-[4px] border-white rounded-full px-4 py-2 font-medium bg-blue-500 transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-44 md:w-64 ml-10 lg:w-56 h-12">
    <span className="text-sm md:text-lg lg:text-xl">Contact us</span>
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
      <ArrowRight className="text-white" />
    </span>
  </button>
</Link>

  </div>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 text-white">
  {/* Left Section - SAP Module */}
  <Link href="">
    <div className="bg-darkblue flex flex-col justify-center items-start md:items-center px-6 md:px-16 lg:px-24 py-12">
      <Boxes className="w-8 h-8 text-white mb-2" />
      <h2 className="text-sm md:text-lg lg:text-xl font-bold text-left md:text-center">
        SAP FI-CO Module (Consultant Level)
      </h2>
    </div>
  </Link>

  {/* Right Section - Excel/PowerBI */}
  <Link href="">
    <div className="bg-white flex flex-col justify-center items-start md:items-center px-6 md:px-16 lg:px-24 py-12">
      <File className="w-8 h-8 text-blue-600 mb-2" />
      <h2 className="text-sm md:text-lg lg:text-xl font-bold text-blue text-left md:text-center">
        Master in Excel & Master in Power BI
      </h2>
    </div>
  </Link>
</section>

    <Institute_of_Business/>
      <Footer/>
    </div>
  );
}
