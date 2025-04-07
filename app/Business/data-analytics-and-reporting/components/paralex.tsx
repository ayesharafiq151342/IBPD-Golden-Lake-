"use client";
import React, { useState } from 'react'

import Link from "next/link";


import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function ParalexData() {
    const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <div className='overflow-hidden w-full'>
      
      
      {/* Parallax Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed parallax-bg"
        style={{ backgroundImage: "url(/cash-management-system.webp)" }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center px-4 w-10/12 md:w-8/12">
        Unlock actionable insights—boost efficiency with Golden Lake data analytics and reporting solutions today!
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-white text-center px-4 w-11/12 md:w-9/12 text-sm md:text-base">
        Take control of your finances with our cash management services! Streamline cash flow, track transactions, and maximize efficiency—start today!  </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row lg:w-9/12 justify-center mt-5 gap-4">
          {/* Contact Button Linking to Form */}
          <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

            {/* Modal Component */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          <Link href="/aboutus">
            <Button label="Learn More" variant="secondary" />
          </Link>
        </div>
      </div>

      {/* Parallax Effect Styles */}
      <style jsx>{`
        .parallax-bg {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 150%;
          top: -25%;
        }

        @media (max-width: 768px) {
          /* Disable fixed background on mobile for better performance */
          .parallax-bg {
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>

    </div>
  )
}

export default ParalexData
