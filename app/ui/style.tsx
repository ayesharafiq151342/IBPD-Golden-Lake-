import React from "react";
// import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Define different button types
  onClick?: () => void;
  disabled?: boolean;
  className?: string; // Allow custom styles
  fullWidth?: boolean; // Option for full width button
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  const baseStyles =
  "px-6 py-2 font-semibold transition-all duration-300 focus:outline-none border-4 border-white";

const variants = {
  primary: "bg-darkblue text-white rounded-full hover:bg-purple-700 disabled:bg-gray-400 relative group",
  secondary:
    "bg-black rounded-full mt-5 text-blue-900 border border-purple-900 hover:bg-purple-600 hover:text-white disabled:bg-gray-200 relative group",
  tertiary:
    "bg-white border-blue text-black lg:text-xl md:text-lg text-sm border-4 mt-5 text-blue-900 border border-purple-900 hover:bg-purple-600 hover:text-white disabled:bg-gray-200 relative group",

  };

  return (
<>
<button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {label}
    </button>
    {/* // blue btn */}
    {/* <button className="relative inline-block bg-white border-4 border-blue text-black px-4 py-2 font-medium bg-blue-500 rounded-md transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
    <span className="lg:text-xl md:text-lg text-sm font-bold">Visit Map</span>
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
    <ArrowRight className="text-black" /> 
    </span>
  </button> */}
  
  {/* black */}
    {/* <Link href={''}>
            <button className="relative inline-block text-white bg-black border-2 border-white rounded-full px-4 py-2 mt-4 font-medium bg-blue-500  transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
        <span className="lg:text-xl md:text-lg text-sm font-bold">Contact us</span>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
        <ArrowRight className="text-white" />
        </span>
      </button>
      </Link> */}
      {/* bluedark */}
        {/* <Link href={''}>
                <button className="relative inline-block text-white bg-darkblue border-2 border-white rounded-full px-4 py-2 mt-4 font-medium bg-blue-500  transition-all duration-300 hover:pr-6 hover:pl-2 hover:shadow-lg hover:translate-x-2 w-40 h-12">
            <span className="lg:text-xl md:text-lg text-sm font-bold">Contact us</span>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-[-10px] text-lg text-transparent hover:text-white">
            <ArrowRight className="text-white" /> 
            </span>
          </button>
          </Link> */}
  </>
  );
};

export default Button;
