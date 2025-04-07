"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-16 mt-14 text-white">
        <div className="container mx-auto px-4">
          {/* About Us Section */}
          <section className="mb-12">
            <h2 className="text-center text-4xl font-bold mb-8 text-white">
              ABOUT US
            </h2>
          </section>

          {/* Our Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/our-story.jpg"
                alt="Team at Work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-purple-700 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-justify leading-relaxed">
                Golden Lake is a registered firm specializing in ERP software,
                systems design, and implementation, established in 2019. Our
                system is an industry-customized ERP solution designed to
                streamline business operations and enhance organizational
                efficiency.
                <br /><br />
                We take pride in delivering cutting-edge technology automation
                systems that bring cost reduction, workflow optimization, and
                enhanced productivity. Whether you need financial management,
                inventory tracking, HR solutions, or customer relationship
                management (CRM), our solutions are tailored to your needs.
                <br /><br />
                Access real-time business insights anytime, anywhere—on your
                smartphone, tablet PC, or laptop. At Golden Lake, we combine
                **innovation with reliability** to ensure your business thrives
                in the digital world.
              </p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 m items-center">

  {/* Image Section (on medium screens and below, the image will be above the text) */}
  <div className="rounded-lg overflow-hidden shadow-lg w-full lg:order-2">
    <img
      src="/mission.jpg"
      alt="Customer Interaction"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="bg-purple-700 rounded-lg p-6 shadow-md w-full lg:order-1">
    <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
    <p className="text-justify leading-relaxed">
      Customer affiliation is our topmost priority, particularly for
      those who require personalized attention. We focus on building
      strong relationships by understanding individual needs and
      providing tailored solutions.
      <br /><br />
      Our mission is to deliver exceptional services that ensure
      transparency, trust, and integrity. With our innovative
      approach, we strive to enhance consumer engagement, satisfaction,
      and long-term loyalty.
      <br /><br />
      Every client is valued, and our efforts are geared towards
      creating a seamless and fulfilling experience. We listen, adapt,
      and innovate to meet evolving customer demands, ensuring lasting
      success.
    </p>
  </div>
</section>

          {/* Our Vision Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/vision.jpg"
                alt="Strategic Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-purple-700 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-justify leading-relaxed">
                Our goal is to offer affordable and high-quality services that
                empower businesses to expand their online presence effectively.
                <br /><br />
                We help clients achieve their digital goals with cost-effective
                and results-driven strategies. By leveraging market trends and
                cutting-edge technologies, we ensure seamless business
                operations and maximum outreach.
                <br /><br />
                Partnering with us means **gaining a competitive edge** in the
                digital world. We prioritize long-term collaborations that drive
                sustainable business growth and brand success.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
