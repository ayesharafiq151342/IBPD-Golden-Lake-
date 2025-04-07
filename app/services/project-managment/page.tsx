"use client";

import React from 'react'
import Navbar from '@/app/components/navbar';
import Project_detail from './components/pro-details';
import Footer from '@/app/components/footer';
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from 'framer-motion';

function Project_management() {
  const [isModalOpen, setModalOpen] = useState(false);
  const processes = [
    {
      title: "Inventory Management",
      description:
        "Multi-location inventory updates in real-time. The system can be used to avoid business disruptions by keeping up with stock levels.",
    },
    {
      title: "Cash Management System",
      description:
        "Ensures a systematic approach to cash management. The system keeps track of cash flow for better financial planning.",
    },
    {
      title: "Purchase Management",
      description:
        "Automates supplier tracking and purchase requests, ensuring a smooth procurement process and inventory restocking.",
    },
    {
      title: "Benefits of CMS",
      description:
        "Enhances financial tracking and automates cash-related transactions, leading to more efficient operations.",
    },
    {
      title: "Collaboration and Communication in Real-time",
      description:
        "Enables teams to communicate efficiently and share updates instantly for better project coordination.",
    },
    {
      title: "Control and Exchange of Documents",
      description:
        "Facilitates secure document sharing and version control, ensuring transparency in project documentation.",
    },
    {
      title: "Accounting and Budget Management",
      description:
        "Tracks expenses and financial reports, allowing companies to maintain a balanced budget.",
    },
    {
      title: "Management of Resources",
      description:
        "Optimizes resource allocation and ensures the effective utilization of manpower, materials, and time.",
    },
  ];
  return (
    <>
<div>
     
      <Navbar />

      {/* HERO SECTION */}
      {/* <div
      className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
      style={{
        backgroundImage: `url('/pro-bg.png')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Overlay */}
   <div
      className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-[600px] px-4 sm:px-6"
      style={{
        backgroundImage: `url('/pro-bg.png')`,
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           ERP Project Management System
            <hr className="w-full border-white border-2 my-4" />
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Optimize construction and project workflows with our comprehensive ERP system,
enhancing efficiency and collaboration for unparalleled success.

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

    <Project_detail/>
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Processes for Project Management System
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {process.title}
              </h3>
              <p className="text-gray-700 text-justify">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
      <Footer/></>
  )
}

export default Project_management
