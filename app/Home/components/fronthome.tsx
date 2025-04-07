"use client";
import React, { useState } from "react";
import Button from "@/app/ui/style";
import DemoFormModal from "@/app/components/DemoFormModal";
import { motion } from "framer-motion";

function Fronthome() {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div
    className="relative  mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
    style={{
      backgroundImage: ` url('/bgimg.jpg')`,

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
       
Best ERP Software in Pakistan for Enterprises & Growing Businesses
          <hr className="w-full border-white border-2 my-4" />
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
   All-in-One Solution: Manage every part of your business in one place. Real-Time Data: Access up-to-date info to make smart decisions fast. Secure & Compliant: Keep your data safe and meet industry standards.
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
    
  );
}

export default Fronthome;
