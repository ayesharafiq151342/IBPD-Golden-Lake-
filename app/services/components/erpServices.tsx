'use client';
import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';

const ERPServices = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;  // Left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20; // Up/down
    setRotate({ x, y });
    console.log();
    
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (<>
    <div className="p-8 space-y-12">
      {/* Empowering Businesses Section */}
      <section className="flex flex-col-reverse md:flex-row items-center bg-purple-50 p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">

        {/* Left Side Text */}
        <div className="md:w-1/2 lg:mt-10 lg:mb-10 text-left">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Empowering Businesses with Comprehensive Services
          </h2>
          <p className="text-gray-600">
            Welcome to our Services page, where innovation drives excellence. At Golden-Lake, we are dedicated to providing a wide range of services tailored to meet the unique needs of businesses across diverse industries. Our focus on delivering advanced, result-driven solutions has established us as a trusted partner for organizations aiming for technological growth and streamlined operations.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/seervices-1.webp"
            alt="Empowering Businesses"
            className="w-96"
          />
        </div>
      </section>

      {/* ERP Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Enterprise Resource Planning (ERP): Elevate Your Business Efficiency</h2>
        <p className="text-gray-600">
          Our Enterprise Resource Planning (ERP) services lead the way in modern business solutions. More than just a strategic tool, ERP seamlessly integrates diverse business processes into a unified system, delivering real-time insights and driving greater efficiency across your organization.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="flex flex-col md:flex-row items-center bg-purple-50 rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/erp_software.webp"
            alt="ERP Services"
            className="w-96"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            Key Features of our ERP Services
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li><span className="font-semibold">Modular Structure:</span> Choose specific modules based on your needs, ensuring you only pay for what you use.</li>
            <li><span className="font-semibold">Industry-Specific Customization:</span> Tailored solutions for sectors like manufacturing, construction, and healthcare.</li>
            <li><span className="font-semibold">Real-Time Data Analytics:</span> Make informed decisions with real-time data.</li>
            <li><span className="font-semibold">Scalability:</span> Our system evolves with your growing business needs.</li>
            <li><span className="font-semibold">Expert Support:</span> Dedicated experts provide training and support.</li>
          </ul>
        </div>
      </section>

      {/* Manufacturing ERP Section */}
      <section className="flex flex-col-reverse md:flex-row items-center bg-white p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            Optimize Manufacturing with Golden-Lake ERP
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li><span className="font-semibold">Streamline Operations:</span> Centralize production, inventory, supply chain, and financial processes.</li>
            <li><span className="font-semibold">Boost Efficiency:</span> Automate workflows and reduce lead times.</li>
            <li><span className="font-semibold">Data-Driven Insights:</span> Real-time analytics for smarter decision-making.</li>
            <li><span className="font-semibold">Technology Scalability:</span> ERP grows with your business.</li>
            <li><span className="font-semibold">Compliance & Quality Control:</span> Maintain high standards and regulatory compliance.</li>
            <li><span className="font-semibold">Resource Optimization:</span> Maximize resource utilization and cost efficiency.</li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/services-3.webp"
            alt="Golden-Lake ERP"
            className="w-3/4"
          />
        </div>
      </section>

      {/* Another Key Features Section */}
      <section className="flex flex-col md:flex-row items-center bg-purple-50 rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/erp-services.png"
            alt="ERP Services"
            className="w-96"
          />
        </div>

        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            Key Features of our ERP Services
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li><span className="font-semibold">Modular Structure:</span> Tailor your ERP with only the features you need.</li>
            <li><span className="font-semibold">Industry-Specific Customization:</span> Flexible solutions for different sectors.</li>
            <li><span className="font-semibold">Real-Time Data Analytics:</span> Make decisions based on live data.</li>
            <li><span className="font-semibold">Scalability:</span> Flexible to grow with your business.</li>
            <li><span className="font-semibold">Expert Support:</span> Receive hands-on training and dedicated support.</li>
          </ul>
        </div>
      </section>
    </div>

    {/* Custom Software Development Section */}
    <div className="p-8 space-y-12">
      <section className="lg:w-9/12 lg:m-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">How Our Custom Software Development Services Benefit</h2>
        <p className="text-gray-700 mb-4">Tailored solutions for your business. Our team of experienced developers works closely with you to understand your business needs and deliver bespoke software solutions.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">Scalability:</span> We create adaptable software that grows with your business.</li>
          <li><span className="font-semibold">Enhanced Efficiency:</span> Streamline processes and optimize resources.</li>
          <li><span className="font-semibold">Integration Capabilities:</span> Seamlessly connect with existing systems.</li>
          <li><span className="font-semibold">Agile Development:</span> Quick, flexible development cycles with continuous improvement.</li>
        </ul>
      </section>

      {/* Expert Advice Section */}
      <section className="text-center">
        <h2 className="text-2xl mt-20 font-bold text-purple-800 mb-4">Help Your Team Perform Better With Our Expert Advice</h2>
        <div className="w-2/3 mx-auto mt-20" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.img
        src="/erp-full-services.png"
        alt="Expert Advice"
        className="w-full rounded-xl shadow-lg"
        animate={{ rotateX: rotate.y, rotateY: rotate.x }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      />
    </div>
    </section>

      {/* Consultancy Services Section */}
      <section className="bg-purple-50 lg:w-9/12 lg:m-auto p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">Consultancy Services</h3>
        <p className="text-gray-700 mb-4">We guide you toward success by helping you navigate the complex landscape of modern technologies, ensuring informed decisions for your business goals.</p>
        <h4 className="text-xl font-bold text-purple-700 mb-2">Key Aspects of Our Consultancy Services:</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">Technology Advisory:</span> Stay updated on emerging tech and make strategic decisions.</li>
          <li><span className="font-semibold">Business Process Optimization:</span> Improve workflows, enhance productivity, and foster growth.</li>
          <li><span className="font-semibold">Digital Transformation Planning:</span> Build tailored roadmaps for seamless digital transformation.</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default ERPServices;
