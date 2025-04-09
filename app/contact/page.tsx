"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


function Page() {
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

      <Footer />{" "}
    </>
  );
}
export default Page;
