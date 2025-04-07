"use client";

import { motion } from "framer-motion";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function Page() {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      {/* Content */}
      
        <div
      className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
      style={{
        backgroundImage: `url('/cloud-storage-facilities-1.webp')`,
        backgroundBlendMode: 'overlay',
      }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 text-center md:text-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-white font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
                             Cloud Storage

                  
      
            <hr className="w-full border-white border-2 my-4" />
          </motion.h1>
      
          <motion.p
            className="text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
                        Golden Lake ERP for the cold storage industry streamlines
              operations and makes them transparent to all.
          </motion.p>
      
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />
          </motion.div>
      
          {/* Modal */}
          <DemoFormModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </motion.div>
      
        {/* RIGHT SIDE (Optional Form/Visuals) */}
        <div className="flex-1 hidden md:block"></div>
      </div>
      </div>
      {/*    Solar Power and Energy Management Systems: */}
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        {/*ERP Software for Chemical Manufacturers
         */}
        <section>
          {/*     Revolutionizing Cold Storage Management: ERP Solutions */}
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Revolutionizing Cold Storage Management: ERP Solutions
            </h1>
            <p className="text-justify">
              Efficiency reigns supreme in the cold storage industry, where
              precise temperature control and meticulous inventory management
              are non-negotiable. ERP solutions serve as the backbone of
              streamlined operations, providing transparency and optimization
              throughout the cold storage process.
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start mt-5  mb-5  text-gray-800">
              Streamlining Operations
            </h1>
            <p className="text-justify">
              ERP software tailored for the cold storage industry automates
              intricate warehouse logistics, ensuring seamless and consistent
              operations with minimal administrative burdens. By slashing costs
              and elevating quality, these systems revolutionize warehouse
              management, fostering heightened productivity and reliability.{" "}
            </p>
          </div>
          <h1 className="text-2xl  mt-5 sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start    text-gray-800">
          Solar Power and Energy Management Systems:
            </h1>
      
          <div className="grid grid-cols-1 mt-5 gap-12 lg:grid-cols-2">
            <div className="grid ">
              <ul className="list-decimal list-inside text-lg text-gray-700">
                <li className="font-bold">Gate and Receipt Management: </li>
                <p className="text-justify dot">
                  Streamline the intake process for incoming goods, ensuring
                  accurate documentation and inventory control.
                </p>
                <li className="font-bold">Posting Receipts and Issues: </li>
                <p className="text-justify dot">
                  Facilitate swift and accurate posting of receipts and issues
                  to maintain up-to-date inventory records.{" "}
                </p>
                <li className="font-bold">Order Management:</li>
                <p className="text-justify dot">
                  Efficiently manage customer orders from receipt to
                  fulfillment, ensuring timely delivery and customer
                  satisfaction.{" "}
                </p>
                <li className="font-bold">Integrated Warehouse Management: </li>
                <p className="text-justify dot">
                  Consolidate all warehouse operations within a single,
                  integrated platform for enhanced efficiency and oversight.{" "}
                </p>{" "}
                <li className="font-bold">Integrated Financial Accounting: </li>
                <p className="text-justify dot">
                  Seamlessly integrate financial data with warehouse operations
                  to facilitate comprehensive financial reporting and analysis.{" "}
                </p>{" "}
                <li className="font-bold">Multiple Goods/Items:</li>
                <p className="text-justify dot">
                  Accommodate a diverse range of goods and items within the
                  system for flexible inventory management.
                </p>{" "}
                <li className="font-bold">Warehouse/Shelf Management: </li>
                <p className="text-justify dot">
                  Optimize storage space utilization through intelligent
                  warehouse and shelf management functionalities
                </p>{" "}
                <li className="font-bold">
                  Purchasing and Procurement Management:{" "}
                </li>
                <p className="text-justify dot">
                  Streamline procurement processes to ensure timely and
                  cost-effective sourcing of goods and materials.
                </p>{" "}
                <li className="font-bold">Sales and Distribution:  </li>
                <p className="text-justify dot">
                  {/* Distribution ka dana jab page bany ga ok
                   */}
                Facilitate smooth sales and <Link href='/Distribution ' className="text-purple-700"> Distribution processes</Link> , from order entry to shipment tracking and invoicing.
                </p>{" "}
                <li className="font-bold">
                  Instant Lot Number Wise Current Inventory:{" "}
                </li>
                <p className="text-justify dot">
                  Enable real-time tracking of inventory by lot number to ensure
                  accurate stock management.{" "}
                </p>
                <li className="font-bold">Customer Inventory Data</li>
                <p className="text-justify dot">
                  Provide customers with access to their inventory data for
                  enhanced transparency and collaboration.{" "}
                </p>
              </ul>
            </div>
            <div className="grid  my-auto">
              <ul className="list-decimal list-inside text-lg text-gray-700">
                <li className="font-bold">Item Inventory Data: </li>
                <p className="text-justify dot">
                  Track individual items within the inventory to monitor stock
                  levels and ensure availability.
                </p>
                <li className="font-bold">Daily Inbound Data:</li>
                <p className="text-justify dot">
                  Capture and analyze inbound data to optimize warehouse
                  operations and resource allocation.
                </p>
                <li className="font-bold">Purchase Orders:</li>
                <p className="text-justify dot">
                  Streamline purchase order management for efficient procurement
                  and inventory replenishment.
                </p>
                <li className="font-bold">Customer Orders: </li>
                <p className="text-justify dot">
                  Manage customer orders seamlessly from order placement to
                  fulfillment, ensuring timely delivery
                </p>{" "}
                <li className="font-bold">Invoicing: </li>
                <p className="text-justify dot">
                  Generate invoices automatically upon order fulfillment to
                  streamline the billing process and ensure accuracy.
                </p>{" "}
                <li className="font-bold">Daily Outbound Data</li>
                <p className="text-justify dot">
                Monitor outbound data to track shipments and ensure on-time delivery to customers.
                </p>{" "}
                <li className="font-bold">Account Management:</li>
                <p className="text-justify dot">
                  Manage customer accounts and track transactions for accurate
                  financial reporting and analysis.{" "}
                </p>{" "}
                <li className="font-bold">Automatic Backup Features: </li>
                <p className="text-justify dot">
                  Implement automatic backup features to safeguard critical data
                  and ensure business continuity.
                </p>{" "}
                <li className="font-bold">Multi-Company Multi-User System: </li>
                <p className="text-justify dot">
                  Support multiple companies and users within a single ERP
                  system for centralized management and contro{" "}
                </p>{" "}
                <li className="font-bold">User Rights Management:</li>
                <p className="text-justify dot">
                  Assign specific user rights and permissions to control access
                  to sensitive data and functionalities.{" "}
                </p>{" "}
                <li className="font-bold">
                  Instant Lot Number Wise Current Inventory:{" "}
                </li>
                <p className="text-justify dot">
                  Configure SMS notifications for shipping updates to enhance
                  communication and customer service.
                </p>
              
              </ul>
            </div>
          </div>
       
          
        </section>
      </section>

  
     
      {/* Benefits of ERP software for chemical manufacturers: */}
      <section className="  m-auto  lg:w-9/12   w-full p-7">
      <h1 className="text-2xl  mt-4 sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
      Benefits
            </h1>
        <section>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="font-bold">Inventory Level Details:</li>
            <p className="text-justify">
            Gain insights into inventory levels and trends to optimize stock levels and prevent stockouts.
            </p>
            <li className="font-bold">Batch by Batch/Daily/Party Report:</li>
            <p className="text-justify">
            Generate comprehensive reports to analyze inventory data by batch, day, or supplier for informed decision-making.
            </p>
            <li className="font-bold">Automated Backup Capabilities</li>
            <p className="text-justify">
            Ensure data integrity and reliability with automated backup features, minimizing the risk of data loss or corruption.
            </p>
            <li className="font-bold">Rapid Deployment:</li>
            <p className="text-justify">
            Implement the ERP system quickly and efficiently to start realizing benefits sooner and minimize disruption to operations.
            </p>
            <li className="font-bold">Data Integration</li>
            <p className="text-justify">
            Integrate data from various sources and systems to provide a unified view of operations and facilitate data-driven decision-making.    </p>
    <li className="font-bold">
    Smooth and Secure
    </li>
    <p>
    Ensure smooth and secure operations with robust security measures and protocols in place to protect sensitive data and prevent unauthorized access.  
    </p>

    <li className="font-bold">
    Reduced Costs
    </li>
    <p>
    Lower operational costs through streamlined processes, optimized inventory management, and reduced administrative overhead.</p>
      <li className="font-bold">
      Improved Operations:
    </li>
    <p>
    Enhance overall operational efficiency and effectiveness by eliminating bottlenecks, reducing errors, and improving process visibility and control.
    </p> 
     <li className="font-bold">
     Improved Customer Service:
    </li>
    <p>
    Provide superior customer service with faster order processing, accurate inventory information, and proactive communication on order status and shipment updates. </p>
          </ul>
        </section>
      </section>
      <Footer />{" "}
    </>
  );
}

export default Page;
