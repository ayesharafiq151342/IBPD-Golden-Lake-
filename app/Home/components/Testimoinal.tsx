"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const clients = [
  { name: 'Shafique Foods', logo: '/logo1.png' },
  { name: 'Eimkaan Alkhalij', logo: '/logo2.png' },
  { name: 'Satson', logo: '/logo3.webp' },
  { name: 'Home', logo: '/logo4.png' },
  { name: 'IMEC', logo: '/logo5.png' },
  { name: 'Supreme', logo: '/logo6.png' },
  { name: 'MSS Solar', logo: '/logo7.png' },
  { name: 'MSS Solar', logo: '/logo10.png' },
  { name: 'MSS Solar', logo: '/logo12.webp' },
  { name: 'MSS Solar', logo: '/logo13.png' },
];

const integrations = [
  { logo1: '/slack-1.webp' },
  { logo1: '/stripe-1.webp' },
  { logo1: '/shopify-1.webp' },
  { logo1: '/paypal-1.webp' },
  { logo1: '/plaid-1.webp' },
  { logo1: '/google-1.webp' },
  { logo1: '/aws-1.webp' },
];

const Testimonials = () => {
  return (
    <div className="py-12 lg:py-16 space-y-12">
      {/* Clients Section */}
      <section className="text-center w-11/12 lg:w-9/12 mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Satisfied Clients</h2>
        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            slidesPerGroup={2}
            breakpoints={{
              640: { slidesPerView: 3, slidesPerGroup: 3 },
              768: { slidesPerView: 4, slidesPerGroup: 4 },
              1024: { slidesPerView: 5, slidesPerGroup: 5 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.custom-clients-next',
              prevEl: '.custom-clients-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 object-contain mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="custom-clients-prev absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-purple-700 text-2xl z-10">
            &#10094;
          </div>
          <div className="custom-clients-next absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-purple-700 text-2xl z-10">
            &#10095;
          </div>
        </div>

        {/* Pagination Dots Style */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #8b5cf6 !important; /* Purple for active */
          }
          .swiper-pagination-bullet:hover {
            background-color: #a78bfa !important;
          }
        `}</style>
      </section>

      {/* Integrations Section */}
      <section className="text-center py-8">
        <h2 className="lg:text-3xl text-2xl font-bold mb-8">Integrate With The Apps You Love</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mx-auto max-w-4xl">
          {integrations.map((app, index) => (
            <div
              key={index}
              className="p-3 h-16 md:h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={app.logo1}
                alt={`Integration Logo ${index + 1}`}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;