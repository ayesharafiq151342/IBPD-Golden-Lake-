"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from "framer-motion";
import ParalexCash from "./components/page";

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/cash-management-system.webp')",
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
              Accounts and Finance Management System
              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

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

      {/* Features Section */}
      <div className="lg:w-9/12 p-6 m-auto mt-10">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Features of Cash Management System</h2>
          <p className="text-gray-700 mb-4">
            Cash management refers to a broad area of finance involving cash collection, handling, and usage. Further, Cash management systems and services for managing liquidity, account balances, payments, and other cash management functions. You can monitor, predict, and manage cash using customizable reports. Moreover, all of this happens in real-time to support the most accurate decision-making. Systems help businesses optimize liquidity and financial performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Setup:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li> Bank Definition</li>
                <li>Cheque Book Collection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Transactions</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Bank Transfer</li>
                <li>Collection and Routes</li>
                <li>Bank Reconciliation</li>
                <li>Online Slip Transfer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Reports</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Bank Inflow Outflow Summary</li>
                <li>Bank Inflow Outflow</li>
                <li>Cash Inflow Outflow</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Streamline Section */}
      <div className="lg:w-9/12 p-6 m-auto mt-10 mb-10 text-gray-900">
        <h1 className="text-3xl font-bold mb-4">Banks Define Cash Management System</h1>
        <p className="mb-4 font-semibold">Golden Lake</p>
        <p className="mb-6">
          Provides a cash and bank account opening form in which you add all the information about the banks. Furthermore, cash management services facilitate transaction administration. Moreover, it enables users to open a bank account in the software. Also, it allows consumers to connect digitally.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Checkbook Define</h2>
        <p className="mb-6">
          A chequebook is designed to make writing checks easier for businesses. Furthermore, you can open a chequebook in the software and fill out a form in the software for your specific function. Moreover, it keeps track of every tab of a cheque issued by the Bank. Also, it’s made to create chequebooks for many banks.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cash in Outflow Statement</h2>
        <p className="mb-6">
          Cash-in and cash-out details are presented as a statement in cash flow management. Further, it indicates how the money moved in and out of the firm and provides the connection between financial reports.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Bank in Outflow Statement</h2>
        <p className="mb-6">
          Some banks provide a cash flow statement as part of their annual reports, even though they are not required to prepare one. This includes the termination of funds using <span className="text-blue-600 font-semibold">Cash Management Services</span>.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cash in Outflow Summary</h2>
        <p className="mb-6">
          This summary includes all cash flow statements, providing insight into the company’s cash inflows and outflows over a specified period.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Bank in Outflow Summary</h2>
        <p className="mb-6">
          The summary includes all banks inflows and outflows, making it easy to analyze and evaluate the data. As businesses grow, maintaining this data efficiently becomes essential.
        </p>
      </div>

      {/* Cash Flow Statement Section */}
      <div className="flex lg:w-9/12 p-6 m-auto flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center order-last md:order-first">
          <img
            src="/cash-management-system-and-method-1536x1536.webp"
            alt="Cash Flow Statement"
            className="w-full max-w-sm rounded-lg shadow-md mb-6"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Cash Flow Statement</h2>
          <p className="mb-4">
            The cash flow statement controls the inflow and outflow of cash inside an organization. Moreover, companies use cash flow to keep their cash flow positive and estimate future cash flow. Further, it is based on investing, financial, and operating activities.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><span className="font-semibold">Operating Activity:</span> An organization’s primary revenue-generating operations and other operations that are not investing or financing.</li>
            <li><span className="font-semibold">Financing Activity:</span> Any cash flows resulting from changes in the amount and mix of the entity’s allocated equity capital or bank debt.</li>
            <li><span className="font-semibold">Investing Activity:</span> Any cash flows not used in cash and equivalents from the buying and selling of long-term assets.</li>
          </ul>
        </div>
      </div>

      <ParalexCash />

      {/* Final Section */}
      <div className="lg:w-9/12 p-6 m-auto mt-10">
        <section className="mb-10 ">
          <h2 className="text-2xl font-bold mb-4 ">Banks Define Cash Management System</h2>
          <p className="text-gray-700 mb-4 ">
            Golden Lake provides a cash and bank account opening form in which you add all the information about the banks. Furthermore, cash management services facilitate transaction administration. Moreover, it enables users to open a bank account in the software. Also, it allows consumers to connect digitally.
          </p>
   
          <h2 className="text-2xl font-bold mb-4">Benefits:</h2>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Tracking your cash</li>
            <li>Reducing expenses</li>
            <li>Boosting profitability</li>
            <li>Improving liquidity</li>
            <li>Enhancing financial management</li>
            <li>Minimizing risks and inefficiencies</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Multi-Techno can help you design, implement, and maintain a robust cash management system.
            <br />
            Our ERP system for cash management:
            <br />
            Cash Management Solutions
            <br />
            Cash Management Services
            <br />
            Cash Management System
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Page;
