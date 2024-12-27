import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[50vh] pt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.108398617872!2d9.073702860600596!3d45.54814489672382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478695d25d400579%3A0xc7366a89cd586a07!2sAVIS%20Arese!5e0!3m2!1sen!2sit!4v1735334265010!5m2!1sen!2sit"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - Avis Arese"
      ></iframe>
    </div>
  );
};

export default Map;
