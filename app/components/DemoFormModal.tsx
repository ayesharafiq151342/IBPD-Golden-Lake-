"use client";
import { useState } from "react";
import { X } from "lucide-react"; // Lucide React icons
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Framer Motion for animation
import { Toaster, toast } from "sonner"; // Sonner for toast notifications

function DemoFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          router.push("/thankyou");
        }, 1000);
      } else {
        toast.error("❌ Failed to submit form: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      const err = error as Error;
      toast.error("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <Toaster position="top-right" richColors /> {/* Toast container */}
      
      <motion.div
        className="relative bg-white p-6 rounded-lg shadow-lg w-[400px] border border-gray-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">Book Online Demo</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>

          {/* Animated Submit Button */}
          <motion.button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-md w-full hover:bg-purple-800 transition disabled:opacity-50 flex items-center justify-center"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <motion.div
                className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default DemoFormModal;
