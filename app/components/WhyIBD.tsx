import React from "react";
import {
    Music,
    UserCheck,
    Briefcase,
    CheckCircle,
    FileText,
    UserCog,
  } from "lucide-react";
  

const WhyIBD = () => {
  return (
    <div className="bg-darkblue py-16 px-4 text-white relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8">Why IBPD?</h2>

      {/* Person Image */}
      <div className="flex justify-center mb-8 relative z-10">
        <img
          src="/Benefits-of-Choosing-IBPD.png" // Replace with your actual image path
          alt="Why IBPD"
          className="w-48 md:w-56 lg:w-64 object-contain"
        />
      </div>

      {/* Grid of Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-20">
  <div className="bg-amber-700 rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    <Music className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">4 Core Area Specialist Trainers</p>
  </div>

  <div className="bg-green-600 rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    <UserCheck className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">Recommended By A Panel of Chartered Accountants</p>
  </div>

  <div className="bg-blue rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    
    <Briefcase className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">4 Core Area Specialist Trainers</p>
  </div>

  <div className="bg-red-500 rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    <CheckCircle className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">250 Jobs Share Weekly</p>
  </div>

  <div className="bg-yellow-500 rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    <FileText className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">Registered with FATE (FBR Pakistan)</p>
  </div>

  <div className="bg-cyan-500 rounded-xl p-6 text-center w-full min-h-[220px] flex flex-col items-center justify-center">
    <UserCog className="w-8 h-8 mb-4" />
    <p className="text-base font-medium">No Hidden Charges</p>
  </div>
</div>

    </div>
  );
};

export default WhyIBD;
