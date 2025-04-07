// app/page.tsx
"use client";
import React from 'react';
import Navbar from '../components/navbar';
import Homeform from './components/Homeform';

import FlipCardGrid from './components/flipcard';
import ERPFeatures from './components/erpFeatures';
import IndustriesSection from './components/Industrysecttion';
import Fronthome from './components/fronthome';
import Testimonials from './components/Testimoinal';
import Footer from '../components/footer';

export default function Homepage() {
  return (
    <div className='m-auto'>
      <Navbar />
      <Fronthome />
      
      <FlipCardGrid />
      <ERPFeatures />
      <IndustriesSection />
      <Homeform />
      <Testimonials />
      <Footer/>
    </div>
  );
}
