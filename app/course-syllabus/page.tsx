"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
function Page() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/Aboutus_iamge/bg-image.jpg')] relative bg-cover bg-center h-96 w-full md:h-[400px]">
  {/* Centered content pushed towards bottom */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-darkblue w-11/12 md:w-1/2 h-48 flex flex-col justify-center items-center space-y-4 rounded-t-3xl">
    {/* Your content here */}
    <h2 className="text-white text-xl font-semibold">Explore Courses</h2>
    <p className="text-white">IBPD offers the following courses:</p>
     </div>

</div>
<div className="bg-white py-16 px-4 sm:px-6 lg:px-20 space-y-16 max-w-7xl mx-auto">

  {/* Mission Section */}
  {/* <div className="flex flex-col md:flex-row items-center gap-8">
  <img
    src="/Aboutus_iamge/Join-If-you-want-1.jpg"
    alt="Our Mission"
    className="lg:w-[500px] lg:h-[400px]  md:w-[400px] rounded-md object-cover"
  />

  <div className="flex-1 flex items-center m-4 lg:ml-20 justify-center">
    <ul className="text-gray-700 space-y-2 text-sm text-justify list list-disc leading-relaxed text-center">
      <li>100% Ready to Work Practical Approach with Current Job Standards in Multinational, Companies, Trading Firms & Financial Institutions</li>
      <li>Internship, Trainee & Job Placement Opportunities</li>
      <li>Accounts, Finance & Tax (FBR/ IRIS, SRB & PRA), Financial analysis, Fix Asset, Fix Asset Register, Purchase, Sales, Inventory, Financial Management, Cash Control, Budget, Cash Flow, Customer relational Management System (CRM), Payroll, Financial Audit, W.H.T Audit, Income Tax Audit, Sales Tax Audit, Banking, Bank Loan Approvals, & Reporting.</li>
      <li>Best & Approved Course Outline & Detailed Job Practices under Experienced Working Authorities in Karachi.</li>
      <li>Reasonable Training Charges, Certificate, and Recommendation Letter for Industry.</li>
    </ul>
  </div>
</div> */}


  {/* Vision Section (Image Right on Desktop) */}
  <div className="flex flex-col   md:flex-row-reverse items-center md:items-start gap-8">
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <img
    src="/Courses/EXCEL.png"
    alt="Our Mission"
    className="lg:w-[500px] lg:h-[500px]  md:w-[500px] border-2 border-black rounded-md object-cover"
  /> 
<div className="flex-1 flex items-start justify-center lg:mr-20">
  <div className="flex flex-col items-start text-start">
    <Link href='/course-syllabus/mastering-in-excel-financial-fmva-power-bi-program'>
      <h1 className="text-4xl font-semibold text-gray-800">
        Mastering in Excel Financial with FMVA & Mastering in Power BI
      </h1>
    </Link>
    
    <Link href='/course-syllabus/mastering-in-excel-financial-fmva-power-bi-program'>
      <button className="relative inline-block text-white bg-darkblue border-2 border-white rounded-full px-4 py-2 mt-4 font-medium bg-blue-500 transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
        <span className="lg:text-xl md:text-lg text-sm font-bold">Learn More</span>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
          <ArrowRight className="text-white" />
        </span>
      </button>
    </Link>
  </div>
</div>

  </div>
  </div>


</div>
<div className="w-full">
  {/* Top Section */}
  <div className="bg-[#002b6b] md:h-[500px] h-[700px] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      {/* Left Floating Avatars or Design */}
      <div className="relative h-40 mt-28 md:mt-0 flex justify-center items-center">
        {/* You can absolutely position circular avatar images here */}
        <img
    src="/Courses/online-university-65.png"
    alt="Our Mission"
    className="lg:w-[400px] lg:h-[400px]  md:w-[500px] "
    /></div>

      {/* Right Text */}
      <div className="relative h-40 lg:mt-44 mt-32 ">

        <h2 className="text-2xl md:text-4xl font-bold ">Join 1000s of students learning at IBPD.</h2>
        <p className="text-xl md:text-3xl font-bold md:mt-4 ">New Batch enrollments starts<br/> soon!</p>
      </div>
    </div>
  </div>

  {/* Bottom Section */}

</div>
      <Footer />{" "}
    </>
  );
}
export default Page;
