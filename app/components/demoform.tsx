"use client";
import { useState } from "react";
import { Toaster, toast } from "sonner"; // Sonner for toast notifications

function DemoForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('Form submitted successfully');
      } else {
        toast.error('Error: ' + result.error);
      }
    } catch (error) {
      const err = error as Error; // Type assertion
      toast.error("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Toast Container */}
      <Toaster position="top-right" richColors />
      
      <form
        id="demo"
        onSubmit={handleSubmit}
        className="bg-purple-700 bg-opacity-90 text-white p-6 rounded-lg shadow-md lg:w-9/12 h-auto"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Request for Demo</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-gray-900"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-gray-900"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-gray-900"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-gray-900"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-white text-purple-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition disabled:opacity-50 w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default DemoForm;
