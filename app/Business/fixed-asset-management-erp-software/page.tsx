"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
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
          backgroundImage:"url('/business-people-analyze-financial-data-600nw-2162135155.webp')",
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
                      Fixed Asset Management

              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            {/* <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              ERP systems can be customized to meet the unique needs
              and challenges of different industries
            </motion.p> */}

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
      <div className="lg:w-9/12 w-full  mx-auto p-6 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">
        Optimize Asset Management with Golden LakeERP Software
        </h1>
        <p className="mb-4">
        Effective Fixed Asset Management (FAM) in business operations is paramount for organizations seeking enhanced flexibility and control over their asset base. Multi-Techno’s cutting-edge ERP software module for Fixed Asset Management provides businesses with robust tools to handle and track company assets, ensuring optimal accounting practices and compliance with tax regulations. This comprehensive guide delves into the features, processes, and benefits of Fixed Asset Management, shedding light on how businesses can leverage technology for streamlined operations.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/ezgif.com-gif-maker-15-1024x512.webp" // Replace with actual image
            alt="
Fixed Asset Management"
            className="w-full mt-10 mb-10rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Features of Fixed Asset Management
        </h2>
        <p className="mb-4 mt-10">
        Fixed Asset Management, as an integral part of the accounting process, serves multiple purposes, including financial accounting, preventive maintenance, and theft prevention. Organizations often face challenges tracking their fixed assets, including location, quantity, condition, maintenance history, and depreciation status. Multi-Techno’s Fixed Asset Management module addresses these challenges, providing a structured approach to managing and maintaining assets.  </p>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Setup Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Transactions:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><span className="font-bold">Asset Category:</span> Classify assets for better organization.</li>
      <li><span className="font-bold">Sub Category:</span>: Further refine asset classification based on specific criteria.</li>
      <li><span className="font-bold">Code and Properties Definition:</span>  Automate the depreciation process for accurate financial reporting.</li>
      <li><span className="font-bold">Auto Depreciation: </span> Classify assets for better organization.</li>
      <li><span className="font-bold">Value Increase and Decrease:</span> Easily adjust asset values based on changes.</li>
    
    </ul>
  </div>

  {/* Transactions Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Transactions</h3>
    <ul className="list-disc list-inside space-y-2">
    <li><span className="font-bold">Asset List by Category and Subcategory: </span>  Comprehensive lists for efficient asset tracking.</li>
    <li><span className="font-bold">Value Report:</span> Detailed reports on the current value of assets.</li>
    <li><span className="font-bold">Depreciation Plan</span> Visualize the depreciation schedule for planning purposes.</li>
    <li><span className="font-bold">Moving Report:</span> Track assets that have been relocated.</li>
    <li><span className="font-bold">Capitalized Fixed Asset Management:</span> Efficient management of assets acquired for production, services, or leasing.</li>

    </ul>
  </div>

  {/* Reports Section */}

</div>

        <h2 className="text-2xl font-bold mt-6 mb-3">Capitalization of Fixed Assets</h2>
        <p className="mb-4">
        Assets that contribute to revenue generation, such as those used for production or services, are capitalized. Multi-Techno’s Fixed Asset Management facilitates the registration and entry of assets into the company’s fixed asset list. It distinguishes these assets from regular expenditures by considering their ongoing benefits beyond the year of purchase.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Reporting on Company Operations
        </h2>
        <p className="mb-4">
          Monitoring an inventory firm necessitates keeping those in command up
          to date on different business operations, such as the vehicle’s
          location, etc.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Transfer or Lend Fixed Assets
        </h2>
        <p className="mb-4">
        Asset transfers within departments or locations are shared in business operations. Multi-Techno’s ERP software Accommodates these transfers seamlessly, whether assets are moved to a different location or transferred to a low-value pool as their value decreases.</p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Revalue Fixed Assets Management
        </h2>
        <p className="mb-4">
        The Revaluation process involves restating the costs of assets based on their actual worth. This approach ensures accurate financial statements, considering inflation and total asset costs over time. Multi-Techno’s ERP system enables businesses to conduct revaluation, providing a more realistic representation of asset values.  </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Split Fixed Assets
        </h2>
        <p className="mb-4">
        In specific scenarios, assets need to be split into parts. Multi-Techno’s ERP system allows for dividing assets into a defined number of new investments and distributing the costs of the original help among the newly created records.  </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Depreciate or Amortize Fixed Assets
        </h2>
        <p className="mb-4">
        Depreciation and amortization calculations are integral to the Fixed Asset module. Multi-Techno’s software supports various methods for calculating depreciation, including straight-line, declining balance, sum-of-the-year digits, and production units. The system automates these calculations monthly and yearly, aiding in precise financial reporting. </p>
    <h3 className="text-xl font-bold mb-2">Transactions</h3>
    <ul className="list-decimal list-inside space-y-2">
    <li><span className="font-bold">Better Organization of Asset Data: </span>  Centralized asset information management</li>
    <li><span className="font-bold">Timely Reports and Orderly Papers: </span> Streamlined reporting processes and organized documentation.</li>
    <li><span className="font-bold">Detailed Asset Record Organization: </span>  Enhanced categorization and tracking.</li>
    <li><span className="font-bold">Maintenance of Assets in Good Working Order:</span>Efficient preventive maintenance.</li>
    <li><span className="font-bold">Automated Asset Transfers:</span>Simplified handling of asset transfers between departments or locations.</li>
    <li><span className="font-bold">Easy Handling of Change Requests:</span>Efficient processing of change requests related to assets.</li>
    <li><span className="font-bold">Automated Depreciation Calculations:</span>: Accurate and automated depreciation calculations for precise financial reporting</li>

    </ul>
 
        <p className="mb-4">
        In conclusion, adopting Fixed Asset Management through Multi-Techno’s ERP software ensures compliance with accounting standards and operational efficiency in handling the complete lifecycle of fixed assets. From acquisition to disposal, the system provides businesses the tools to make informed decisions, automate processes, and maintain optimal control over their valuable assets.
  </p>    </div>
  <div className="flex items-center justify-between bg-gray-200 p-6 md:p-12">
      {/* Left Side - Text & Button */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-700">
          Best Cloud ERP Software Solution
        </h1>
        <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block flex-1">
        <img
          src="/typingkeyboard.webp" // Replace with actual image path
          alt="Typing on Keyboard"
          className="w-full h-full  "
        />
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Page;
