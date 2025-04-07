"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from "framer-motion";

function InventoryManagement() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage:  "url('/Inventory Management System.jpg')",

          backgroundBlendMode: "overlay",
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
                         Inventory Management System

              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            {/* <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              ERP systems can be customized to meet the unique needs
              and challenges of different industries
            </motion.p> */}

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
      <div className="lg:w-9/12 w-full  mx-auto p-6 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">
          Optimize Operations with Golden Lake’s Inventory Management System
        </h1>
        <p className="mb-4">
          The inventory Management System is a vital component of your whole
          supply chain because it enables you to trace your items’ buying,
          storage, and sale at any particular moment. Once you can effectively
          track, how much material do you have where this is? Inventory
          management turns from a problematic, manual operation to a critical
          factor of your business’s growth plan. Further, Get Golden Lake
          services and improve your business inventory management with the best
          ERP-integrated software.{" "}
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/Inventory Management System-image.jpg" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full mt-10 mb-10rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Purpose of Inventory Management System
        </h2>
        <p className="mb-4 mt-10">
        Inventory management aims to guarantee enough items to fulfil demand while producing excess or surplus inventory. Multi-Techno helps you maintain your inventory management software that is integrated with ERP.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">
        Features
        </h2>
        <p className="mb-4 mt-10">
        An inventory management system is a tool that allows you to track goods across your business’s supply chain. Further, it optimizes the entire spectrum, from order placement with your vendor to order delivery to your customer and mapping a product’s complete journey.   </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Setup Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Setup</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Item Main Category</li>
      <li>Sub Category</li>
      <li>Definition</li>
      <li>UOM Definition</li>
      <li>Store Definition</li>
    </ul>
  </div>

  {/* Transactions Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Transactions</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Inventory Opening Balance</li>
      <li>Inventory Adjustment</li>
      <li>Material Issue Note</li>
      <li>Store Transfer</li>
      <li>IGP (Inward Gate Pass)</li>
      <li>OGP (Outward Gate Pass)</li>
      <li>GRN (Goods Receipt Note)</li>
    </ul>
  </div>

  {/* Reports Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Reports</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Stock Balance</li>
      <li>Inward and Outward Gate Passes</li>
      <li>Cost Center Wise Consumption Comparison Report</li>
      <li>Min and Max Stock Level Base Reorder Report</li>
      <li>Stock in Hand Value-Wise</li>
      <li>Inter-Stores Transfer Summary Report</li>
      <li>Main Category Wise Report</li>
      <li>Sub Category Wise Report</li>
    </ul>
  </div>
</div>

        <h2 className="text-2xl font-bold mt-6 mb-3">Barcoding and Tagging</h2>
        <p className="mb-4">
          The outstanding aspect of the inventory management system is the
          removal of common human mistakes. Moreover, Manual data entry can lead
          to errors, but scanning a barcode saves employees time.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Reporting on Company Operations
        </h2>
        <p className="mb-4">
          Monitoring an inventory firm necessitates keeping those in command up
          to date on different business operations, such as the vehicle’s
          location, etc.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Notifications About Inventory data
        </h2>
        <p className="mb-4">
        A sound inventory management system has a securities alarm function. Moreover, The program outlines numerous consequences that may arise due to the low supply of a specific item in the notifications.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Inventory backup and security
        </h2>
        <p className="mb-4">
        If inventory software is hacked, Even so, the data is protected by a backup that business owners may access and utilize. As a result, backup and inventory security avoid any disruptions.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        The product’s demand and supply
        </h2>
        <p className="mb-4">
        Inventory software helps businesses manage their inventory effectively. Moreover, Executives properly manage the buyers and sellers of the company’s products.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Last Thoughts
        </h2>
        <p className="mb-4">
        Effective inventory management is critical to the global performance of Supply Networks. Further, The advantages of these systems are obvious, and as time passes, more and more businesses will continue to use similar solutions. After that, Golden Lake provides you with complete solutions for any ERP softwar
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">
          Benefits of Inventory Management that is Integrated with ERP
        </h2>
        <p className="mb-4">
        Inventory Management System strategies can assist you in saving money and further maintaining a correct stock count. Furthermore, integrating an ERP system with inventory management features will give you even more benefits.
        </p>

        <h3 className="text-xl font-bold mt-4">
          1. Evaluate Inventory Levels Across the Organization
        </h3>
        <p className="mb-4">
        ERP systems can give a global picture of orders across all departments, from selling to accounting through delivery. Moreover, centralized purchasing eliminates duplication, and buying in bulk saves money.ERP systems can give a global picture of orders across all departments, from selling to accounting through delivery. Moreover, centralized purchasing eliminates duplication, and buying in bulk saves money.
        </p>

        <h3 className="text-xl font-bold mt-4">2. Improve Forecasting</h3>
        <p className="mb-4">
        Data collecting and analytics software can give insights into patterns. You may also enhance your stock predictions by understanding patterns.
        </p>

        <h3 className="text-xl font-bold mt-4">
          3. Optimize Your Entire Inventory
        </h3>
        <p className="mb-4">
        A solid inventory management system aids in maintaining the proper mix of stock and amounts at the lowest possible carrying costs. Further, it will assist you in ensuring that you always have reasonable amounts on hand.     </p>

        <h3 className="text-xl font-bold mt-4">
          4. Manual Tasks Can Be Automated
        </h3>
        <p className="mb-4">
        Stock-taking, further receiving, and fulfilment may all be up by barcode and RFID scanning. At the same time, Using software decreases mistakes caused by manual entry and frees employees from repetitive activities.n
        </p>

        <h3 className="text-xl font-bold mt-4">5. Profit Has Increased</h3>
        <p className="mb-4">
          Better stock availability and management result in higher inventory
          turnover and profitability.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default InventoryManagement;
