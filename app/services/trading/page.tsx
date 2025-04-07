"use client";

import Navbar from "@/app/components/navbar";
import Tarding_services from "./components/tarding_services";
import TradingDistribution from "./components/msg";
import Faqs from "./components/faqs";
import Footer from "@/app/components/footer";

import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from 'framer-motion';
function Trading_system() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div
  className="relative mx-auto flex flex-col items-center justify-center mt-18
             bg-cover bg-center text-center h-[400px] sm:h-[500px] md:h-[600px] lg:min-h-screen
             px-4 sm:px-6 md:px-12"
  style={{
    backgroundImage: `url('/f.jpg')`,
    backgroundBlendMode: "overlay",
  }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details with animation */}
    <motion.div
      className="flex-1 text-center md:text-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
        Trading and Distribution Management System
        <hr className="w-2/3 border-white border-2 my-4 mx-auto md:mx-0" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto md:mx-0">
        Our ERP is a top-tier web-based enterprise solution designed to meet all your trading and distribution business needs.
      </p>

      {/* Contact Button */}
      <div className="mt-4">
        <Button
          label="Get Free Demo"
          variant="secondary"
          onClick={() => setModalOpen(true)}
        />
      </div>

      {/* Modal Component */}
      <DemoFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </motion.div>

    {/* RIGHT SIDE - Placeholder for future content */}
    <div className="flex-1 hidden md:block"></div>
  </div>
</div>


      {/* OTHER SECTIONS */}
      <Tarding_services />
      <TradingDistribution />
      <Faqs />
      <Footer />
    </>
  );
}

export default Trading_system;
