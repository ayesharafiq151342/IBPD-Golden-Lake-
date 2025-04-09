"Use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Institute_of_Business() {
  return (
    <>
      <div className="relative w-full h-96 md:h-[600px] lg:h-[700px] bg-cover bg-center bg-[url('/corporate-image-2.jpg')]">
        {/* Overlay Content */}
        <div className="absolute inset-0  flex items-center">
          <div className="bg-blue bg-opacity-80  lg:bg-opacity-100 md:bg-opacity-100 text-white w-full md:w-3/5 h-full px-6 md:px-12 lg:px-20 py-10 flex flex-col justify-center space-y-4">
            <div className="w-80 md:w-full  ml-4  lg:w-1/2 md:ml-8 lg:ml-60 ">
              <h2 className="text-lg  md:text-3xl lg:text-4xl font-bold">
                IBPD -Institute of Business & Professional Development
              </h2>

              <p className="text-sm md:text-base mt-4 text-justify ">
                Offering Job Ready Program Specially Designed for Commerce
                Students and Accounts Professionals. (Specialization in SAP
                Central Finance & Costing – FICO, S4/ HANA – ECC6, Computerized
                Accounting and Corporate Skills, Taxation including E-Filing –
                FBR/ IRIS, SRB & PRA).{" "}
              </p>

              <Link href="/aboutus">
                <button className="relative inline-block text-white  border-2 border-white rounded-full px-4 py-2 mt-4 font-medium bg-blue-500  transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
                  <span className="lg:text-xl md:text-lg text-sm font-bold">
                    About us
                  </span>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
                    <ArrowRight className="text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* // grids  */}
      <div className="py-10 px-4 max-w-screen-xl mt-10  mb-10 md:h-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/Batch-Lessons-e1697115875710.jpg"
            alt="Batch System"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Batch System for Highly Affordable Training Price
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/Professional-Teachers-e1697115918940.jpg"
            alt="Professional Trainers"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Experienced and Professional Trainers
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/Join-If-you-want-e1697614256204.jpg"
            alt="Online Classes"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Online Classes – Join from Anywhere
            </h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/toppng.com-data-center-rack-png-data-center-server-329x463-1-e1697116424142.png"
            alt="SAP Practice Connection"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              6 Months Free SAP Practice Connection
            </h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/online-university-1 (1).jpg"
            alt="Lifetime Student Card"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Lifetime Student Card for Free Revisions, Upgradations &
              Professional Assistance
            </h1>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/OnlineOnsite-e1697116025112.jpg"
            alt="Zoom Licensed Live Class"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Zoom – Licensed Live Class with Cloud Recording
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute_of_Business;
