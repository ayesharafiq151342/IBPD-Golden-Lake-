"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhyIBD from '../components/WhyIBD';
import TestimonialCarousel from '../components/TestimonialCarousel';
function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/Aboutus_iamge/bg-image.jpg')] relative bg-cover bg-center h-96 w-full md:h-[400px]">
  {/* Centered content pushed towards bottom */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-darkblue w-11/12 md:w-1/2 h-48 flex flex-col justify-center items-center space-y-4 rounded-t-3xl">
    {/* Your content here */}
    <h2 className="text-white text-xl font-semibold">About IBPD</h2>
     </div>
</div>

<div className="bg-white py-16 px-4 sm:px-6 lg:px-20 space-y-16 max-w-7xl mx-auto">

  {/* Mission Section */}
  <div className="flex flex-col md:flex-row items-center gap-8">
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
</div>


  {/* Vision Section (Image Right on Desktop) */}
  <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <img
    src="/Aboutus_iamge/our-mission.jpg"
    alt="Our Mission"
    className="lg:w-[500px] lg:h-[400px]  md:w-[400px] rounded-md object-cover"
  /> 
  <div className="flex-1 flex items-center lg:mr-20 justify-center">
    <ul className="text-gray-700 space-y-2 text-sm text-justify list list-disc leading-relaxed text-center">
      <li>IBPD is One of the Highly Standardized & Professional Training Centers for Business Education & Career Management.</li>
      <li>A Large Number of Professionals have been Trained from all Over the Country & are Successfully Serving in Pakistan and the UAE. The US. The UK. CANADA & Australia etc.</li>
      <li>Our Career Management Division is Active in exploring opportunities for Trainees, internships, and job Placement for the Right Candidates & We also Have representatives and Advisors in Foreign Countries for Effective Career Counseling.</li>
      <li>Produce Skilled Professionals for Accounting & Finance to Meet Growing Market Demands.</li>
      <li>Provide the Best Opportunity for Real-Time Training to Fresh Candidates to Enter Practical Life.</li>
      <li>Provide Talented Professionals to Companies, Trading Firms, Banking & Financial Institutions.</li>

    </ul>
  </div>
  </div>
  </div>

  {/* Benefits Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <img src="/Aboutus_iamge/benefits.jpg" alt="Benefits" 
    className="lg:w-[500px] lg:h-[400px]  md:w-[400px] rounded-md object-cover"
/>
<div className="flex-1 flex items-center lg:mr-20 justify-center">

    <ul className="text-gray-700 space-y-2 text-sm text-justify list list-disc  leading-relaxed">
      <li>Prove Yourself as an Experienced Person for the Job and Get a Handsome Salary and fringe Benefits.</li>
      <li>Work anywhere in the World for Accounting & Finance Departments.</li>
      <li>Get a Promotion in your existing Job or Manage Your own Business</li>
    </ul>
  </div>
  </div>
  </div>

</div>
<WhyIBD/>
<TestimonialCarousel/>
      <Footer />
    </>
  );
}

export default AboutPage;
