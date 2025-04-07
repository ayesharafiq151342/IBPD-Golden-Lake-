import React from "react";
import Image from 'next/image'
const A = () => {
  return (
    <div className="lg:w-9/12 mt-20 mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-start mb-4">
        The Best Supply Chain Management Solutions
      </h1>
      <p className="text-start text-justify text-gray-700 mb-6">
        Modern operational success relies on effective supply chain management (SCM). We at Multi-Techno
        ensure that your supply chain is cost-efficient, risk-free, and optimized.
      </p>

      {/* Why Choose Us? */}
      <h2 className="text-2xl font-semibold text-start text-justify  my-4">Why Choose Us?</h2>
      <p className="text-start text-gray-700 mb-6">
        The correct supply chain management solution is essential to logistic flow, stock management, and market competition.
      </p>
<div>
<Image src="/supply.png" alt="Supply Chain Management" width={1400} height={9000} className="mt-20" />
</div>
      {/* Features Section */}
      <div className="grid md:grid-cols-2  mt-20   gap-6">
        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div key={index} className="bg-white   text-start shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-bold  mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-justify text-xl">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: "Inventory Management",
    description:
      "Optimal inventory management is possible with real-time visibility into stock levels and movements. Intelligent forecasting is a must if you want your operations to run smoothly and your customers to be happy." },
  {
    title: "Procurement Optimization",
    description:
      "Find reliable vendors and streamline your purchasing operations. Our technology automates purchase orders and follows supplier performance to save time and money by ensuring timely procurement and reducing errors.",
  },
  {
    title: "Product Lifecycle Management (PLM)",
    description:
      "Product lifecycle management (PLM) refers to managing a product from its start to final disposal or recycling, including all stages. Product lifecycle management (PLM) software systems unify these activities, make enterprise-wide cooperation more accessible, and serve as a foundation for product details for all products."  },
  {
    title: "Customer Portal",
    description:
      "Give your customers the power to monitor their orders, handle delivery, and see the status of their purchases in real time through an intuitive interface. By making the information customers need easily accessible, we can improve their experience, earn their trust, and make them more satisfied."  },
  {
    title: "Logistics and Transportation",
    description:
      "Use automated tracking and optimum routes to manage shipping and delivery efficiently. Your products will arrive at their destination on time, transportation expenses will be lower, and delivery accuracy will be improved using this function."  },
  {
    title: "Supplier Relationship Management",
    description:
      "Transparent communication methods help you strengthen your partnerships with suppliers. Improve the efficiency of procurement and delivery by keeping an eye on performance, negotiating well, and encouraging teamwork."  },
  {
    title: "Vendor Portal",
    description:
      "Supplier communication and collaboration can be made effortless through our user-friendly vendor site. Maintain positive interactions with your vendors while tracking orders, sales, and procurement timeliness to boost supply chain efficiency."  },  {
    title: "Item Receipt",
    description:
      "Utilize automated verification and documentation to guarantee precise and simplified item reception. Make things go more smoothly by reducing the likelihood of receiving mistakes, readily tracking shipments, and matching deliveries to purchase orders. ."  },  ];


export default A;
