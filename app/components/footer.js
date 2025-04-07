import React from "react";
import {
  Mail,
  Phone,
  MapPin,

} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 mt-20 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold border-l-4 border-purple-400 pl-2 mb-4">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            ERP software and systems are designed and implemented by{" "}
            <span className="font-semibold">Golden Lake</span>, a registered
            company. By combining data from{" "}
            <span className="font-semibold">
              financials, sales, CRM, inventories
            </span>
            , and <span className="font-semibold">operations</span>, businesses
            can increase productivity, make better decisions, and boost
            profitability using our{" "}
            <span className="font-semibold">ERP System</span>, a single,
            integrated software platform.{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold border-l-4 border-purple-400 pl-2 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Short Links */}
        <div>
          <h3 className="text-xl font-bold border-l-4 border-purple-400 pl-2 mb-4">
            Short Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400">
                ERP Modules
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                HR and Payroll
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Point of Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Textile Management System
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Cash Management System
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold border-l-4 border-purple-400 pl-2 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <Mail className="mr-2 w-5 h-5" /> goldenlake151342@gmail.com
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 w-5 h-5" /> +92186271612
            </li>

            <li className="flex items-start">
              <MapPin className="mr-2 w-5 h-5 mt-1" />
              House No 563 Main  Road  Narwala Banglow
            </li>
          </ul>

          {/* Social Icons */}
          {/* <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-purple-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-400">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
