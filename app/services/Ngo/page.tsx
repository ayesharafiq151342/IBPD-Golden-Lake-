"use client";
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'
import Button from "@/app/ui/style";
import Image from 'next/image'
import NGOERPBenefits from './components/Ngo-befits';
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import { motion } from 'framer-motion';

function NGO_management() {
    const [isModalOpen, setModalOpen] = useState(false);
  
  return (
<>

<Navbar/>

     
       {/* <section className="flex flex-col-reverse md:flex-row mt-20 lg:mt-0 items-center h-auto md:h-screen text-black p-6 rounded-lg shadow-md">
       
        <div className="mb-10 md:mb-0 text-center md:text-left lg:ml-72 lg:mt-32 w-full md:w-1/2">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-purple-700">
            Golden-Lake ERP System for NGOs
          </h3>
          <p className="">
            Transform Your Manufacturing Operations, Streamline Processes, <br />
            Boost Productivity and Optimize Resources
          </p>
          <Button
              label="Schedule a demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
        </div>

    
        <div className="w-full md:w-full flex justify-center">
          <img 
            src="/ngo-4.webp" 
            alt="NGO-bg-image" 
            className="w-full   lg:w-full lg:h-screen  lg:mr-20 object-cover" 
          />
        </div>

      </section> */}
    <div
      className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
      style={{
        backgroundImage: `url('/ngo-4.webp')`,
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
            Golden-Lake ERP System for NGOs
            <hr className="w-full border-white border-2 my-4" />
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           Transform Your Manufacturing Operations, Streamline Processes, <br />
           Boost Productivity and Optimize Resources
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

      <section className='w-full p-5 lg:w-9/12 m-auto'>

<div className=' lg:m-auto flex '>
                    <div className='flex-1'>
                        <h1 className='  font-bold lg:text-4xl md:text-3xl lg:mt-10 '>Golden-lake ERP System for NGOs and Non-Profit Orgnizations</h1>
                        <p className='text-justify mt-2'>
                        Maintaining a non-governmental organization (NGO) involves extraordinary obstacles, such as managing human resources, keeping financial accounting, and supervising several initiatives simultaneously. A dependable ERP (Enterprise Resource Planning) system is necessary to fulfil these various demands. The specialized modules of the Golden-lake ERP system for NGOs are made especially for non-profits, empowering them to run smoothly, effectively, and openly.            </p>
                        <h1 className=' mt-2 font-bold lg:text-4xl lg:mt-5 md:text-3xl'>What Is CRM, and Why Does It Matter?</h1>
                        <p className='text-justify mt-2'>
                        Recent data indicates that 85% of organizations have experienced increased productivity due to deploying an ERP system for NGOs. By using the right ERP system for NGOs, these organizations can significantly improve their operations, collaboration, and financial literacy.           </p>
                       
                        <p className='text-justify mt-2'>
                        This post will examine how the “Golden-lake ERP system for NGOs” assists NGOs in efficiently managing their day-to-day activities so they can concentrate more on accomplishing their goals.    </p>
                    </div>

                </div>
                <div>
    <Image
                         src="/dashboard.jpg"
                         alt="Dashobard"
                         width={9000}
                         height={4000}
                         className="mt-20 w-full max-w-[100%] m-auto md:max-w-[800px] lg:max-w-[1400px] lg:max-h-[700px] mb-20 "
                     /> 
</div>
      </section>
      <div className=' w-full lg:w-9/12 p-5 lg:m-auto flex '>
                    <div className='flex-1'>
                        <h1 className='  font-bold lg:text-4xl md:text-3xl  '>What Makes ERP Systems Necessary for NGOs?</h1>
                        <p className='text-justify mt-2'>
                        Managing numerous programs across locations, budgetary restrictions, reporting requirements from multiple donors, and compliance issues are just a few of the intricate operational obstacles NGOs frequently encounter. Ensuring appropriate fund allocation, monitoring progress, and maintaining transparency can be challenging when dealing with manual procedures or fragmented software. </p>
                       
                          </div>

                </div>
      <div className="p-8 space-y-12">
      {/* Empowering Businesses Section */}
      <section className="flex flex-col-reverse md:flex-row items-center  p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">

        {/* Left Side Text */}
        <div className="md:w-1/2 lg:mt-10 lg:mb-10 mt-10 lg:mt-0 text-left">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
          Inventory Management Module 
          </h2>
          <p className="text-gray-600">
          It’s essential for non-governmental organizations (NGOs) that distribute supplies or items to have a productive inventory management system. Organizations may control stock levels, monitor their inventory in real-time, and ensure that goods are sent on schedule with Golden-lake’s Inventory Module. Advantages include:    </p>
      <ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
        <li>
        Accurate record-keeping for auditing purposes
        </li>
        <li>
        Real-time inventory tracking and controls
        </li>
        <li>
        Supply chain management optimizatio
        </li>
        <li>
        Avoid stock shortages or overstockin
        </li>
       </ul>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/ngo-inventory.png"
            alt="Ngo-image-Inventory"
            className="w-full  rounded-lg "
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center  rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 ">
          <img
            src="/ngo-account.png"
            alt="Ngo-image-acocount"
            className="w-full  rounded-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left ml-5">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Accounting  Module
          </h2>
          <p className="text-gray-600">
          For NGOs to preserve financial integrity and guarantee that donor funds are used properly, a robust accounting system is necessary. NGOs can track spending, manage their money, and create financial reports with the help of Golden-lake’s Accounts and Financial Module. Advantages include:
          </p>
                 <ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
        <li>
        Monitor revenue and expenditures
        </li>
        <li>
        Streamline financial reporting and audits
        </li>
        <li>
        Guarantee adherence to donor and regulatory mandates
        </li>
        <li>
        Establish financial transparency for stakeholders and donors
        </li>
       </ul>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row items-center  p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">

{/* Left Side Text */}
<div className="md:w-1/2 lg:mt-10 lg:mb-10 mt-10 lg:mt-0 text-left">
  <h2 className="text-3xl font-bold text-purple-800 mb-4">
  HR  Module 
  </h2>
  <p className="text-gray-600">
  This module for NGOs, managing employees and volunteers is essential. The HR and Payroll Module from Golden-lake makes it easy for NGOs to manage personnel data, payroll, attendance, and benefits, guaranteeing efficient HR operations. Advantages include:  </p>
<ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
<li>
Tracking employee performance and development
</li>
<li>
Managing employee records and attendance
</li>
<li>
Processing payroll and tax computations automatically
</li>
<li>
Adhering to organizational policies and labor laws
</li>
</ul>
</div>

{/* Right Side Image */}
<div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
  <img
    src="/ngo-hr.png"
    alt="Ngo-image-HR"
    className="w-full  rounded-lg"
  />
</div>
</section>
<section className="flex flex-col md:flex-row items-center  rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 ">
          <img
            src="/ngo-sale.png"
            alt="Ngo-image-sale"
            className="w-full  rounded-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left ml-5">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Sales  Module
          </h2>
          <p className="text-gray-600">
          For NGOs, maintaining financial integrity and ensuring proper use of donor funds is crucial. Golden-lake’s Sales Module empowers organizations to track revenue, manage transactions, and generate detailed financial reports with ease. Key benefits include:  </p>
                 <ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
        <li>
       Keep track of all incoming funds and transactions.
        </li>
        <li>
        Adhere to financial guidelines and donor expectations.
        </li>
        <li>
        Provide clear financial insights to stakeholders and donors.
        </li>
        <li>
        Generate accurate reports for compliance and transparency.
        </li>

       </ul>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row items-center  p-6 rounded-lg shadow-md lg:w-9/12 lg:m-auto">

{/* Left Side Text */}
<div className="md:w-1/2 lg:mt-10 lg:mb-10 mt-10 lg:mt-0 text-left">
  <h2 className="text-3xl font-bold text-purple-800 mb-4">
  Project Management Module
  </h2>
  <p className="text-gray-600">
  NGOs frequently manage several projects in various places, necessitating meticulous planning, monitoring, and reporting. Effective project planning, monitoring, and evaluation are made possible for NGOs by the Golden-lake ERP system’s Project Management Module. Advantages include:  </p>
<ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
<li>
Monitor project schedules and deliverables
</li>
<li>
Effectively allocate resources
</li>
<li>
Keep an eye on project spending and budgets
</li>
<li>
Produce reports on project results and impact
</li>
</ul>
</div>

{/* Right Side Image */}
<div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
  <img
    src="/project-2.png"
    alt="Ngo-image-project"
    className="w-full  rounded-lg"
  />
</div>
</section>
<section className="flex flex-col md:flex-row items-center  rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 ">
          <img
            src="/project-1.png"
            alt="Ngo-image-dashbboard"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left ml-5">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
       
Dashboards and Reporting
          </h2>
          <p className="text-gray-600">
          Accountability and transparency are essential to the success of NGOs. Nonprofit organizations may create reports in real-time, track key performance indicators (KPIs), and keep an eye on the general health of their company with the help of Golden-lake’s Reporting Module and Dashboards. Advantages include:</p>
                 <ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
        <li>
        Produce customizable reports in real time.
        </li>
        <li>
        Use KPIs to monitor organizational performance.
        </li>
        <li>
        Use interactive dashboards to present data graphically.
        </li>
        <li>
        Easily distribute reports to stakeholders and contributors
        </li>

       </ul>
        </div>
      </section>
      </div>
      <NGOERPBenefits/>
<Footer/></>
  )
}

export default NGO_management
