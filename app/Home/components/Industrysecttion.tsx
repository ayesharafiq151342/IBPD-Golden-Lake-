"use client";
import Image from "next/image";

const industries = [
  { image: "/COST.jpg", title: "Wholesale and Distribution" },
  { image: "/MNU.jpg", title: "Manufacturing" },
  { image: "/download.jpg", title: "Real Estate and Property Management" },
  { image: "/non.jpg", title: "Non-profit Organizations" },
  { image: "/lo.jpg", title: "Logistics and Supply Chain" },
  { image: "/tex.jpg", title: "Textile and Apparel" },
  { image: "/food.jpg", title: "Food & Beverage" },
  { image: "/bb.jpg", title: "Automotive" },
];

const IndustriesSection = () => {
  return (
    <section className="text-center mt-20 mx-auto py-10 px-4 max-w-7xl">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        <span className="text-black px-2 py-1 rounded">Industries We Are Serving</span>
      </h2>
      <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        These salient features highlight the ways in which Golden Lake ERP solutions may improve operational effectiveness, compliance, and overall business performance for a{" "}
        <span className="text-purple-600 font-semibold">Wide Range of Industries.</span>
      </p>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <div className="w-full h-48 overflow-hidden rounded-md">
              <Image 
                src={industry.image} 
                alt={industry.title} 
                width={300} 
                height={300} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-semibold text-gray-800 text-sm md:text-base">{industry.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
