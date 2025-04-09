import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Great course — improved my skills and highly recommended for accounting and finance students!",
    name: "Ahmed Khan",
    title: "IBPD Student",
    image: "/images/Khalid-Malik.png",
  },
  {
    quote: "Good Experience taking online class in IBPD. Professional and Experienced Teachers.",
    name: "Sara Ali",
    title: "Web Developer",
    image: "/images/Adeel-Ahmed.png",
  },
  {
    quote: "Phenomenal Training By Team IBPD. Cost Efficient. Time Efficient.",
    name: "Usman Tariq",
    title: "Software Engineer",
    image: "/images/Zeeshan-Ali.png",
  },
  {
    quote: "It will fulfill the job requirements.",
    name: "Usman Tariq",
    title: "Software Engineer",
    image: "/images/Abdul-Hafeez.png",
  },
 
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const total = testimonials.length;

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % total);

  // ✅ Auto-slide logic (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [total]); // Only depends on total, NOT index

  return (
    <div className="w-full bg-gray-100 h-[800px]">
  <div className="relative h-full max-w-7xl mx-auto">
    <div className="absolute inset-0 flex items-center justify-center ">
      <div className="lg:h-[500px] md:h-[400px] flex flex-col items-center justify-center m-8 bg-white border-black border-2 rounded-2xl p-8 text-center shadow-md w-full max-w-7xl">
        <div className="text-xl font-semibold mb-4 md:w-1/2 ">{testimonials[index].quote}</div>
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
        />
        <div className="flex justify-between w-full mt-6 px-4">
          <button onClick={prev}><ChevronLeft size={24} /></button>
          <button onClick={next}><ChevronRight size={24} /></button>
        </div>
        <div className="font-bold">{testimonials[index].name}</div>
        <div className="text-sm text-gray-500 ">{testimonials[index].title}</div>

        

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TestimonialCarousel;
