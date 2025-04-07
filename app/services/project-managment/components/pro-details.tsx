"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/ui/style";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
const Project_detail = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full md:w-11/12 lg:w-9/12  py-10 mx-auto">
      <div className="   lg:px-8">
        {/* Title Section */}
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Efficient Construction & Project ERP Management System
          </h1>
          <p className="text-gray-600  lg:text-start mt-4  text-justify ">
            Revolutionize your approach to construction and project management
            with our cutting-edge ERP system. Designed to meet the industry’s
            unique demands, our comprehensive solution empowers you to navigate
            complex projects seamlessly. From project inception to completion,
            the ERP system ensures efficient resource allocation, streamlined
            workflows, and transparent stakeholder collaboration.
            <br />
            This integrated system enhances project planning by providing
            real-time insights into critical metrics, enabling informed
            decision-making. The ERP’s Financial Management Modules bring
            transparency to budgeting, cost control, and financial reporting,
            ensuring projects stay within budgetary constraints. Moreover, it
            facilitates seamless communication and coordination among project
            teams, subcontractors, and suppliers, fostering a collaborative
            environment.
            <br />
            Our ERP system’s robust features extend beyond the construction
            phase, addressing post-construction needs such as facility
            management and maintenance. With an emphasis on scalability, our
            solution adapts to the evolving requirements of your projects,
            promoting sustained success. Embrace the future of construction
            management with our ERP system, where efficiency, collaboration, and
            success converge for unparalleled project outcomes.{" "}
          </p>
        </div>

        {/* Another Key Features Section */}
        <section className="flex flex-col md:flex-row items-center lg:p-6 h-auto mt-20">
  <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
    <img
      src="/project-image.jpg"
      alt="ERP Services"
      className="w-full max-w-lg rounded-2xl"
    />
  </div>

  <div className="w-full md:w-1/2 lg:ml-10 text-left px-4 md:px-10">
  <h3 className="text-lg sm:text-xl md:text-sm lg:text-xl font-bold mb-4 text-left">
  Comprehensive System to Efficiently Streamline Construction and Projects
</h3>
<p className="text-gray-600 text-justify text-left mt-4 text-lg sm:text-xl md:text-sm lg:text-lg  text-sm sm:text-base ">
  Efficiently plan, build, and deliver with our advanced construction and project management system.
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
</section>

      </div>
      {/* Right Section - Reports */}
      <div className="space-y-8 lg:mt-32 mt-10 ">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-black">Project Home</h3>
          <Image
            src="/project-0.png"
            alt="Project Home "
            width={900}
            height={350}
            className="rounded-md m-auto"
          />
        </div>
        <div className="bg-white p-4  rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-black">
            Project Task DashBoard{" "}
          </h3>
          <Image
            src="/project-1.png"
            alt="Project Task DashBoard"
            width={900}
            height={350}
            className="rounded-md md m-auto"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-black">
            Project Note Status Report
          </h3>
          <Image
            src="/project-2b.png"
            alt="Project Note Status Report "
            width={900}
            height={350}
            className="rounded-md m-auto"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-black">Setting Progress</h3>
          <Image
            src="/project-4.png"
            alt="Setting Progress"
            width={900}
            height={350}
            className="rounded-md md m-auto"
          />
        </div>
      </div>
      {/* Process Section */}
      
    </div>
  );
};

export default Project_detail;
