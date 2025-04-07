"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from "framer-motion";

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
    
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: `url('/industry-men-working-machinery-in-steel-factory-free-photo.jpg')`,
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
             Steel Industry
              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Golden Lake System is the best Software solution for the Steel
              Industry that will guide you in all your native problems of the
              company and provide a permanent solution.
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
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Optimizing Efficiency: ERP Solutions for the Steel Industry
        </h1>
        <p className="text-gray-700 mb-6">
          Efficiency is paramount in the dynamic world of iron manufacturing.
          ERP solutions offer tailored software solutions to address the
          specific challenges faced by companies in this industry.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Streamlining Operations</h2>
        <p className="text-gray-700 mb-6">
          Steelmakers can significantly benefit from the implementation of ERP
          solutions. These systems streamline business operations, maximize
          productivity, implement planning strategies, reduce resource wastage,
          and yield better ROI.
        </p>

        <div className="flex justify-center mt-20 mb-20">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3 mt-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Accounts & Finance</li>
              <li>MRP & Production</li>
              <li>Cash & Bank Management</li>
              <li>Quality Control</li>
              <li>Purchase & Import</li>
              <li>Asset Management</li>
              <li>Inventory Management</li>
              <li>Sales</li>
              <li>Project Management</li>
              <li>HR & Payroll</li>
              <li>Business Intelligence</li>
            </ul>
          </div>
          <div className="flex-1">
            <motion.img
              src="/trading-erp.png"
              alt="ERP Services"
              className="rounded-lg w-full max-w-2xl rounded-lg shadow-lg "
              initial={{ opacity: 0, y: 20 }} // Starts slightly lower
              animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }} // Loop fade-in & bounce effect
              transition={{
                duration: 3, // Total time per cycle
                ease: "easeInOut",
                repeat: Infinity, // Infinite loop
              }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-3">
          Benefits of ERP for the Steel Industry
        </h2>
        <ul className="list-decimal pl-6 mb-6 text-gray-700">
          <li>
            <strong>Seamless Integration:</strong> Facilitates integration
            across all departments and enhances collaboration.
          </li>
          <li>
            <strong>Adaptable Planning:</strong> Enables quick responses to
            market changes.
          </li>
          <li>
            <strong>Time Efficiency:</strong> Automates repetitive tasks, saving
            valuable time.
          </li>
          <li>
            <strong>Accurate Forecasting:</strong> Provides real-time data for
            better decision-making.
          </li>
          <li>
            <strong>Cost Control:</strong> Optimizes resource allocation and
            identifies cost-saving measures.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          Unique Advantages of ERP Solutions
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>
            <strong>Enhanced Business Processes:</strong> Improves supplier and
            manufacturing efficiency.
          </li>
          <li>
            <strong>Flexible Manufacturing Methods:</strong> Supports various
            production techniques.
          </li>
          <li>
            <strong>Superior Customer Service:</strong> Enhances visibility and
            customer interactions.
          </li>
          <li>
            <strong>Improved Cash Flow:</strong> Streamlines inventory and
            financial processes.
          </li>
        </ul>

        <p className="text-gray-700">
          ERP solutions stand as the ultimate solution for steel manufacturers
          seeking to maximize efficiency and achieve sustainable growth.
        </p>
      </div>
      <Footer />{" "}
    </>
  );
}

export default Page;
