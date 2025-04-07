import React from 'react';

const LocationMap = () => {
    const address = "House No 563, Main Road Narwala, Banglow, Faisalabad, Pakistan";
    const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.078742118292!2d73.0689791747756!3d31.41374348048788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a79c1923b5%3A0x8af12067a8426c92!2sKohinoor%20Plaza%20I!5e0!3m2!1sen!2sus!4v1711753448588!5m2!1sen!2sus`; // Update this URL with the new address (replace with the correct coordinates of the new address if needed)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
      <div className="relative">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md"
          title="Our Location"
        ></iframe>
        <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 rounded-tr-md">
          <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
        </div>
      </div>
      <div className="text-gray-700 mt-4">
        <p className="mb-2">{address}</p>
      </div>
    </div>
  );
};

export default LocationMap;
