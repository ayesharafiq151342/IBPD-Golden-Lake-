// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import Button from "../ui/style";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeLink, setActiveLink] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle dropdown menus
//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   // Toggle Mobile Menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setActiveDropdown(null);
//   };

//   // Set active link
//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setActiveDropdown(null);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50 border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4 md:px-6 lg:px-8">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-3">
//   <h1 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">
//     Golden <span className="text-purple-700">Lake</span>
//   </h1>
// </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-gray-500 dark:text-gray-400 p-2 rounded-lg focus:ring-2"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Navbar Links */}
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } md:flex md:items-center md:space-x-6 w-full md:w-auto absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent shadow-lg md:shadow-none z-50`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//             {/* Home */}
//             <li>
//               <Link
//                 href="/"
//                 onClick={() => handleLinkClick("home")}
//                 className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                   activeLink === "home"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                     : "text-gray-900 dark:text-white"
//                 }`}
//               >
//                 Home
//               </Link>
//             </li>

//             {/* Services Dropdown with Navigation */}
//             <li className="relative">
//               <div className="flex items-center">
//                 <Link
//                   href="/services"
//                   className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                     activeLink === "services" || activeDropdown === "services"
//                       ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                       : "text-gray-900 dark:text-white"
//                   }`}
//                   onClick={() => handleLinkClick("services")}
//                 >
//                   Services
//                 </Link>
//                 <ChevronDown
//                   className="ml-1 w-4 h-4 cursor-pointer"
//                   onClick={() => toggleDropdown("services")}
//                 />
//               </div>

//               {activeDropdown === "services" && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
//                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                     {[
//                       {
//                         name: "Trading & Distribution System",
//                         link: "/services/trading",
//                       },
//                       {
//                         name: "Manufacturing ERP System",
//                         link: "/services/manufacturing",
//                       },
//                       {
//                         name: "Supply Chain Management System",
//                         link: "/services/supply_chain",
//                       },
//                       {
//                         name: "Project management system",
//                         link: "/services/project-managment",
//                       },
//                       {
//                         name: "Customer Relationship Management",
//                         link: "/services/CRM",
//                       },
//                       { name: "Golden-lake  NGOS", link: "/services/Ngo" },
//                       {
//                         name: "HR or Payroll  system",
//                         link: "/services/Payroll",
//                       },
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <Link
//                           href={service.link}
//                           className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                             activeLink === service.name
//                               ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                               : ""
//                           }`}
//                           onClick={() => handleLinkClick(service.name)}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//             {/* Industry Dropdown with Navigation */}
//             <li className="relative">
//               <div className="flex items-center">
//                 <Link
//                   href="/industry"
//                   className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                     activeLink === "industry" || activeDropdown === "industry"
//                       ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                       : "text-gray-900 dark:text-white"
//                   }`}
//                   onClick={() => handleLinkClick("industry")}
//                 >
//                   Industry
//                 </Link>
//                 <ChevronDown
//                   className="ml-1 w-4 h-4 cursor-pointer"
//                   onClick={() => toggleDropdown("industry")}
//                 />
//               </div>

//               {activeDropdown === "industry" && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
//                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                     {[
//                       { name: "Trading ", link: "/industry/trading" },
//                       {
//                         name: "Manufacturing ",
//                         link: "/industry/industry-manufacturing",
//                       },
//                       { name: "Food", link: "/industry/food" },
//                       {
//                         name: "Solar Industry",
//                         link: "/industry/solar-power-and-energy-management-systems",
//                       },
//                       { name: "Chemical", link: "/industry/Chemical" },
//                       {
//                         name: "Cloud Storage",
//                         link: "/industry/Cloud_Storage",
//                       },
//                       { name: "Steel", link: "/industry/steel" },
//                       { name: "Services", link: "/industry/services" },
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <Link
//                           href={service.link}
//                           className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                             activeLink === service.name
//                               ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                               : ""
//                           }`}
//                           onClick={() => handleLinkClick(service.name)}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//             <li className="relative">
//               <div className="flex items-center">
//                 <Link
//                   href="/Business"
//                   className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                     activeLink === "Business" || activeDropdown === "Business"
//                       ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                       : "text-gray-900 dark:text-white"
//                   }`}
//                   onClick={() => handleLinkClick("Business")}
//                 >
//                   Business
//                 </Link>
//                 <ChevronDown
//                   className="ml-1 w-4 h-4 cursor-pointer"
//                   onClick={() => toggleDropdown("Business")}
//                 />
//               </div>
//               {activeDropdown === "Business" && (
//                 <div className="absolute left-0 mt-2 w-72 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
//                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                     {[
//                       {
//                         name: "Accounts And Finance Management",
//                         link: "/Business/Accounts-And-Finance-Management",
//                       },
//                       { name: "Cash Management ", link: "/Business/Cash-Management" },
//                       {
//                         name: "Inventory Management system",
//                         link: "/Business/inventory-management-system",
//                       },
//                       { name: "Purchase Management", link: "/Business/purchase-management" },
//                       { name: "Account Payable System/", link: "/Business/Account-payable-system/" },
//                       { name: "Sale Management System", link: "/Business/sale-management-system" },
//                       {
//                         name: "Fixed Asset Management",
//                         link: "/Business/fixed-asset-management-erp-software",
//                       },
//                       {
//                         name: "Administration And SecuritiesManagement",
//                         link: "/Business/administration-and-securities-management-system",
//                       },
//                       {
//                         name: "Data Analytics And Reporting",
//                         link: "/Business/data-analytics-and-reporting",
//                       },
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <Link
//                           href={service.link}
//                           className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                             activeLink === service.name
//                               ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                               : ""
//                           }`}
//                           onClick={() => handleLinkClick(service.name)}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//             {/* Contact */}
//             <li>
//               <Link
//                 href="/contactus"
//                 onClick={() => handleLinkClick("/contact")}
//                 className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                   activeLink === "contact"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                     : "text-gray-900 dark:text-white"
//                 }`}
//               >
//                 Contact 
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/aboutus"
//                 onClick={() => handleLinkClick("/aboutus")}
//                 className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                   activeLink === "aboutus"
//                     ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
//                     : "text-gray-900 dark:text-white"
//                 }`}
//               >
//                 About
//               </Link>
//             </li>
//           </ul>

//           {/* Search & Button */}
//           <div className="mt-4 md:mt-0 flex items-center space-x-3">
        
//             <Button
//               label="Submit"
//               variant="Primary"
//               type="submit"
//               className=""
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for getting the current path in App Router
import { ChevronDown } from "lucide-react";


const Navbar = () => {
  const pathname = usePathname(); // Get current route

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dropdown menus
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  // Function to check if a link is active
  const isActive = (link) => pathname === link;

  return (
    <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50 border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-lg md:text-lg lg:text-2xl font-semibold dark:text-white">
            Golden <span className="text-purple-700">Lake</span>
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-500 dark:text-gray-400 p-2 rounded-lg focus:ring-2"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 w-full md:w-auto absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent shadow-lg md:shadow-none z-50`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {/* Home */}
            <li>
      <Link
        href="/"
        className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
          isActive("/") || window.location.pathname === "/" 
            ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
            : "text-gray-900 dark:text-white"
        }`}
      >
        Home
      </Link>
    </li>


            {/* Services */}
            <li className="relative">
              <div className="flex items-center">
                <Link
                  href="/services"
                  onClick={() => toggleDropdown("services")} // Toggle dropdown on click
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isActive("/services")
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  Services
                </Link>
                <ChevronDown
                  className="ml-1 w-4 h-4 cursor-pointer"
                  onClick={() => toggleDropdown("services")}
                />
              </div>

              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {[
                      { name: "Trading & Distribution System", link: "/services/trading" },
                      { name: "Manufacturing ERP System", link: "/services/manufacturing" },
                      {
                        name: "Supply Chain Management System",
                        link: "/services/supply_chain",
                      },
                      {
                        name: "Project management system",
                        link: "/services/project-managment",
                      },
                      {
                        name: "Customer Relationship Management",
                        link: "/services/CRM",
                      },
                      { name: "Golden-lake  NGOS", link: "/services/Ngo" },
                      {
                        name: "HR or Payroll  system",
                        link: "/services/Payroll",
                      },    ].map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.link}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive(service.link)
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                              : ""
                          }`}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
      {/* Services */}
            <li className="relative">
              <div className="flex items-center">
                <Link
                  href="/industry"
                  onClick={() => toggleDropdown("industry")} // Toggle dropdown on click
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isActive("/industry")
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                 Industry
                </Link>
                <ChevronDown
                  className="ml-1 w-4 h-4 cursor-pointer"
                  onClick={() => toggleDropdown("industry")}
                />
              </div>

              {activeDropdown === "industry" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {[
                    { name: "Trading ", link: "/industry/trading" },
                    {
                      name: "Manufacturing ",
                      link: "/industry/industry-manufacturing",
                    },
                    { name: "Food", link: "/industry/food" },
                    {
                      name: "Solar Industry",
                      link: "/industry/solar-power-and-energy-management-systems",
                    },
                    { name: "Chemical", link: "/industry/Chemical" },
                    {
                      name: "Cloud Storage",
                      link: "/industry/Cloud_Storage",
                    },
                    { name: "Steel", link: "/industry/steel" },
                    { name: "Services", link: "/industry/services" },
               ].map((industry, index) => (
                      <li key={index}>
                        <Link
                          href={industry.link}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive(industry.link)
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                              : ""
                          }`}
                        >
                          {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
             {/* Services */}
             <li className="relative">
              <div className="flex items-center">
                <Link
                  href="/Business"
                  onClick={() => toggleDropdown("Business")} // Toggle dropdown on click
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isActive("/Business")
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
         Business
                </Link>
                <ChevronDown
                  className="ml-1 w-4 h-4 cursor-pointer"
                  onClick={() => toggleDropdown("Business")}
                />
              </div>

              {activeDropdown === "Business" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {[
              {
                name: "Accounts And Finance Management",
                link: "/Business/Accounts-And-Finance-Management",
              },
              { name: "Cash Management ", link: "/Business/Cash-Management" },
              {
                name: "Inventory Management system",
                link: "/Business/inventory-management-system",
              },
              { name: "Purchase Management", link: "/Business/purchase-management" },
              { name: "Account Payable System", link: "/Business/Account-payable-system" },
              { name: "Sale Management System", link: "/Business/sale-management-system" },
              {
                name: "Fixed Asset Management",
                link: "/Business/fixed-asset-management-erp-software",
              },
              {
                name: "Administration And SecuritiesManagement",
                link: "/Business/administration-and-securities-management-system",
              },
              {
                name: "Data Analytics And Reporting",
                link: "/Business/data-analytics-and-reporting",
              }, ].map((Business, index) => (
                      <li key={index}>
                        <Link
                          href={Business.link}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive(Business.link)
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                              : ""
                          }`}
                        >
                          {Business.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li> <li>
              <Link
                href="/aboutus"
                className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/aboutus")
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                About
              </Link>
            </li>
            {/* Contact */}
            <li>
              <Link
                href="/contactus"
                className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/contactus")
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                Contact
              </Link>
            </li>

            {/* About */}
           
          </ul>

          {/* Button */}
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
