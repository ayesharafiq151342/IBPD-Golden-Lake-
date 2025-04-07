"use client";
import React, { useState } from 'react'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Payroll_services from './components/payroll-serveics'
import Payroll_benifts from './components/payroll-benfit'
import { motion } from 'framer-motion';
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function Page() {

    const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      
  <Navbar/>

<div
className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
style={{
  backgroundImage: `url('/payrol-bg-1.jpg')`,
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
           HR And Payroll Management  System
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
<section className="flex flex-col mt-20 mb-20  md:flex-row items-center rounded-lg shadow-md p-6 lg:w-10/12 lg:mx-auto gap-6">
  {/* Left Side Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/payrol-image.webp"
      alt="Ngo-image-account"
      className="w-80 h-96 md:w-96 rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side Text */}
  <div className="md:w-1/2 text-left space-y-4">
    <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-purple-800">
      Revolutionize HR & Payroll Processing with Multiapp Payroll Automation
    </h2>
    <p className="text-gray-100 md:text-gray-800">
      For NGOs to preserve financial integrity and guarantee that donor funds are used properly, a robust accounting system is necessary. NGOs can track spending, manage their money, and create financial reports with the help of Golden-lake’s Accounts and Financial Module. Advantages include:
    </p>
    <ul className="list-disc ml-4 list-inside  text-gray-100 md:text-gray-800">
      <li>Monitor revenue and expenditures</li>
      <li>Streamline financial reporting and audits</li>
      <li>Guarantee adherence to donor and regulatory mandates</li>
      <li>Establish financial transparency for stakeholders and donors</li>
    </ul>
    <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

            {/* Modal Component */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
  </div>
</section>

    <Payroll_services/>
      <img
            src="/h.webp"
            alt="Profile"
             className='m-auto mt-20 mb-20'
            
          />
        <section className="bg-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Features of HR and Payroll System Management
        </h2>
        <p className="mt-4 text-gray-600 text-justify">
          From time to time HR and payroll system will manage company employees’
          records and history. Even so, Employee daily attendance, Employee
          Leave Management, and Advances and Payroll auto-generated salary make
          fewer men power.
        </p>
      </div>

      <div className="border-t border-gray-400 mt-6 max-w-4xl mx-auto"></div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-800">
        {/* Definition Modules */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 border-l-4 pl-2 border-purple-700">
            Definition Modules:
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Employee Define</li>
            <li>Units Define</li>
            <li>Departments Define</li>
            <li>Sections Define</li>
            <li>Employee Designations</li>
            <li>Gazetted Holiday Define</li>
            <li>Salary Information</li>
          </ul>
        </div>

        {/* Transaction Modules */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 border-l-4 pl-2 border-purple-700 ">
            Transaction Modules:
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Join / Resign / Transfer</li>
            <li>Employee Attendance</li>
            <li>Month Process</li>
            <li>Salary Process</li>
            <li>Advances</li>
            <li>Increments</li>
            <li>Loan</li>
            <li>Deductions</li>
            <li>Holidays</li>
          </ul>
        </div>

        {/* Reports */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 border-l-4 pl-2 border-purple-700">
            Reports:
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>List Department Wise</li>
            <li>Salary Slip</li>
            <li>Attendance</li>
            <li>Attendance Register</li>
            <li>Month Process</li>
            <li>Salary Process</li>
            <li>Increment List</li>
            <li>Employee Advances</li>
          </ul>
        </div>
      </div>
    </section>
    <Payroll_benifts/>
  <Footer/>
    </div>
  )
}

export default Page
