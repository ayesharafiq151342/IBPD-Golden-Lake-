import React from "react";

const ContactCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/03390061612", "03390061612"); // Replace with your WhatsApp number
  };

  const handleEmailClick = () => {
    window.location.href = "Kashifali61612@gmail.com"; // Replace with your email
  };

  return (
    <div className="flex flex-col md:flex-row lg:h-[600px] ">
      {/* Left image */}
      <div className="md:w-1/2">
        <img
          src="/Courses/online-university-6.jpg" // Replace with your image path
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="md:w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-6">Need more info?</h2>

        <button
          onClick={handleWhatsAppClick}
          className="border border-cyan-400 text-white px-6 py-2 rounded mb-4 hover:bg-cyan-600 transition"
        >
          Message us on WhatsApp
        </button>

        <button
          onClick={handleEmailClick}
          className="border border-cyan-400 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
        >
          Send us an Email
        </button>
      </div>
    </div>
  );
};

export default ContactCTA;
