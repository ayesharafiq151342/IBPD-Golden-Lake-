"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from "framer-motion";

function Page() { 
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
console.log(width);



  const [isModalOpen, setModalOpen] = useState(false);
 
  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: `url('/account-payable-system.jpg')`,
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE */}
          <motion.div
            className="flex-1 text-center md:text-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-white font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Account Payable System  

              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            {/* <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              ERP systems can be customized to meet the unique needs
              and challenges of different industries
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                label="Get Free Demo"
                variant="secondary"
                onClick={() => setModalOpen(true)}
              />
            </motion.div>

            {/* Modal */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </motion.div>

          {/* RIGHT SIDE (Optional Form/Visuals) */}
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>
      <div className="lg:w-9/12 w-full  mx-auto p-6 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">
          Efficient Account Payable System by Golden Lake ERP
        </h1>
        <p className="text-justify mb-4">
          Accounts Payable System (APS) is the word used when a company buys
          things on credit and has to pay them back quickly. Moreover, it is
          recorded as a liability in bookkeeping and comes under the heading of
          payables. An account payable system is a financial instrument that
          must be paid on time to prevent default. Furthermore, the software is
          also available for accounts payable. The accounts payable software of
          the Golden Lake ERP system has a complete supply chain solution.
        </p>
        <div className="flex justify-center mb-10 mt-16">
          <img
            src="/Purcahse-managemnt-flow diagram.webp" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full  rounded-lg shadow-md"
          />
        </div>
        <p className="text-justify">
          Account Payable System refers to a company’s set of policies,
          procedures, and practices concerning managing its trade credit
          purchases. In summary, they consist of seeking trade credit lines,
          acquiring favourable purchase terms, and managing the flow and timing
          of investments to control the company’s working capital efficiently.
        </p>
        <div className="p-6   mx-auto  space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-semibold">Setup:</h2>
              <ul className="list-disc pl-5">
                <li>Sales Tax Definition</li>
                <li>WHT Definition</li>
                <li>Payment Terms</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Reports:</h2>
              <ul className="list-disc pl-5">
                <li>Purchase Invoice </li>
                <li>Prepayment</li>
                <li>RFQ Report</li>
                <li>Debit Memo</li>
                <li>Credit Memo</li>
                <li>Invoice Payment</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Transactions:</h2>
              <ul className="list-disc pl-5">
                <li>Invoice Summary Report of Purchase</li>
                <li>Prepayment Party Wise Unpaid Invoices</li>
                <li>Ledger</li>
                <li>Vendor and Invoice Wise Aging</li>
                <li>Ageing Summary</li>
                <li>WHT Party Wise</li>
                <li>Sales Tax Summary</li>
              </ul>
            </div>
          </div>

          <h1 className="text-2xl font-bold">
            Features of Account Payable System
          </h1>

          <h2 className="text-xl font-bold">
            Account Payable SystemStandard Invoice
          </h2>
          <p className="text-justify">
            A standard invoice is a concise paperwork used to bill for the
            products or services you have given. Further, it would include a
            description of the item or service, pricing, acceptable payment
            methods, and delivery dates for the invoice.
          </p>

          <h3 className="font-semibold">Debit memo</h3>
          <p className="text-justify">
            A debit memo statement is a form of paperwork that notifies a buyer
            that the seller is debiting or raising the amount. In accounts
            payable, the buyer’s accounts payable is increased due to extreme
            circumstances.
          </p>

          <h3 className="font-semibold">Credit memo</h3>
          <p className="text-justify">
            A credit memo is a short form of a memorandum, a statement delivered
            by a supplier of goods or services to the customer that reduces the
            amount due to the seller under the conditions of a previous
            invoice.A credit memo is a short form of a memorandum, a statement
            delivered by a supplier of goods or services to the customer that
            reduces the amount due to the seller under the conditions of a
            previous invoice.
          </p>

          <h3 className="font-semibold">Prepayments</h3>
          <p className="text-justify">
            Prepayments are payments that are paid in advance to the supplier.
            When a company completes the invoice process to improve receiving
            products or services, the prepayment will be cleared considering the
            procedure.
          </p>

          <h3 className="font-semibold">Cash Invoice</h3>
          <p className="text-justify">
            Small company owners are particularly fond of cash invoicing. A cash
            invoice is a statement of a selling transaction that occurred,
            issued when the payment system is cash.{" "}
          </p>

          <h3 className="font-semibold">Order Number</h3>
          <p className="text-justify">
            The order number issued to the requisition is usually the same as
            the request number; furthermore, they are stored together. Tracking
            incoming goods in the warehouse and managing product receipts.
          </p>
          <h3 className="font-semibold">Payable invoice</h3>
          <p className="text-justify">
            A firm that invoices its consumer for the purchase of products and
            finally the services through invoice is referred to as ‘Payable by
            Invoice. It generates after the GRN number. Moreover, the invoice
            contains crucial information, such as the price of goods received
            and services performed. As well as additional charges, company data,
            and a due date.{" "}
          </p>
          <h3 className="font-semibold">Withholding tax invoice</h3>
          <p className="text-justify">
            An inspection is a process that involves measuring, inspecting,
            testing, or assessing one or more qualities of a product and further
            comparing the findings to stated standards to determine if that
            feature is conformed to.{" "}
          </p>
          <h3 className="font-semibold">G.R.N. (Goods Receipt Note)</h3>
          <p className="text-justify">
            A withholding tax is sometimes known as a retention tax.
            Furthermore, it is a legal requirement that requires the client’s
            payer—further, the invoice—to withhold or reduce the tax from the
            payment and remit it to the state.{" "}
          </p>
          <h3 className="font-semibold">Payments</h3>
          <p className="text-justify">
            Payment is made based on invoices of products and services that have
            been decided upon by all parties concerned. Furthermore, payments
            can be made in cash, by cheque, wire transfer, line of credit,
            direct debit, post-dated cheque, etc.
          </p>

          <h2 className="text-xl font-bold">
            Accounts Payable Perks: Given these points
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Savings of time</li>
            <li>Invoicing at a low cost</li>
            <li>Improved understanding</li>
            <li>Anti-fraud measures</li>
            <li>Auditing is simple.</li>
            <li>Connecting to existing systems</li>
          </ul>
          <h3 className="font-semibold mt-4">
            Account Payable System Aging Report
          </h3>
          <p className="text-justify">
            The report aims to help the user identify which bills are past due.
            Moreover, it’s essential for a company that wants to keep track of
            whose payables must be paid on time. Furthermore, the Golden Lake
            ERP Module was responsible for the best possible service to your
            business. Given these points
          </p>
          <h3 className="font-semibold">Supplier aging report</h3>
          <p className="text-justify">
            The Supplier Aging report lists the outstanding vendor balances.
            Moreover, they may be categorized by date interval or aging period
            description.
          </p>
          <h3 className="font-semibold">Supplier ledger</h3>
          <p className="text-justify">
            All transactions connected to every supplier are recorded in the
            supplier ledgers, including all invoices produced and paid from the
            beginning.
          </p>
          <h3 className="font-semibold">Unpaid invoices report</h3>
          <p className="text-justify">
            The Golden Lake services give an unpaid invoice report solution that
            automates the process, allowing you to spend less time tracking
            unpaid bills and concentrating more on what matters most.
          </p>
          <h3 className="font-semibold">Supplier closing report</h3>
          <p className="text-justify">
            {" "}
            This report displays the balance for a single item of opening and
            closing. Further, the details of suppliers are saved in ERP Golden
            Lake software, with the principal supplier and item ID used to sort
            the listings.{" "}
          </p>
          <h3 className="font-semibold">Supplier invoices </h3>
          <p className="text-justify">
            A supplier invoice is a bill that a seller sends to a client for
            products delivered and further services done. It lists the products
            and services sold to clients and any payroll taxes and shipping
            costs spent during the transaction.{" "}
          </p>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}

export default Page;
