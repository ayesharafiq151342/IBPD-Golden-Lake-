"use client";
import React, { useState } from "react";
import Navbar from '../components/navbar'
import Services_Industries from './components/Services_Industries'
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);


  return (
   <>
   <Navbar/>
 
 
<div
className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
style={{
  backgroundImage: `url('/industry-bgimage.webp')`,
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
              Industries
      <hr className="w-full border-white border-2 my-4" />
    </motion.h1>

    <motion.p
      className="text-sm sm:text-base md:text-lg text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
    ERP systems can be customized to meet the unique needs
    and challenges of different industries
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
<Services_Industries/>
<Footer/>
   </>
  )
}

export default Page
