"use client";
import Navbar from "@/app/components/navbar";
import Button from "@/app/ui/style";
import Link from "next/link";
import { motion } from 'framer-motion';

import A from "./components/mani-erp-per";
import Footer from "@/app/components/footer";
import SupplyChain_Manage from "./components/supply_manage";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
function Manage_system() {
  // State for form inputs
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />



<div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: `url('/mani-page3.webp')`,
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
              className="text-xl sm:text-xl md:text-xl lg:text-4xl text-white font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
           
           Supply Chain Management Solutions


              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>
            <motion.div
  className="text-sm sm:text-base md:text-lg text-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  <p>
    Here are the key advantages of using our system:
  </p>
  <ul className="text-white mt-4 text-sm md:text-base lg:text-lg list-disc list-inside">
    <li>Simplify procurement and inventory with SCM tools</li>
    <li>Ensure transparency with real-time tracking</li>
    <li>Cut costs and boost efficiency with automation</li>
  </ul>
</motion.div>

    
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
      <A />

      {/* Parallax Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed parallax-bg"
          style={{ backgroundImage: "url(/OPT.jpg)" }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-purple-200 bg-opacity-70 flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-black text-center px-4 w-10/12 md:w-8/12">
            Optimize your supply chain with Multi-Techno. Contact us now!
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row lg:w-9/12 justify-center mt-5 gap-4">
            {/* Contact Button Linking to Form */}

            {/* Modal Component */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
            <Link href="#demo">
              <Button
                label="Free Demo"
                variant="secondary"
                onClick={() => setModalOpen(true)}
              />
            </Link>
            <Link href="/aboutus">
              <Button label="Learn More" variant="secondary" />
            </Link>
          </div>
        </div>

        {/* Parallax Effect Styles */}
        <style jsx>{`
          .parallax-bg {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150%;
            top: -25%;
          }

          @media (max-width: 768px) {
            /* Disable fixed background on mobile for better performance */
            .parallax-bg {
              background-attachment: scroll;
            }
          }
        `}</style>
      </div>
      <SupplyChain_Manage />
      <Footer />
    </>
  );
}

export default Manage_system;
