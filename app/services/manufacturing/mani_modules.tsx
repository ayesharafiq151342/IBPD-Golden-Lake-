"use client";
import Image from "next/image";

function ManufacturingERP() {
  return (
    <div className="lg:w-9/12 mx-auto p-6 ">
      {/* Header */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        ERP for the Manufacturing Sector Optimizing Business Performance
      </h1>

      <p className="text-gray-700 mb-6">
        Enterprise Resource Planning (ERP) systems have revolutionized business operations, especially in the manufacturing sector.
        Our ERP solution is designed specifically for the manufacturing sector, offering robust tools to streamline processes,
        improve productivity, and ensure data accuracy. Discover how our ERP system can transform your business and keep you ahead
        of the competition.
      </p>

      {/* Modules Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modules of Manufacturing System</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Application Setup", desc: "The goal of account management is to prevent late payments and disruptions to the business’s early payment." },
          { title: "Account Management Module", desc: "Eliminate the need for paying things by hand, which helps keep books, payments, and reconciliations accurate." },
          { title: "Inventory  Module", desc: "The goal of stock optimization is to minimize surplus inventory and understocking, avoiding either shortage or excess." },
          { title: "Purchase  Module", desc: "Tracks modules in businesses (vendors, suppliers, consignment goods, quality, and installment delivery)." },
          { title: "Sales Management Module", desc: "To track and evaluate clients with useful sales tracking keeps tabs on how well each product is doing in the marketplace." },
          { title: "Project Management Module", desc: "Manage your invoices efficiently by creating, sending, and tracking them to ensure timely payment." },
          { title: "HR Management Module", desc: "It aids in asset acquisition and ensures appropriate depreciation according to established schedules." },
          { title: "All Module", desc: "t aids in asset acquisition and ensures appropriate depreciation according to established schedules." },

      
        ].map((module, index) => (
          <div key={index} className="border border-black p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="font-semibold text-xl text-purple-600 mb-2">{module.title}</h3>
            <p className="text-gray-700">{module.desc}</p>
          </div>
        ))}
      </div>

    

      {/* Benefits of ERP */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center mt-10">
  {/* Image First on Mobile */}
 

  {/* Text Second on Mobile */}
  <div className="flex-1 w-96 md:w-full">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits of ERP in the Manufacturing Sector</h3>
    <p className="text-gray-700 mb-4 text-justify">
      ERP systems in manufacturing streamline business operations, boost efficiency, and reduce operational costs by
      integrating all business functions. Improve decision-making and significantly enhance productivity.
    </p>
  </div>
   <div className="flex-1">
    <Image
      src="/erp-benefits.png" // Replace with the actual image path
      alt="ERP Benefits Diagram"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>
</div>


      {/* Detailed Benefits */}

    </div>
  );
}

export default ManufacturingERP;
