"use client";
import React from "react";
import FlipCard from "./Card";

const FlipCardGrid = () => {
  const services = [
    {
      image: "/appli.png",
      title: "Application Setup",
      description: "Configure and customize your ERP application for business needs.",
      link: "/services/manufacturing",
    },
    {
      image: "/accounts.png",
      title: "Accounts Management",
      description: "Manage financial accounts, transactions, and reporting efficiently.",
      link: "/Business/Accounts-And-Finance-Management",
    },
    {
      image: "/inven.png",
      title: "Inventory Management",
      description: "Monitor stock levels, track products, and manage warehouse operations.",
      link: "/Business/inventory-management-system",
    },
    {
      image: "/purchase.png",
      title: "Purchases Management",
      description: "Streamline purchase orders, vendor management, and procurement processes.",
      link: "/Business/purchase-management",
    },
    {
      image: "/sale.png",
      title: "Sales Management",
      description: "Optimize sales processes, track orders, and improve customer relations.",
      link: "/Business/sale-management-system",
    },
    {
      image: "/pro.png",
      title: "Projects Management",
      description: "Plan, execute, and track projects with task and team management tools.",
      link: "/services/project-managment",
    },
    {
      image: "/hr.webp",
      title: "HR Management",
      description: "Manage employee records, payroll, and HR processes effectively.",
      link: "/services/Payroll",
    },
   
  ];

  return (
    <div className="text-center mx-auto mt-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        Golden Lake ERP Modules
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-4">
        {services.map((service, index) => (
          <FlipCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default FlipCardGrid;
