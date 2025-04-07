'use client'

import React from "react";

const ERPFoodManufacturing = () => {
  return (
    <section className="md:w-full lg:w-9/12 w-full m-auto p-5 py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        ERP Software For Food Manufacturers
      </h2>
      <p className="text-gray-600 text-lg">
        Efficiency in food manufacturing is essential for maintaining product consistency and reducing waste. 
        Golden Lake ERP assists in optimized supply chain management, automated production tracking, and enhanced reporting capabilities, 
        ensuring streamlined processes that meet industry regulations.
      </p>

      {/* Streamlining Operations */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Streamlining Operations</h3>
        <p className="text-gray-600">
          An ERP system allows food manufacturers to fully integrate their production workflows, ensuring smooth coordination between 
          procurement, inventory, and distribution. This enhances operational efficiency and reduces downtime in production.
        </p>
      </div>

      {/* Empowering Decision-Making */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Empowering Decision-Making</h3>
        <p className="text-gray-600">
          Data-driven insights are critical for making strategic decisions in food manufacturing. 
          ERP systems help track key performance indicators, forecast demand, and ensure product quality by leveraging real-time analytics.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Capabilities</h3>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6">
            <li>Recipe Formulation Tracking</li>
            <li>Ingredient Sourcing</li>
            <li>Lot Traceability</li>
            <li>Production Management</li>
            <li>Quality Control</li>
          </ul>
          <ul className="list-disc pl-6">
            <li>Batch Processing</li>
            <li>Inventory Control</li>
            <li>Food Safety Compliance</li>
            <li>Supplier Management</li>
            <li>Real-Time Reporting</li>
          </ul>
        </div>
      </div>

      {/* Enhancing Manufacturing Efficiency */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Enhancing Manufacturing Efficiency</h3>
        <p className="text-gray-600">
        Implementing Golden Lake ERP brings a host of benefits to food manufacturers. By streamlining operations and improving visibility across the supply chain, businesses can reduce costs, minimize waste, and enhance overall productivity. Moreover, the software’s focus on customer satisfaction management enables companies to respond quickly to customer feedback and market trends, ensuring a competitive edge in today’s rapidly evolving marketplace.  </p>
      </div>

      {/* Improving Customer Satisfaction with Image */}
      <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Improving Customer Satisfaction</h3>
          <p className="text-gray-600 text-justify">
          A well-integrated ERP system ensures that food manufacturers meet customer demands effectively. By monitoring order processing, production timelines, and inventory levels, businesses can achieve timely deliveries and superior product quality.

Additionally, ERP systems enhance traceability and compliance by tracking raw materials from suppliers to final products, ensuring adherence to industry regulations and safety standards. Automated quality control checks help reduce errors, minimize waste, and maintain consistent product standards.

Moreover, real-time data analytics and reporting enable manufacturers to forecast demand accurately, optimize supply chain efficiency, and reduce production bottlenecks. Integrated customer relationship management (CRM) features also enhance client interactions by managing orders, feedback, and personalized services, leading to increased customer satisfaction and brand loyalty.
          </p>
        </div>
        <img
          src="/deting.avif"
          alt="Customer Satisfaction Chart"
          className="rounded-lg w-full shadow-lg"
        />
      </div>

      {/* Conclusion */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Conclusion</h3>
        <p className="text-gray-600">
          Implementing a dedicated ERP solution for food manufacturing enhances operational efficiency, ensures regulatory compliance, 
          and supports long-term business growth. By adopting ERP technology, food manufacturers can streamline workflows, 
          maintain consistency, and achieve higher customer satisfaction.
        </p>
      </div>
    </section>
  );
};

export default ERPFoodManufacturing;
