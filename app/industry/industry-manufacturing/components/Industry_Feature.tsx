'use client'

import React from "react";

const ERPFeatures = () => {
  const features = [
    { title: "Advanced Inventory Control", description: "A real-time inventory management system that helps with tracking and warehousing, reducing stock losses." },
    { title: "Production Planning & Control", description: "Automates production scheduling, tracking, and resource allocation to maximize efficiency." },
    { title: "Supply Chain Management", description: "Optimizes procurement, supplier coordination, and logistics for smooth operations." },
    { title: "Financial Management", description: "Handles financial processes, budgeting, and compliance to ensure transparency." },
    { title: "Customer Relationship Management (CRM)", description: "Streamlines customer interactions, order tracking, and sales processes." },
    { title: "Real-Time Data and Analytics", description: "Provides insights into manufacturing processes for data-driven decision-making." },
  ];

  const benefits = [
    { title: "Efficiency Boost", description: "Automates workflows and enhances productivity through process optimization." },
    { title: "Automating Expenses", description: "Reduces manual errors and improves cost tracking with intelligent financial tools." },
    { title: "Data-Driven Decision Making", description: "Provides real-time reports and analytics to support strategic planning." },
    { title: "Improved Production Culture", description: "Enhances workforce management and communication for a streamlined production environment." },
    { title: "Profitability & Scaling", description: "Supports business growth by providing tools for cost control and operational expansion." },
    { title: "Advanced Framework", description: "A future-proof ERP system with cloud integration and AI-driven automation." },
  ];

  return (
    <section className="lg:w-9/12 w-full  mx-auto px-6 py-12">
      {/* Investment Section */}
    
     
       

      {/* Features Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold lg:text-center text-start mb-4">
          Features of Golden Lake ERP for Manufacturing Industry
        </h2>
        <p className="text-lg lg:text-center text-start text-gray-600 mt-2">
          Improve efficiency, track inventory, and optimize your production process with key ERP features.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

   
      <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Title */}
      <h2 className="text-2xl lg:text-center text-start font-semibold mb-4">
      Implementation & Benefits of Golden Lake ERP for Manufacturing Industry
        </h2>

      {/* ERP Implementation Image */}
      <div className="flex justify-center mb-10 mt-10">
        <img
          src="/brnfits -erp-industry.png"
          alt="ERP Implementation Process"
          className="rounded-lg w-full max-w-full"
        />
      </div>

      {/* Benefits Grid */}
      <div className="grid  sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
      {/* Conclusion */}
      <div className="text-center mt-10 lg:p-0 px-6">
        <h2 className="text-2xl lg:text-center text-start font-semibold mb-4">
          Golden Lake ERP for the Manufacturing Industry: Last Words
        </h2>
        <p className="text-lg text-gray-600 text-justify  mt-5">
        We discussed “ERP for Manufacturing industry” in detail. Organizations must adopt new solutions in today’s fast-paced and competitive manufacturing industry. ERP systems designed for the manufacturing sector, like Golden Lake ERP, provide a unified framework that improves efficiency, decision-making, and operational flow. One centralized system that connects production, inventory, supply chain, and financial data allows manufacturers to scale effortlessly, enhance quality, and dramatically decrease costs.

To ensure your company’s continued success in the years to come, use our ERP system for the manufacturing industry. Manufacturers are prepared to face current and future issues with the help of this ERP system’s real-time data, automation features, and scalability.

ERP for manufacturing industry is now an absolute must for companies that want to maximize efficiency, cut costs, and boost product quality.

Is simplifying your production procedures and discovering untapped potential appealing to you? Contact us now to find the game-changing potential of our ERP for manufacturing industry. </p>
      </div>
    </section>
  );
};

export default ERPFeatures;
