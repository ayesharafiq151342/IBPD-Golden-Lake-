import React from "react";
import Button from "@/app/ui/style";
import Link from "next/link";

function CrmParallax() {
  return (
    <>
      {/* Parallax Section */}
      <div className="relative h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed parallax-bg"
          style={{ backgroundImage: "url(/crm-paralex.jpg)" }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-purple-200 bg-opacity-70 flex flex-col items-center justify-center px-4">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center w-11/12 md:w-8/12 leading-snug">
            Transform your customer interactions choose Golden-Lake CRM solutions today!
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-black text-center w-11/12 md:w-8/12 mt-3">
            Take your business to the next level with Golden-Lake’s CRM solutions! Streamline customer management and drive growth today—contact us now!
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center mt-5 gap-4">
            <Link href="/contactus">
              <Button label="Contact us" variant="secondary" />
            </Link>
          </div>
        </div>

        {/* Parallax Effect Styles */}
        <style jsx>{`
          .parallax-bg {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150%;
            top: -25%;
          }

          @media (max-width: 768px) {
            /* Disable fixed background on mobile for better performance */
            .parallax-bg {
              background-attachment: scroll;
              height: 100%;
              top: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default CrmParallax;
