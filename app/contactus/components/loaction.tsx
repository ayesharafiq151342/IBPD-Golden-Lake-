import React from 'react';
import { Phone, Mail } from "lucide-react"; // Import Lucide Icons
const FrenchMenu = () => {
  const menuItems = [
    {
      type: 'PAKISTAN',
      title: 'House No 563 Main  Road  Narwala Banglow',
      image: '/fsd-clock.png',
    },
    
  ];

  return (
    <div className="min-h-screen lg:w-9/12 m-auto bg-cover bg-right bg-fixed">
  <div className="container mx-auto py-10">
    {/* Heading */}
    <div className="mb-8 text-start">
      <h1 className="text-4xl text-center md:text-5xl font-semibold text-purple-900 dark:text-white">
      Our Location
      </h1>
     
    </div>

    {/* Menu Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-0">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-60">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* Card Content */}
          <div className="relative -mt-12 mx-auto w-72 h-72 bg-purple-700 dark:bg-gray-800 text-white p-6 flex flex-col justify-center rounded-lg shadow-md">
            <p className="text-sm italic mb-2 text-start">{item.type}</p>
            <h2 className="text-xl font-semibold text-start mb-4">{item.title}</h2>

            {/* Contact Info with Text Start */}
            <div className="flex flex-col text-start space-y-4">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> +92186271612
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />goldenlake151342@gmail.com
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  </div>
</div>

  );
};

export default FrenchMenu;