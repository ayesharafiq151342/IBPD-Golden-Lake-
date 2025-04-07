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
          backgroundImage: "url('/sale-management-system.png')",
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
                   Sale Management System

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
      {/*    Solar Power and Energy Management Systems: */}
      <div className="lg:w-9/12  w-full  mx-auto p-6">
        <h1 className="lg:text-3xl font-bold mb-4">
          Efficient Sale Management System Golden Lake ERP Solution
        </h1>
        <p className="text text-justify-gray-700 text-justify  mb-6">
          Golden Lake sales management software enables sales staff to work
          together and simplifies everyday tasks. You may improve cooperation
          and reduce boring admin activities. In the same way, you can, in the
          end, meet your sales goals by using ERP to perform a sales management
          system.
        </p>
      </div>
      <div className="lg:w-9/12  m-auto w-full mx-auto p-6">
        {/* Header Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/dashboard2.png" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full lg:w-[1200px]  rounded-lg shadow-md"
          />
        </div>
         <h1 className="lg:text-3xl font-bold mb-4">
            Order to Cash Cycle of Sale Management System
          </h1>
        <div className=" mt-10 mb-6 text-center lg:w-9/12  m-auto w-full">
         

          <img
            src="/Sale-Management-Systeem-1-768x578.webp" // Ensure the path is correct
            alt="Purchase Management Flow Diagram"
            className="w-full   mt-10 rounded-lg shadow-md"
          />
        </div>

        {/* Features Section */}


        {/* Benefits Section */}
        <section className="mt-8">
          <h2 className="lg:text-2xl  font-bold mb-4">How Does It Work?</h2>
          <p className="mb-4 text-justify">
            A sales management system is a tool that helps a sales department
            reach its aim. Multi-techno ERP software for sales management may be
            used by sales managers to track data. Remove executive work and
            issue leads. Client data may be saved on the action plan, making
            sales and marketing reporting simple.
          </p>
          <h2 className="lg:text-2xl  font-bold mb-4">
            Process of Sale Management System
          </h2>
          <p className="mb-4 text-justify">
            Sale management system software may help you observe your leads more
            expertly because this is important for growing your sales process.
            Your sales management process must scale up as your business grows.
            This is simple to complete with a flexible process developer
            integrated into your sales management application. Having a
            procedure in place allows sales professionals to stay focused while
            hoping since they know what to do at each stage of the sales
            pipeline.{" "}
          </p>
          <h2 className="lg:text-2xl  font-bold mb-4">Cost Sheet</h2>
          <p className="mb-4 text-justify">
            A cost sheet is a summary that lists the many parts of a product’s
            overall cost. Multi-techno solutions offer to create a cost sheet in
            its Erp software. The cost sheet is used to decide a product’s
            best-selling price. A cost sheet file can be made with historical or
            predicted costs. It includes the essential inventory and other
            expenses like prime, conversion, factory, operational, and FOH
            costs. Cost sheets are reference sheets used by business managers to
            control buying and production expenses. The total cost of the
            product is included in a cost sheet statement. It is helpful because
            it can show where a firm spends money. Also, as to how much it earns
            and where it loses money. Companies use software to make cost
            sheets.
          </p>
          <h2 className="lg:text-2xl  font-bold mb-4">Sale Order</h2>
          <p className="mb-4 text-justify">
            The Sale Order record lists all items, prices, offers, credits, and
            quantities a single consumer has ordered. A sales quotation is
            frequently generated until a customer can request an official
            purchase.{" "}
          </p>
          <h2 className="lg:text-2xl  font-bold mb-4">Delivery Challan</h2>
          <p className="mb-4 text-justify">
            A delivery challan is a paperwork used to move items that are
            purchased. It will be created as an after-sale order, and then the
            process will be taken as a sale invoice is generated. As it
            comprises information on the objects that are delivered or
            transported. Such as the number of goods, the delivery address, etc.{" "}
          </p>{" "}
          <h2 className="lg:text-2xl  font-bold mb-4">Sale invoice</h2>
          <p className="mb-4 text-justify">
          A business document that lists the items, costs, discounts, payments, and amounts that the business sold to the consumer. A receipt may be obtained once the consumer has completed payment on the invoice.
          </p>{" "}
          <h2 className="lg:text-2xl  font-bold mb-4">Receipt</h2>
          <p className="mb-4 text-justify">
          Only after the items have been delivered or the service has been done. The receipts are issued after-sale invoices when the supplier will get the product. Companies may need to give complete tickets in various instances. Whenever it occurs, the outstanding amount is usually indicated on the receipt.     </p>{" "}
          <h2 className="lg:text-2xl  font-bold mb-4">Essential Advantages of Sales Management System</h2>
          <p className="mb-4 text-justify">
          You desire your salespeople to waste less time on manual data input and more time explaining to customers as a sales manager. Here are some advantages of business software Sales Management System     </p>{" "}
          <ul className="list-disc list-inside">
            <li>Save Time</li>
            <li>Exceeding Sales Goals</li>
            <li>Keep Your Network Up-to-Date</li>
            <li>further Workflow Automation</li>
            <li>further, Improve Communication and collaboration</li>

          </ul>
        </section>

        {/* General Ledger Section */}
        <section className="mt-8">
          <h2 className="lg:text-2xl  font-bold mb-4">
          further, Improve Communication and collaboration
          </h2>
          
          
          <ul className="list-disc list-inside">
            <li>
            It’s simple to scale up further as your business expands.
            </li>
            <li>
            It has excellent features, and additionally, it is highly customizable.
            </li>
            <li>
            Service is available in real-time via Erp software.
            </li>
            <li>
            Furthermore, Complex selling procedures are made more accessible.
            </li>
          </ul>
          <h2 className="lg:text-2xl  font-bold mb-4">Creating a Multi techno ERP Sales Management Software Boosts Your Business</h2>
          <p className="mb-4 text-justify">
          Sales play a crucial role at the bottom of every business’s funnel. And it’s vital for you, as a sales agent, to have the correct process in place to convert the leads. Further, your marketing team has forwarded it to you. We have compiled a list of captious features to help organizations significantly enhance their sales results.</p>
        </section>
      </div>
      <Footer />{" "}
    </>
  );
}

export default Page;
