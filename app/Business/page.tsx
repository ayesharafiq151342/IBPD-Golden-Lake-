"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from 'framer-motion';

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  const modules = [
    {
      title: "Financial Management Module",
      description:
        "Any ERP system’s core is its Financial Management module, which oversees all financial transactions and data. It ensures accurate financial reporting, tracks accounts payable and receivable, and supports budgeting and forecasting",
      keyFeatures: [
        "Accounting and bookkeeping",
        "Financial reporting",
        "Budgeting and forecasting",
        "Tax and compliance management",
      ],
      image: "/project-0.png",
    },
    {
      title: "Human Resources (HR) Management Module",
      description:
        "The HR Management module helps in tracking employee records, payroll, benefits, and performance management.",
      keyFeatures: [
        "Employee management",
        "Payroll processing",
        "Performance tracking",
        "Recruitment and onboarding",
      ],
      image: "/project-1.png",
    },
    {
      title: "Sales and Marketing Module",
      description:
        "The Sales and Marketing module assists organizations in managing customer interactions, tracking leads, and improving sales performance. It helps streamline the entire sales cycle, from lead generation to closing deals.",
      keyFeatures: [
        "Customer Relationship Management (CRM) integration",
        "Lead and opportunity tracking",
        "Sales forecasting and analytics",
        "Campaign management",
      ],
      image: "/project-2b.png",
    },
    {
      title: "Supply Chain Management Module",
      description:
        "The Sales and Marketing module assists organizations in managing customer interactions, tracking leads, and improving sales performance. It helps streamline the entire sales cycle, from lead generation to closing deals.",
      keyFeatures: [
        "Supplier management",
        "Order processing and fulfillment",
        "Demand planning",
        "Shipment tracking",
        "Supplier contract management",
      ],
      image: "/project-4.png",
    },
    {
      title: "Manufacturing Module",
      description:
        "For sectors engaged in production, the Manufacturing module is essential. It oversees the production process, ensuring efficiency, cost management, and high-quality outputs.",
      keyFeatures: [
        "Production planning and scheduling",
        "Bill of Materials (BOM) management",
        "Quality control",
        "Machine and resource allocation",
      ],
      image: "/project-0.png",
    },
    {
      title: "Customer Relationship Management (CRM) Module",
      description:
        "This module focuses on improving customer interactions and relationships. It supports lead generation, customer service, and data-driven insights to improve client satisfaction.",
      keyFeatures: [
        "Lead and contact management",
        "Sales pipeline management",
        "Customer support and service tracking",
        "Customer analytics and feedback",
      ],
      image: "/ngo-sale.png",
    },
    {
      title: "Project Management Module",
      description:
        "For businesses handling multiple projects, the Project Management module provides tools to plan, track, and execute projects on time and within budget.",
      keyFeatures: [
        "Lead and contact management",
        "Sales pipeline management",
        "Customer support and service tracking",
        "Customer analytics and feedback",
      ],
      image: "/project-2b.png",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
  
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/business-image-home-1.jpg')" ,
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
                              Golden Lake ERP Modules for Business Processes


              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            <motion.p
              className="text-sm  text-justify sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
                    Simplify workflows with modules for inventory, finance, HR, and
              supply chain management. Access accurate data instantly to make
              informed business decisions and boost productivity. Tailor ERP
              modules to fit your unique business needs for maximum efficiency and
              growth.
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
      <div className="m-auto w-11/12 lg:w-9/12 p-6">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Comprehensive Guide to ERP Modules: Streamlining Business Operations
          </h1>
          <p className="text-gray-600 text-justify mt-2">
            Enterprise Resource Planning (ERP) systems have become vital in
            managing modern businesses by integrating various operations into a
            single unified platform. ERP systems offer a range of modules tailored
            to specific functions within an organization. These modules allow
            companies to enhance productivity, streamline workflows, and improve
            decision-making processes. This guide will explore the key ERP modules
            and their benefits for different business sectors.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Main ERP Modules and Their Functions</h1>
        <div className="space-y-10 mt-8">
  {modules.map((module, index) => (
    <div
      key={index}
      className={`flex flex-col items-center gap-6 bg-white p-6 shadow-md rounded-lg md:flex-col lg:flex-row lg:gap-10`}
    >
      {/* Image Section */}
      <img
        src={module.image}
        alt={module.title}
        className="w-full h-auto lg:w-[800px] lg:h-[400px] object-cover rounded-md"
      />
      {/* Content Section */}
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{module.title}</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">{module.description}</p>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {module.keyFeatures.map((feature, i) => (
            <li key={i} className="text-sm md:text-base">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


      </div>

      <Footer />
    </>
  );
}

export default Page;
