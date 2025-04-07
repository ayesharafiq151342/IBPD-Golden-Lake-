"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import ParalexData from "./components/paralex";
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
const Industry_service =[
{
  title:"Trading",
  Link:"/industry/trading"
},
{
  title:"Manufacturing",
  Link:"/industry/industry-manufacturing"
},

{
  title:"Food Industry",
  Link:"/industry/food"
},
{
  title:"Steel Industry",
  Link:"/industry/services"
},

{
  title:"Cloud Storage",
  Link:"/industry/Cloud_Storage"
},
{
  title:"Chemical Industry",
  Link:"/industry/Chemical"
},
{
  title:"Solar Industry",
  Link:"/industry/solar-power-and-energy-management-systems"
},
{
  title:"Service Industry",
  Link:"/industry/services"
},


]
  return (
    <>
      <Navbar />
      {/* Content */}
      
      <div
        className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/data-analytics-and-reporting.jpg')",

          backgroundBlendMode: "overlay",
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
              Data Analytics and Reporting

              <hr className="w-full border-white border-2 my-4" />
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
           Optimize your business with Multi-Techno’s data analytics and
           reporting for smarter, data-driven decisions.
            </motion.p>

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
      {/*    Solar Power and Energy Management Systems: */}
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        {/* What is an ERP system, and how can the solar business benefit from
              it? */}
        <section>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What Are Data Analytics and Reporting?{" "}
            </h1>
            <p className="text-justify">
              The most successful companies in today’s data-driven environment
              have mastered data analytics. Modern data analytics and reporting
              tools are available at Multi-Techno, allowing businesses to make
              better, quicker, and more educated choices. Discover previously
              unknown insights, track performance in real time, and open doors
              to untapped growth prospects with the help of our tools.
            </p>
            <h1 className="text-2xl sm:text-3xl mt-4 md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What Are Data Analytics and Reporting?{" "}
            </h1>

            <p className="text-justify">
              Data analytics analyzes, organizes, and interprets data to derive
              meaningful insights. It helps organizations display complicated
              data straightforwardly and compellingly when used with reporting
              tools.
              <br /> If you want to know how your company is doing, what trends
              are coming up, how to make things run more smoothly, how to boost
              efficiency, and how to make your customers’ experiences more
              memorable, then you need our data analytics and reporting
              solutions. <br /> No matter the size of your company, our keys are
              ready to provide you with the insights you require to excel in a
              highly competitive industry.{" "}
            </p>
          </div>
          <div className="grid mt-10 my-auto">
            <img src="/dashboard2.png" />
          </div>
        </section>
      </section>
      {/* ERP Principles of Solar Power and Energy Management Systems */}
      <section className="bg-gray-200 mt-10 py-16">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Features of Multi-Techno Data Analytics and Reporting
          </h1>
          <h1 className="text-sm sm:text-xl mt-4 font-bold text-gray-800">
            Our robust platform offers a range of features to meet your company
            needs:
          </h1>
        </motion.div>

        {/* Two-column section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[
            {
              title: "Customizable Dashboards",
              text: "Attain a real-time view of your influential metrics through personalized dashboards. Monitor performance instantly and access critical insights anytime, anywhere.",
            },
            {
              title: "Advanced-Data Visualization",
              text: "Create visually appealing data visualizations like charts, graphs, and heatmaps to simplify otherwise difficult-to-understand information.",
            },
            {
              title: "Predictive Analytics",
              text: "Forecast trends, consumer behaviors, and industry shift using sophisticated algorithms. Act decisively in light of reliable forecasts.",
            },
            {
              title: "Automated Reporting",
              text: "Efficiently generate reports without human intervention. Set up automatic notifications for when you need updates, which will land in your inbox or dashboard.",
            },
            {
              title: "Real-Time Monitoring",
              text: "Continuously monitor critical metrics to spot problems and opportunities as they arise. Adapt quickly to the ever-shifting demands of your business.",
            },
            {
              title: "Integration Capabilities",
              text: "Effortlessly integrate with your current systems to provide a consolidated view of company operations. This includes ERP platforms, CRM applications, and third-party databases.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <img
        src="/data-analytics-and-reporting-image2.jpg"
        className="m-auto bg-red-700  mt-10 w-86   "
      />
      {/* Case Studies Demonstrating ERP Adoption in The Solar Business
              Successfully  */}
      <section className=" m-auto mt-10 lg:w-9/12 2-full p-7">
        <section>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Why Does Your Business Need Data Analytics and Reporting?
            </h1>
            <p className="text-justify">
              The benefits of data analytics and reporting extend across every
              aspect of your business:
            </p>
            <ul className=" space-y-2">
              <li className="mt-2">
                {" "}
                <h1 className="font-bold">1- Enhanced Decision-Making</h1>
                <br />
                Make confident judgments based on real-time understandings and
                data-driven reports instead of estimation.
              </li>
              <li>
                {" "}
                <h1 className="font-bold">2- Increased Operational Efficiency</h1>
                <br />
                Find bottlenecks, inefficiencies, and opportunities to improve processes and reduce costs.
              </li>
              <li>
                {" "}
                <h1 className="font-bold"> 3- Competitive Advantage</h1>
                <br />
                Gain a deeper understanding of market trends and competitor strategies to stay one step ahead.  </li>
              <li>
                {" "}
                <h1 className="font-bold">4-Simplified Compliance</h1>
                <br />
                Create accurate, audit-ready reports to meet monitoring requirements with ease.    </li>
            
          
            </ul>
            <section className="bg-white py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-9/12 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">Industries We Serve</h2>
        <p className="text-gray-600 mt-4">
          Regardless of your industry, our data analytics solutions are personalized to meet your unique challenges and goals.
        </p>
        <ul className="mt-6 space-y-2 text-left md:text-start">
          {Industry_service.map((industry, index) => (
            <li key={index} > 
              <a href={industry.Link} className="text-purple-600 text-start hover:text-purple-800 transition">
                {index + 1}. {industry.title}
              </a>
            </li>
          ))}
        </ul>
      </div> <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="/industy-we-service.png" alt="Industry Services" className="w-3/4 md:w-full max-w-sm" />
      </div>
    </section>
          </div>
 
        
        </section>
      </section>
      <ParalexData/>
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
      <div className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose Multi-Techno for Data Analytics?
        </h2>
        <p className="text-gray-700 mb-6">
          When you work with Multi-Techno ERP analytics software / solutions,
          youll get solutions that generate outcomes because we mix cutting-edge
          innovation with an in-depth knowledge of business demands. What
          distinguishes us is this:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1. User-Friendly Interface
            </h3>
            <p className="text-gray-700">
              Because our platform is intuitively built, even team members with
              technical backgrounds can analyze data and create reports.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2. Custom-Made Answers
            </h3>
            <p className="text-gray-700">
              A companys operations may vary. Because of this, we provide
              flexible solutions to meet your unique needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3. State-of-the-Art Technology
            </h3>
            <p className="text-gray-700">
              We leverage cutting-edge technology, such as analytics driven by
              artificial intelligence and real-time monitoring, to provide you
              with unmatched insights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              4. Committed Assistance
            </h3>
            <p className="text-gray-700">
              To ensure you get the most out of your system, our experienced
              team is here 24/7 to answer questions, give training, and more.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              5. Flexible System
            </h3>
            <p className="text-gray-700">
              Regardless of your company size, our solutions are designed to
              scale with you, meeting your changing needs.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How Does It Work?
          </h2>
          <p className="text-gray-700 mb-4">
            Quickly and easily begin usingGolden Lake data analytics and
            reporting tools, as mentioned below:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <span className="font-semibold">Consult:</span> To determine the
              optimal course of action, our specialists will examine your
              companys objectives and present data infrastructure.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Implementation:</span> To meet your
              unique requirements, we will tailor our platform and make it
              compatible with your current infrastructure.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Become Trained:</span> Your team
              will be able to make the most of the platform thanks to the
              practical training well give them.
            </li>
            <li>
              <span className="font-semibold">Continuous Assistance:</span> Use
              our devoted teams round-the-clock help to keep your system running
              correctly.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Practical Outcomes
          </h2>
          <p className="text-gray-700 mb-4">
            Among the revolutionary outcomes experienced by businesses that have
            implementedGolden Lake reporting and data analytics solutions
            include:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              A <span className="font-semibold">35% boost</span> to operational
              efficiency, using automated workflows and real-time monitoring.
            </li>
            <li className="mb-2">
              A <span className="font-semibold">50% increase</span> in client
              retention rate resulted from better understanding and meeting
              customer needs through predictive analytics.
            </li>
            <li>
              A <span className="font-semibold">20% decrease</span> in expenses
              can be achieved by identifying inefficiencies and optimizing
              resource allocation.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Are You Ready to Experience Your Data?
          </h2>
          <p className="text-gray-700 mb-4">
            The future of your company is in the data you have collected. Express
            its full potential withGolden Lake robust data analytics and
            reporting solutions.
          </p>
          <p className="text-gray-700">
            Please make an appointment for a no-cost demo or get more information
            by contacting us today. Discover the power of real-time reporting and
            actionable insights for your business.
          </p>
        </div>
      </div>
    </div>
</section>

      <Footer />{" "}
    </>
  );
}

export default Page;
