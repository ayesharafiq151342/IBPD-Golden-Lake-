"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router

interface FlipCardProps {
  image: string; // ✅ Accept image as a string (URL)
  title: string;
  description: string;
  link: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, title, description, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      className="relative w-full h-72 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Wrapper */}
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-5 border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={title} className="w-16 h-16 mb-3" /> {/* ✅ Display Image */}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-purple-600 text-white shadow-lg rounded-lg flex flex-col items-center justify-center p-5 border"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          <p className="text-sm text-start">{description}</p>
          <button
            className="mt-4 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow"
            onClick={() => router.push(link)} // ✅ Navigate to link on click
          >
            View More
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
