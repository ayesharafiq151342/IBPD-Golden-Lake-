'use client'
import React from 'react'
import Button from "@/app/ui/style";
import Link from "next/link";

function Trading_services() {
  return (
    <div className='overflow-hidden'>
      <section className="lg:w-9/12 lg:mt-20 lg:m-auto p-4 ">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4 text-center">Our Trading and Distribution Management System</h2>
        <p className="text-gray-700 mb-4 text-justify">
          Trading and Distribution system lets companies control sales, purchases, transportation, inventories, and finance with complete solutions. The system also fits all supply chain and vendor management processes, allowing users to save and access data quickly and simply.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Good customer and supplier communication depends on contact management.</li>
          <li>Supply chain management tools will help you arrange and simplify your purchases.</li>
          <li>BI-driven (Business Intelligence) reporting gives you insightful business analysis.</li>
          <li>Tools for inventory planning will assist you in balancing your goods and maximizing storage.</li>
        </ul>
        <p className="text-gray-700 mb-4 mt-5 text-justify">
          With its modern characteristics and integration with operations, the trading and distribution system could enable you to flourish and survive in the competitive sector. It’s also linked with accounting and material planning to provide real-time, practical reports.
        </p>
      </section>

      <img
        src="/dashboard2.png"
        alt="Expert Advice"
        className="mx-auto w-full max-w-[720px] mt-10 rounded-lg shadow-md"
      />


      <div className="p-4 lg:p-8 min-h-96">
        <div className="lg:w-9/12 mx-auto bg-white p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need help with trading and distribution?</h1>
            <p className="text-gray-700 mb-4">Here is our <span className="font-semibold text-purple-600">Trading and Distribution Management</span> system!</p>
            <p className="text-gray-700 mb-4">It will help your company run more smoothly by organizing and simplifying operations.</p>
            <p className="text-gray-700 mb-4">From supply chain optimization to inventory control, our system offers end-to-end solutions that help you stay ahead of the competition.</p>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 mb-4">
              “Imagine never missing a sales opportunity again — our system ensures optimal stock levels and smarter decision-making.”
            </blockquote>
            <p className="text-gray-700 mb-4">It integrates perfectly with ERP, CRM, and finance systems, enabling seamless data flow and insights.</p>
          </div>

          <div className="flex items-center justify-center">
            <img src="/dashboard2.png" alt="Trading Dashboard" className="rounded-xl shadow-md w-96 md:w-10/12" />
          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed parallax-bg"
        style={{ backgroundImage: "url(/f.jpg)" }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center px-4 w-10/12 md:w-8/12">
          Ready to elevate your trading and distribution operations?
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-white text-center px-4 w-11/12 md:w-9/12 text-sm md:text-base">
          Unlock the full potential of your business with our complete Trading and Distribution Management system.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row lg:w-9/12 justify-center mt-5 gap-4">
          <Link href="#demo">
            <Button label="Free Demo" variant="secondary" />
          </Link>
          <Link href="#demo">
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

export default Trading_services
