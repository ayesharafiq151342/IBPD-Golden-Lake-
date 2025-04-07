"use client";
import { useState } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import Button from "@/app/ui/style";
import DemoFormModal from "@/app/components/DemoFormModal";
import ManufacturingERP from "./mani_modules";
import { motion } from 'framer-motion';
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
    
     <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: `url('/manifecuring-bg.jpg')`,

    
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
           
           Manufacturing ERP System

              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>
    
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
                  Transform Your Manufacturing Operations, Streamline Processes,
                  Boost Productivity and Optimize Resources      </motion.p>
    
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

      {/* Golden Lake ERP Section */}
      <section className="w-full lg:w-9/12 m-auto p-4">
        <h1 className="text-2xl font-bold mt-10 mb-4 text-center md:text-left">
          ERP: Why Golden Lake for ERP in Manufacturing?
        </h1>
        <p className="text-justify">
          Golden Lake, as SAP Platinum partner and Oracle Gold partner, has
          played a pivotal role in guiding numerous companies toward
          manufacturing excellence. Our expertise lies in harnessing advanced
          planning and optimization tools and seamlessly integrating these into
          intelligent ERP solutions like SAP or Oracle. We help organizations
          embrace IoT, AI, and RPA technologies.
        </p>
      </section>

      {/* SAP Insights Section */}
      <section className="w-full lg:w-9/12 m-auto p-4">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
          Leveraging SAP Manufacturing: Key Insights
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold text-purple-600">
              Understanding SAP Manufacturing:
            </span>
            <br />
            SAP Manufacturing manages BOMs, routings, and production planning
            using MRP and PPDS, seamlessly integrating with material management,
            quality control, and plant maintenance.
          </li>
          <li>
            <span className="font-semibold text-purple-600">
              The Power of SAP:
            </span>
            <br />
            It supports process, discrete, and mixed-mode manufacturing,
            offering end-to-end solutions for production efficiency.
          </li>
          <li>
            <span className="font-semibold text-purple-600">
              Real-Time Manufacturing:
            </span>
            <br />
            With SAP MII, get real-time visibility and optimize processes using
            analytics and integration tools.
          </li>
        </ul>
      </section>

      {/* Industry 4.0 Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start p-4 lg:w-9/12 m-auto gap-6">
  {/* Text Content */}
  <div className="md:w-1/2 text-left mt-6 max-w-3xl">
    <h3 className="text-2xl font-bold mb-4">Embracing Industry 4.0</h3>
    <p className="text-justify mb-4">
      Industry 4.0, often termed the fourth industrial revolution, denotes
      a profound transformation in manufacturing, reshaping how products
      are conceived, refined, and disseminated. This revolution integrates
      emerging technologies, comprehensively reshaping shop floors and
      procedures. Enhancing productivity through advanced technologies
      fundamentally alters the manufacturing landscape, fostering a more
      agile, intelligent, interconnected ecosystem. This shift yields
      heightened efficiency, reduced costs, and increased competitiveness.
      Industry 4.0 symbolizes the metamorphosis of traditional
      manufacturing into interconnected, intelligent systems, creating an
      efficient, responsive industrial environment poised for future
      challenges.
    </p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/mani-2.jpg"
      alt="Golden-Lake ERP"
      className="w-full md:w-10/12 md:mt-20 lg:mt-0 lg:w-9/12 h-auto rounded-lg"
    />
  </div>
</section>


      {/* Process Bottlenecks Section */}
      <section className="w-full lg:w-9/12 m-auto first-letter: p-4">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
          How Industry 4.0 is Removing Process Bottlenecks?
        </h3>
        <p className="text-justify mb-4">
          Industrys 4.0 transforms manufacturing by integrating cutting-edge
          technologies:
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold text-purple-600">
              Internet of Things (IoT):
            </span>
            <br />
            IoT connects devices, optimizing machine performance, safety, and
            agility.
          </li>
          <li>
            <span className="font-semibold text-purple-600">
              Digital Manufacturing Cloud (DMC):
            </span>
            <br />A cloud-based ERP offering simplified machine integration and
            advanced analytics.
          </li>
          <li>
            <span className="font-semibold text-purple-600">
              Real-Time Insights:
            </span>
            <br />
            Enable predictive operations and optimized efficiency with real-time
            data.
          </li>
        </ul>
        <p className="text-justify mt-6">
          Golden Lake provides tailored ERP solutions, helping you navigate
          complex supply chains, boost productivity, and embrace innovation for
          sustained growth.
        </p>
      </section>

      {/* Manufacturing ERP Module */}
      <ManufacturingERP />

      <Footer />
    </div>
  );
}

export default Page;
