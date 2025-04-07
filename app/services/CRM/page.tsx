'use client'
import Navbar from '@/app/components/navbar'
import React, { useState } from 'react'

import Crm_paralex from './components/paralex'
import Footer from '@/app/components/footer'
import CRMFeatures from './components/crm_feature'
import { motion } from 'framer-motion';

function CRM() {const [rotate, setRotate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
  setRotate({ x, y });
};

const handleMouseLeave = () => {
  setRotate({ x: 0, y: 0 });
};

    return (
        <>
            <Navbar />
            <div>
       <div
    className="relative mt-20 mx-auto flex flex-col items-center justify-center 
             bg-cover bg-center text-center h-[400px] sm:h-[500px] md:h-[600px] lg:min-h-screen 
             px-4 sm:px-6 md:px-12"
    style={{ backgroundImage: "url('/crm-bg2.webp')" }}
  >
    {/* White Overlay */}
    <div className="absolute inset-0 bg-white lg:bg-transparent bg-opacity-80"></div>

    {/* Content */}
    <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
      {/* LEFT SIDE - ERP Details */}
      {/* Empty placeholder for left side content if needed */}
      <div className="flex-1 hidden md:block"></div>

      {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
      <div className="flex-1 hidden md:block"></div>
    </div>
  </div>

 
                <div>
                    {/* <Image
                        src="/CRM-services.webp"
                        alt="Supply Chain Management"
                        width={9000}
                        height={4000}
                        className="mt-20 w-full max-w-[100%] m-auto md:max-w-[800px] lg:max-w-[900px] lg:max-h-[600px] mb-20 "
                    /> */}

<div
      className="w-2/3 mx-auto mt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src="/CRM-services.webp"
        alt="Expert Advice"
        className="w-full sm:w-[90%] md:w-[700px] lg:w-[800px] m-auto "

        animate={{ rotateX: rotate.y, rotateY: rotate.x }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      />
    </div>
                </div>
                <CRMFeatures />
                <Crm_paralex />
                <div className='w-full lg:w-9/12 lg:m-auto p-5 flex '>
                    <div className='flex-1'>
                        <h1 className='  font-bold lg:text-4xl md:text-3xl '>Benefits of Choosing Golden-Lake CRM</h1>
                        <p className='text-justify mt-2'>
                            Adopting Golden-Lake CRM solutions can transform your business in numerous ways:</p>

                        <ol className="list-item ml-2 list-inside text-gray-700">
                            <li><span className='font-bold'>1- Data Management</span></li>
                            <p>By consolidating your customer data in one place, our CRM guarantees that your team always has access to the most current and correct information.</p>
                            <li><span className='font-bold'>2- Improved Interactions with Customers</span></li>
                            <p>
                                Gaining a deeper insight into your customers enables you to provide them with timely, personalized messages that foster trust and loyalty.
                            </p>
                            <li><span className='font-bold'>3- Maximized Productivity in Sales</span></li>
                            <p>
                                Prioritizing leads, facilitating the sales process, and closing deals faster are all made easier with our CRM. In terms of converting leads into dedicated consumers, it takes a lot of work to beat.    </p>
                            <li><span className='font-bold'>4- Enhanced Team Efficiency</span></li>
                            <p>
                                Your staff can concentrate on providing outstanding customer experiences by automating mundane activities and using user-friendly tools.  </p>
                            <li><span className='font-bold'>5-  Improved Decision-Making</span></li>
                            <p>
                                Determine trends, measure success, and optimize your strategy with data-driven reports and real-time insights.  </p>

                        </ol>

                    </div>

                </div>

            </div>
            <div className='w-full lg:w-9/12 lg:m-auto p-5 flex '>
                <div className='flex-1'>
                    <h1 className='  font-bold lg:text-4xl md:text-3xl  '>Who Can Benefit from Golden-Lake CRM??</h1>
                    <p className='text-justify mt-2'>
                        More than just a software vendor, Golden-Lake strives to be an integral part of your success story. What distinguishes us is this:  </p>

                    <ul className="list-disc ml-2 list-inside text-gray-700">
                        <li>In retail, you can personalize shopping experiences, monitor consumer behavior, and handle inquiries..</li>
                        <li>In the manufacturing sector, we may improve contact with customers, streamline the processing of orders, and monitor inventory levels</li>
                        <li>Improve client interactions, monitor project progress, and enhance service delivery as part of our professional services.</li>
                        <li>Coordinate shipments, maintain vendor relationships, and enhance logistics and supply chain delivery schedules.</li>

                    </ul>
                    <p className='text-justify mt-2'>
                        Here at MultiTechno, we know that every company is unique. For this reason, we provide CRM systems to meet your business’s and its operations’ demands.
                    </p>
                </div>

            </div>
            <div className='w-full lg:w-9/12 lg:m-auto p-5 flex '>
                <div className='flex-1'>
                    <h1 className='  font-bold lg:text-4xl md:text-3xl  '>Why Choose Golden-Lake?</h1>
                    <p className='text-justify mt-2'>
                        More than just a software vendor, Golden-Lake strives to be an integral part of your success story. What distinguishes us is this:</p>

                    <ol className="list-item ml-2 list-inside text-gray-700">
                        <li><span className='font-bold'>Personalized Approaches</span></li>
                        <p>
                            “One size fits all” is not our philosophy. You can customize our CRM solutions to fit your company’s specific requirements.
                        </p>
                        <li><span className='font-bold'>Support from Industry Experts</span></li>
                        <p>
                            If you have any concerns, need training, or want to ensure the deployment goes smoothly, our support team is here 24/7.
                        </p>
                        <li><span className='font-bold'>Technologies with Widespread Potential</span></li>
                        <p>
                            Your customer relationship management system can expand with your company. Our solutions are flexible enough to meet your changing needs.

                        </p>
                        <li><span className='font-bold'>Knowledge of the Field</span></li>
                        <p>
                            We have been assisting businesses in various industries for a long time, so we know your problems and how to fix them
                        </p>
                        <li><span className='font-bold'>Improved Interactions with Customers</span></li>
                        Prioritizing leads, facilitating the sales process, and closing deals faster are all made easier with our CRM. In terms of converting leads into dedicated consumers, it takes a lot of work to beat.</ol>

                </div>

            </div>
            <div className='w-full lg:w-9/12 p-5 lg:m-auto p-3 flex '>
                <div className='flex-1'>
                    <h1 className='  font-bold lg:text-4xl md:text-3xl  '>How Does CRM Integration Work?</h1>
                    <p className='text-justify mt-2'>
                        With our team’s help, you can create a unified system that easily integrates with any program you use—ERP, inventory management, or marketing tools.
                    </p>

                    <ul className="list-disc ml-2 list-inside text-gray-700">
                        By integrating all of your data and processes, you can enjoy the following benefits:
                        <li>Less effort is wasted due to repetition</li>
                        <li>Improved teamwork</li>
                        <li>We have quick access to vital information.</li>


                    </ul>

                </div>

            </div>
            <div className='w-full lg:w-9/12 lg:m-auto p-5 flex '>
                <div className='flex-1'>
                    <h1 className='  font-bold lg:text-4xl md:text-3xl  '>Ready to Uplift Your Customer Relationships?</h1>
                    <p className='text-justify mt-2'>
                    Both your company and your clients deserve nothing less than the best. All the tools you need to operate relationships, boost efficiency, and expand your business are conveniently located in Multi-Tech CRM.

To find out more or to ask for a free sample, get in touch with us today. Transform your consumer contacts into long-term partnerships with our support. </p>
                    <h1 className=' mt-2 font-bold lg:text-4xl lg:mt-5 md:text-3xl'>What Is CRM, and Why Does It Matter?</h1>
                    <p className='text-justify mt-2'>
                        To find out more or to ask for a free sample, get in touch with us today. Transform your consumer contacts into long-term partnerships with our support.        </p>

                    <p className='text-justify mt-2'>
                        <span className='font-bold'>Call us at</span> <span className='text-purple-700 '>
                            +92390061612
                        </span>  or <span className='font-bold'>Request a Free Demo</span> to see how our CRM works for yo    </p>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default CRM
