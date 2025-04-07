"use client";
import React from "react";
import { motion } from "framer-motion";
const challenges = [
    {
      title: "Scalability Issues",
      description:
        "As businesses grow, managing expanding operations and maintaining service quality becomes complex.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Adhering to industry regulations, tax policies, and labor laws requires constant updates and monitoring.",
    },
    {
      title: "Data Security & Privacy",
      description:
        "Protecting sensitive client and financial data from cyber threats is a significant concern.",
    },
    {
      title: "Workflow Inefficiencies",
      description:
        "Ineffective resource allocation, manual processes, and lack of automation lead to delays and increased operational costs.",
    },
    {
      title: "Client Relationship Management",
      description:
        "Ensuring high-quality customer service and maintaining long-term client relationships require robust CRM integration.",
    },
    {
      title: "Cost Control & Budgeting",
      description:
        "Managing expenses while maximizing profitability can be challenging without real-time financial insights.",
    },
  ];
const ERPIntegration = () => {
  return (
    <section className="container mx-auto lg:w-9/12 p-6">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-gray-800 text-start mt-4 mb-4 text-justify">
        Unlocking Success: Comprehensive ERP Software Integration Across Diverse Industries
      </h1>
      <p className="text-gray-600 lg:text-start  text-justify ">
      Golden Lake ERP offers a seamless solution for Services Industries optimizing financial operations and analyzing business performance throughout the entire service organization. In the face of unique challenges such as profit-driven growth, competitive management, and large-scale transitions in the people and project-driven services sector, Golden Lake stands as the solution. By streamlining every business operation, it tailors a customized solution to meet the specific needs of each professional service organization.
      <br/>
      With features spanning accounts and finance, cash and bank management, sales, HR and payroll, business intelligence, Project Management, and assets management, Golden Lake ERP provides comprehensive control over resources and projects, configurable planning, seamless data integration, improved delivery models, and enhanced reporting capabilities. Experience centralized customer data, interlinked departments, and efficient management of invoice, billing, and order processes.
      </p>
      
      {/* Challenges Section */}
     
      
      {/* Services Industries Arrangement Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">Services Industries Arrangement</h2>
        <p className="text-gray-600 mt-2 text-justify">
        Golden Lake enables seamless and secure business activity by fostering a scalable arrangement that helps develop the profitable association of many service-related administrative operations.

By integrating advanced ERP solutions, Golden Lake optimizes workflow automation, financial management, and resource allocation, ensuring enhanced efficiency across service industries. The system streamlines communication between departments, reduces operational redundancies, and provides real-time analytics to support data-driven decision-making.

Additionally, it offers compliance management, risk assessment, and customer relationship management (CRM) features, helping businesses maintain regulatory standards while improving client satisfaction. With its flexible architecture, Golden Lake ERP adapts to industry-specific needs, allowing organizations to scale effortlessly as their business grows.   </p>
      </div>
      
      {/* Illustration Image */}
      <div className="flex justify-center mt-6">
         <motion.img
      src="/industry -services.png"
      alt="ERP Services"
      className="rounded-lg w-3/4 md:w-1/2"
      initial={{ opacity: 0, y: 20 }} // Starts slightly lower
      animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }} // Loop fade-in & bounce effect
      transition={{
        duration: 3, // Total time per cycle
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
      }}
    />  </div>
      
      {/* Features and Benefits Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Features List */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Accounts & Finance Management</li>
            <li>Taxation</li>
            <li>Business Intelligence</li>
            <li>Process Automation</li>
          </ul>
        </div>
        
        {/* Benefits List */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Complete control of resources and projects</li>
            <li>Automation of key business processes</li>
            <li>Visibility of key performance indicators</li>
            <li>Optimized workforce and financial management</li>
          </ul>
        </div>
      </div>
      <section className="py-12  ">
      <div className="mx-auto r">
        <h2 className="text-3xl font-bold text-gray-800">Challenges in Service Industries</h2>
        <p className="text-gray-600 mt-4">
          Managing service operations for the services industries is an essential
          undertaking. It drives development with benefits, supervising financial
          transactions, workforce efficiency, and overall business sustainability.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6  mx-auto">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border-l-4 border-purple-600"
          >
            <h3 className="text-xl font-semibold text-gray-800">{challenge.title}</h3>
            <p className="text-gray-600 mt-2">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
    
  );
};

export default ERPIntegration;
