"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import FrenchMenu from "./components/loaction";
import Footer from "@/app/components/footer";
import DemoForm from "@/app/components/demoform";
import LocationMap from "./components/location_map";
function Page() {
  return (
    <>
      <Navbar />
      {/* Content Section */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center h-screen justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/contact-us-scaled-1.jpg')" }}
      >
        {/* Background Blur Overlay */}
        <div className="inset-0 bg-white/20"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl bg-white/40 mt-10 mb-20 p-4 md:p-8 rounded-lg flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 m-auto text-center md:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-white mt-4 text-justify text-sm md:text-base">
              Thank you for visiting Multi-Techno Integrated Software Solutions.
              We always strive to serve our clients the best we can. Your
              satisfaction is paramount importance to us. Feel free to contact
              us for any kind of Information, Quotations or for Technical
              Support. We will serve you regarding your matter as soon as
              possible.
            </p>

            {/* Contact Button Linking to Form */}
          </div>

          {/* RIGHT SIDE - Request for Demo Form */}
          <div className="flex-1 flex justify-center">
            <DemoForm />
          </div>
        </div>
      </div>
      <FrenchMenu />
      <LocationMap />
      <Footer />{" "}
    </>
  );
}
export default Page;
