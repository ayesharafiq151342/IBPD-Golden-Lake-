"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function ThankYou() {
  return (
  <>  <Navbar/>
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-green-500 text-6xl">✅</div>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">Thank you for contacting us!</h1>
      <p className="text-gray-600 mt-2">
        We’ve received your message and will respond shortly. If you need immediate assistance, please call us at
        <span className="text-purple-600 font-bold">               +92186271612
        </span>
      </p>
      <Link href="/" className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
        Back Home
      </Link>
    </div>
  </div>
  <Footer/></>
  );
}
