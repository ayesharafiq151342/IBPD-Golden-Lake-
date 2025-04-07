import React from "react";

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
    "px-6 py-2 font-semibold rounded-full transition-all duration-300 focus:outline-none";
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-400",
    secondary:
      "bg-white mt-5 text-blue-900 border border-purple-900 hover:bg-purple-600 hover:text-white disabled:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
