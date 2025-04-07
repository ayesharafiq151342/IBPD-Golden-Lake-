"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import Link from "next/link";
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
          backgroundImage: `url('/idustry-blue-chemical-reaction-with-smoke-in-a-flask-concept-of-science-chemistry-experiment-and-laboratory-photo.jpg')`,
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
              Chemical Industry
              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leverage your process with unimaginable benefits by automating all
              your processes.
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
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        {/*ERP Software for Chemical Manufacturers
         */}
        <section>
          {/* ERP Software for Chemical Manufacturers */}
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              ERP Software for Chemical Manufacturers
            </h1>
            <p className="text-justify">
              These days, the challenge is deciding which technology is best for
              your business. On the one hand, we want to take responsibility for
              the company’s growth and innovation. However, I don’t try to pull
              the trigger on a failed project.
            </p>
            <p className="text-justify">
              So, is ERP software worth the risk for chemical manufacturers? To
              find out, it’s important to weigh the benefits of ERP software..
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Overview
            </h1>
            <p className="text-justify">
              At its most basic, ERP software is an application or tool that
              helps consolidate a company’s information databases, automate
              routine tasks, and streamline critical tasks.
            </p>
            <h1 className="text-lg sm:text-lg md:text-4xl lg:text-lg xl:text-lg mt-4  text-start  mb-5  text-gray-800">
              This is an end-to-end solution and includes features such as:
            </h1>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Human Resource</li>
              <li>
                <Link
                  href="/accounting-finance"
                  className="text-blue-600 hover:underline"
                >
                  Accounting and Finance
                </Link>
              </li>
              <li>
                <Link href="/crm" className="text-blue-600 hover:underline">
                  Customer Relationship Management
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory-management"
                  className="text-blue-600 hover:underline"
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Manufacturing
                </Link>
              </li>
              <li>Analytics</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What role does ERP software play for chemical manufacturers?
            </h1>
            <p className="text-justify">
              For some companies, complexity is a key point. However, in the
              chemical manufacturing industry, it is usually challenging to
              handle. Lack of streamlined processes and slow data manipulation
              can lead to inefficiencies. This is where his ERP software for
              chemical companies comes in, helping the industry accordingly.
            </p>
          </div>
        </section>
      </section>
      {/* ERP Principles of Solar Power and Energy Management Systems */}
      <section className="bg-gray-200 mt-10 py-16">
        {/* Section Title Animation */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Features of ERP Software in the Chemical Industry
          </h1>
        </motion.div>

        {/* Two-column section with animations */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[
            {
              title: "Secure Documentation",
              text: "ERP software Golden Lake can integrate all your existing systems into one. In return, efficiency is increased, and top quality is maintained everywhere...",
            },
            {
              title: "Workflows and Processes",
              text: "Quality control is an important part of the chemical industry. Moreover, it is also the basis for the production of chemicals...",
            },
            {
              title: "Chemical Formulations",
              text: "The chemical industry requires a master batch protocol. Moreover, it is ideal for ensuring full traceability and accuracy from one product batch to another...",
            },
            {
              title: "Planning Decisions",
              text: "Golden Lake ERP software gives you all the information you need to make well-informed decisions...",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered effect
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Benefits of ERP software for chemical manufacturers: */}
      <section className="m-auto mt-10 lg:w-9/12 2-full p-7">
        <section>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="font-bold">Recipe Management:</li>
            <p className="text-justify">
              Recipe management is the driving force behind product purchases
              within an enterprise. With integrated ERP software, chemical
              companies can easily track raw material counts. Basic materials
              can be ordered continuously so that production needs can be met.
            </p>
            <li className="font-bold">Inventory Management:</li>
            <p className="text-justify">
              In the chemical manufacturing industry, inventory management is a
              perfect feature when using data elements. Integrated ERP software
              contains the shipping and warehouse information needed for
              location management.
            </p>
            <li className="font-bold">Innovative Products:</li>
            <p className="text-justify">
              A company consists of multiple departments, such as sales,
              marketing, manufacturing, and research and development. They all
              receive and share data. An efficient ERP solution allows chemical
              manufacturing companies to manage their product lifestyles. In
              return, it also anticipates future requirements.
            </p>
            <li className="font-bold">Improved collaboration:</li>
            <p className="text-justify">
              When all departments within an organization include and have
              access to ERP software, the entire organization benefits. This
              results in better collaboration, stronger relationships with
              customers and suppliers, increased purchases, shorter procurement
              processes, and lower prices.
            </p>
            <li className="font-bold">Production Planning:</li>
            <p className="text-justify">
              ERP solutions offer chemical manufacturers the opportunity to
              increase flexibility. Revised or new manufacturing schedules can
              be easily shared across the supply chain network. It then helps to
              manage the manufacturing process based on correct marketing and
              sales activities. If you are looking for integrated ERP software
              for chemical manufacturers, contact the experts at Golden Lake
              ERP.
            </p>
          </ul>
        </section>
      </section>
      <Footer />{" "}
    </>
  );
}

export default Page;
