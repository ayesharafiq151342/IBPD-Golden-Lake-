'use client';

import React, { useState } from 'react';

const Faqs = () => {
  // ✅ Corrected state declaration
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Trading and Distribution ERP software?',
      answer:
        'Trading and distribution ERP software is a complete solution to maximize supply chain and distribution operations. It simplifies logistics, inventory control, demand forecasting, and order fulfillment, improving order management, and inventory control. This program improves data-driven decision-making and visibility, helping Trading and distribution-oriented businesses increase profitability and customer service.',
    },
    {
      question: 'What capabilities of Trading and Distribution systems exist?',
      answer:
        'Trading and distribution systems offer capabilities like supply chain management, inventory tracking, sales and purchase management, demand forecasting, and financial management to streamline operations.',
    },
    {
      question: 'How do companies use the Trading and Distribution system?',
      answer:
        'Companies use trading and distribution systems to manage supply chain operations, track inventory levels, process sales and purchase orders, forecast demand, and streamline logistics for improved efficiency and profitability.',
    },
    {
      question: 'Which kinds of companies would find use for a Trading and Distribution system?',
      answer:
        'Wholesale distributors, manufacturers, retailers, and logistics companies benefit most from trading and distribution systems to optimize their supply chain and distribution processes.',
    },
    {
      question: 'What difficulties does the Trading and Distribution system address?',
      answer:
        'It addresses challenges like inefficient inventory management, inaccurate demand forecasting, delayed order fulfillment, and lack of visibility across the supply chain.',
    },
    {
      question: 'In what ways does it facilitate multi-location activities and global trading?',
      answer:
        'It enables centralized control over multiple locations, ensuring consistent inventory management, streamlined logistics, and real-time data access across global operations.',
    },
    {
      question: 'Can trading and distribution systems elaborate discounts and pricing?',
      answer:
        'Yes, these systems can manage complex pricing structures, volume discounts, promotional pricing, and dynamic pricing strategies across products and regions.',
    },
    {
      question: 'Which countries does multi-techno supply Trading and Distribution ERP Software?',
      answer:
        'The software supports global operations, enabling businesses in multiple countries to manage trading and distribution processes efficiently.',
    },
    {
      question: 'What is the HR Management Module?',
      answer:
        'This module helps track employee performance, monitor changes throughout their lifecycle, and manage asset acquisition and appropriate depreciation. It also assists in maintaining schedules to ensure assets remain in good condition and minimize rescheduling risks.',
    },
  ];

  // ✅ Toggling the active FAQ
  const toggleFAQ = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-3.5 bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {faq.question}
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </h3>
            {activeIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
