"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from "framer-motion";

function InventoryManagement() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/Purchase-management.jpg')",


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
                          Purchase Management System

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
          Enhance Efficiency with Golden LAke Purchase Management System
        </h1>
        <p className="mb-4">
          The practice of obtaining things from outside vendors is known as
          purchase management. Further, It involves the ordering, receiving,
          evaluating, and approval of Sales Orders. In the Same Way, Managing
          the connection with the supplier is also part of a purchase management
          system. For the most part, Golden Lake has the solution for your
          business.
        </p>
        <div className="flex justify-center mb-10 mt-10">
          <img
            src="/Purcahse-managemnt-flow diagram.webp" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full  rounded-lg shadow-md"
          />
        </div>
        <div className="p-6   mx-auto  space-y-6">
          <h1 className="text-2xl font-bold">
            Features of Purchase Management System
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-semibold">Setup:</h2>
              <ul className="list-disc pl-5">
                <li>Vendor Definition</li>
                <li>Contractor Define</li>
                <li>Sale Tax Define</li>
                <li>W.H.T. Define</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Reports:</h2>
              <ul className="list-disc pl-5">
                <li>Purchase Requisition Report</li>
                <li>Purchase Requisition Status Report</li>
                <li>RFQ Report</li>
                <li>Quotation Report</li>
                <li>Purchase Order Report</li>
                <li>Status Report</li>
                <li>Summary Report</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Transactions:</h2>
              <ul className="list-disc pl-5">
                <li>Purchase Requisition</li>
                <li>Request for Quotation</li>
                <li>Quotation Approval</li>
                <li>Purchase Order</li>
                <li>Material Received Note</li>
                <li>Material Inspection Note</li>
                <li>Goods Receipt Note</li>
                <li>Purchase Return</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold">
            Benefits of Purchase Management System
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduces human error</li>
            <li>Saves time and money</li>
            <li>Controls purchases</li>
            <li>Improves purchase management accuracy</li>
            <li>Identifies your best vendors and customers</li>
            <li>User-friendly</li>
          </ul>

          <h2 className="text-xl font-bold">Procedure of Purchase</h2>
          <p className="mb-4 text-justify">
          
            The purchasing process is usually organized in a cycle, with each
            stage necessitating data exchange and numerous permissions. Because
            every company will have its unique touches, but in general, the
            purchase process follows a well-defined sequence of actions.
          </p>

          <h3 className="font-semibold">Purchase Requisition</h3>
          <p className="mb-4 text-justify">
          
          A purchase requisition is a document an employee submits to their business’s financial department to request authorization to acquire products or services from outside the company.

Golden Lake offers you the ERP software for your business.
          </p>

          <h3 className="font-semibold">Request for Quotation</h3>
          <p className="mb-4 text-justify">
          
            Businesses invite vendors and suppliers to submit bids for specific
            products or services.
            <br/>
            It is generally an inquiry for the pricing of the products you know you want. Moreover, the Golden  Lake ERP software gives you that feature for your clients.
          </p>

          <h3 className="font-semibold">Quotation Approval</h3>
          <p className="mb-4 text-justify">
          
          The original employee sends the purchase requisition to the person in charge of P.O. approvals. By then, it could be the owner’s boss or someone further up the corporate ladder. Moreover, if the request is approved, you move on to the next phase in the procedure at this instant.


          </p>

          <h3 className="font-semibold">Purchase Order</h3>
          <p className="mb-4 text-justify">
          
          In a buying system of Multi Techno ERP software, a purchase order number is issued to a requisition once approved and transmitted to the vendor. This independent document starts the sales process and is a legally enforceable contract for all parties concerned.
          </p>

          <h3 className="font-semibold">Order Number</h3>
          <p className="mb-4 text-justify">
          
          The order number issued to the requisition is usually the same as the request number; furthermore, they are stored together.     Tracking incoming goods in the warehouse and managing product
          receipts.
          </p>
          <h3 className="font-semibold">Receipt Note</h3>
          <p className="mb-4 text-justify">
          
          The physical transfer of items into the warehouse from external suppliers is receiving goods. Moreover, it always adds to your warehouse’s supply of items. You may organize and execute your product receipts and keep track of the stock of materials that have been ordered and produced.
          </p>
          <h3 className="font-semibold">Inspection Note</h3>
          <p className="mb-4 text-justify">
          
          An inspection is a process that involves measuring, inspecting, testing, or assessing one or more qualities of a product and further comparing the findings to stated standards to determine if that feature is conformed to.     </p>
          <h3 className="font-semibold">G.R.N. (Goods Receipt Note)</h3>
          <p className="mb-4 text-justify">
          
          A Goods Received Note (G.R.N.) is a statement certifying a customers receipt of goods. The first thing to remember. It’s also referred to as a delivery note and is used to prove the transport of that product and that the consumers have received it. Furthermore, G.R.N. is used by suppliers and consumers to compare order and delivery quantities.
           </p>
           <h3 className="font-semibold">Avoid Fraud</h3>
          <p className="mb-4 text-justify">
          
          To avoid fraud or error, firms utilize the ERP implementation by G.R.N. as the supporting document in certain situations. For the most part, accounting departments will need it to track inventory transfers from one location to another. Furthermore, you can buy that ERP system from Multi-Techno.      </p>
          <h3 className="font-semibold">Bottom Line</h3>
          <p className="mb-4 text-justify">
          
          Streamline order placement and ensure timely inventory stock receipt with an efficient purchase management system for your business.  </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
  {/* Text Section */}
  <div className="md:w-1/2">
  <h3 className="text-xl font-bold mb-2">Efficient Purchase Management System for Streamlined Orders</h3>
    <p className="text-justify">Streamline order placement and ensure timely inventory stock receipt with an efficient purchase management system for your business.</p>
 <span className="font-bold">Application Category: </span> Business
 </div>

  

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/purchase-management-system1-300x300.jpg" // Replace with your actual image path
      alt="Cash Flow Statement"
      className="w-full max-w-sm rounded-lg shadow-md"
    />
  </div></div>
</div>

   

      <Footer />
    </>
  );
}

export default InventoryManagement;
