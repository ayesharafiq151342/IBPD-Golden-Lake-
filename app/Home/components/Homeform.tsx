"use client";
import Button from "@/app/ui/style";
import Link from "next/link";
import DemoForm from "@/app/components/demoform";
export default function ERPForm() {
  // State for form inputs
  return (
    <div
      className=" mt-20 mx-auto flex flex-col lg:items-center items-start justify-start h-4/5 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/formimages.jpg')" }}
    >
      {/* Background Blur Overlay */}
      <div className=" inset-0 bg-white/20 "></div>

      {/* Main Content */}
      <div className=" w-full max-w-7xl inset-0 bg-white/40 mt-20 mb-20  p-8 rounded-lg flex flex-col md:flex-row gap-8">
        {/* Left Side - ERP Details */}
        <div className="flex-1 m-auto justify-start items-start">
          <h1 className="lg:text-3xl text-2xl text-start lg:text-center  font-bold text-white ">
            Best ERP Software in Pakistan for Enterprises & Growing Businesses
          </h1>
          <p className="text-white lg:text-center text-start mt-4">
            All-in-One Solution: Manage every part of your business in one
            place.
            <br />
            Real-Time Data: Access up-to-date data to make smart decisions
            faster.
            <br />
            Secure & Compliant: Keep your data safe and meet industry standards.
          </p>

          {/* Contact Us Button (Scroll to Form) */}
          {/* ✅ Link that scrolls to the "contact" section */}
          <Link href="/contactus ">
            <Button label="Contact Us" variant="primary" className="mt-5 " />
          </Link>
        </div>

        {/* Right Side - Request for Demo Form */}
        <div className="flex-1">
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
