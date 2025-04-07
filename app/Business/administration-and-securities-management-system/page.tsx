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
          backgroundImage: "url('/account-image-bg.jpg')",

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
          Enhance Security with Golden Lake Administration Software
        </h1>
        <p className="text-justify">
          Administration and Securities Management System of Golden Lake ERP
          administrator software can control a system of physical and further
          virtual gates from a single place using security management. At the
          same instant, To gain a high level of insight into network behavior,
          it automates device configuration. Also, enforce global policies, view
          firewall traffic, and produce reports. Moreover, It can provide a
          unified administration interface for physical and virtual systems.
          Further, Administrators require network security management solutions.{" "}
        </p>
        <div className="flex justify-center">
          <img
            src="/dministration-and-securities-management-system-image-2.webp" // Replace with actual image
            alt="
Fixed Asset Management"
            className="w-full mt-10 mb-10rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Features of Administration and Securities Management System
        </h2>
        <p className="mb-4 mt-10 text-justify">
          Forms will be added to the System, Like sale form, purchase form, cash
          form, etc. After that, the form selection process starts to make
          menus. In the same way, every System contains its details, i.e.
          transaction form has all the information about a transaction. Further,
          the Erp system has these features by which you can maintain your
          business menus.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Menu Creation:</h2>
        <p className="mb-4 text-justify">
          You may customize menu access for specific users. Furthermore, To meet
          users’ needs, different menus are created. Further, If anybody wants
          to get a sale, purchase or some other, then they can get it from menu
          creation. Menus are a technique of communicating the establishment’s
          characteristics to the client. A well-designed menu allows the client
          to participate in the proper System.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">User Responsibility:</h2>
        <p className="mb-4 text-justify">
          User Responsibility shows an overview of the module. Further, it walks
          users through the many stages required in configuring. as well as,
          After menu selection, the responsibilities of users are added.
          Additionally, This describes the user as a complete guide about his
          responsibility regarding his task. Further, The Golden Lake securities
          management system maintains the computer’s security controls at all
          times. In like manner, You can create roles and responsibilities for
          users. In like manner, You provide them with activities on the
          administration panel.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">User Rights:</h2>
        <p className="mb-4 text-justify">
          User rights are assigned at the device level when responsibilities are
          clear and identified. Further, It will allow users to conduct
          operations on the device or in the domain. In like manner, Login
          credentials and permissions are examples of user rights. In like
          manner, Rights are a way for software to manage and regulate access to
          the specified System and device capabilities. Further, This can be
          done by excellent Golden Lake ERP Software Solutions.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">User Management:</h2>
        <p className="mb-4 text-justify">
          You can create a new user in user management and can give access to
          specific modules you want to share. Furthermore, Administrators can
          offer permissions and manage their access. And govern their accounts
          using user management. A user management system is an essential kind
          of security that is an integral aspect of identity and access
          management (IAM). Authorization solutions, in turn, keep track of
          users in an active directory. In like manner, That is useful for
          things like service management, HR, and security.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Backup and Restore Management:
        </h2>
        <p className="mb-4 text-justify">
          You can move the Administration System from one System to another.
          Without losing data by using data backup. When shifting the
          Administration Server database to another device. Important user files
          can be backed up. The Golden Lake Erp system solves your problem of
          Backup and restores your essential data.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Documents Approval:</h2>
        <p className="mb-4 text-justify">
          Business software plays a vital role in every manner. Your company has
          papers that need to be authorized or signed off on by relevant
          stakeholders. To guarantee that documents are correct and recorded
          promptly. An approval process is required. When it comes to security
          and inspection reports issued by your systems, this is very important.
          The three key features of a secure document approval process:
        </p>
        <h3 className="text-xl font-bold mb-2">Transactions</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Visibility</li>
          <li>Control</li>
          <li>Auditability</li>
          <h3 className="text-sm font-bold mb-2">
          Visibility + Control + Auditability = Secure Processes
        </h3>
       
        </ul>
        <h3 className="text-xl font-bold mb-2 mt-2">
          Benefits of Administration Software
        </h3>

        <ul className="list-disc list-inside space-y-2">
          <li>All of the data is kept safe using the program</li>
          <li>Improves security against cyber-attacks</li>
          <li>Improves the work environment at the organization</li>
          <li>Reduces the cost of security</li>{" "}
          <li>Protect data’s safety, integrity, and accessibility</li>
        </ul>
      </div>
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
