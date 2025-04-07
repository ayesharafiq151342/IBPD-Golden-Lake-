import React from 'react';

const TradingDistribution = () => {
  const modules = [
    {
      title: 'Application Setup',
      description: [
        'Keeps tabs on all supplier bills and ensures they’re paid on time.',
        'The goal of account management is to prevent late payments and disruptions to the business’s early payment.',
        'Monitors cash flow, ensures that financial outflows equal its outflows.',
         'Builds continuity routine capabilities in tasks, workflow, and operational processes to save time and effort.'
      ]
    },
    {
      title: 'Account  Management Module',
      description: [
        'Manage and track your company cashflow and gain insights into the money coming in and going out all the time.',
        'Eliminate the need for paying things by hand, which helps keep books, payments, and reconciliations accurate.',
        'Facilitates daily banking financial records easily accessible and ensures that financial transactions adhere to regulatory norms.'
      ]
    },
    {
      title: 'Inventory Management Module',
      description: [
        'The goal of stock optimization is to minimize surplus inventory and understocking, avoiding either shortage or excess.',
        'Track the current stock status in your warehouses using real-time tracking.',
        'Accurate data and insights on item movement and warehouse efficiency help in better stock management.'
      ]
    },
    {
      title: 'Purchase Management Module',
      description: [
        'The system may automatically produce purchase orders based on historical data and stock levels.',
        'Tracks modules in businesses (vendors, suppliers, consignment goods, quality, and installment delivery).',
        'Spending on procurement is tracked using order insights and monetary limits, with purchase prices negotiated, allowing for cost control.'
      ]
    },
    {
      title: 'Sales Management Module',
      description: [
        'To track and evaluate clients with useful sales tracking keeps tabs on how well each product is doing in the marketplace.',
        'Compartmentalize CRM (customer relationship management) using automation for handling potential and existing customer relationships.',
        'Provides the opportunity to analyze purchasing behavior, customer preferences, and sales performance.',
        
      ]
    },
    {
      title: 'Project Management Module',
      description: [
        'Manage your invoices efficiently by creating, sending, and tracking them to ensure timely payment.',
        'Companies then use it to handle payments and receivables from their customers.',
        'Send automated payment reminders to clients to encourage timely payment and decrease invoice disputes.'
      ]
    },
    {
      title: 'HR Management Module',
      description: [
        'This module helps you track down, how they’re doing, and check what has changed throughout their lifecycle.',
        'It aids in asset acquisition and ensures appropriate depreciation according to established schedules.',
        'Track maintenance schedules, ensuring that the assets stay in good condition while minimizing the risk of maintenance rescheduling.'
      ]
    },

 
   
    {
      title: 'All Module',
      description: [
        'Defines user roles and access permissions in the system, enabling role-based security.',
        'Manages user authentication according to their clearance levels within the organization.',
        'Provides accountability, recovery, revision, and audit management.',
       
      ]
    },
   
  ];



  return (
    <div className="min-h-screen mt-30 ">
     

    <div className="lg:w-9/12 mx-auto  p-6 rounded-2xl  mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Features of our Trading and Distribution Management System</h2>
      <p className="text-center text-gray-600 mb-8">Our trading and distribution management system has the following features:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {module.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a href="#" className="text-purple-600 font-semibold hover:underline">LEARN MORE</a>
          </div>
        ))}
      </div>
    </div>

  </div>
  );
};

export default TradingDistribution;
