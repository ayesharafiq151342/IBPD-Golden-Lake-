"use client";
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Bell, MapPin, Layers, Computer, FileText, Repeat, Cloud, Star, TrendingUp, Users, Smartphone  } from "lucide-react";

const features = [
  { icon: DollarSign, text: "One Click Payroll", color: "text-green-500 fill-green-500" },
  { icon: Bell, text: "Automated Alerts & Notifications", color: "text-yellow-500 fill-yellow-500" },
  { icon: MapPin, text: "Geo Fencing", color: "text-blue-500 fill-blue-500" },
  { icon: Layers, text: "Premium Modules", color: "text-purple-500 fill-purple-500" },
  { icon: Computer, text: "Analytical Dashboards", color: "text-red-500 fill-red-500" },
  { icon: FileText, text: "Customizable Reports", color: "text-indigo-500 fill-indigo-500" },
  { icon: Repeat, text: "Dynamic Workflow", color: "text-orange-500 fill-orange-500" },
  { icon: Cloud, text: "On-Cloud & On-premises", color: "text-teal-500 fill-teal-500" },
  { icon: Star, text: "Standard Quality", color: "text-yellow-400 fill-yellow-400" },
  { icon: TrendingUp, text: "Fast-Growing ERP Software", color: "text-pink-500 fill-pink-500" },
  { icon: Users, text: "Employee Self Service", color: "text-green-600 fill-green-600" },
  { icon: Smartphone, text: "Mobile Application", color: "text-blue-400 fill-blue-400" },
 
];

const ERPFeatures = () => {
  return (
    <section className="relative   bg-purple-600 mt-20 text-white pt-16 pb-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Why Choose Golden  ERP</h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-3 rounded-full ${feature.color}`}>
                <Icon size={40} className={`stroke-none ${feature.color}`} />
              </div>
              <p className="text-sm font-semibold">{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ERPFeatures;
