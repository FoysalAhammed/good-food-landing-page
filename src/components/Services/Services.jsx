import React from "react";
import { FaBusAlt } from "react-icons/fa";

const Services = () => {
  return <div className="py-14 md:py-28 ">
    <div className="container">
      <h1 className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center aos-init aos-animate">Why Choose Us</h1>
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
          <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
            <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
            <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
            <FaBusAlt className="text-5xl text-primary" />
          </div>
          <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
          <FaBusAlt className="text-5xl text-secondary" />
          <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
          <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
          </div>
          <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
            <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
            <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
            <FaBusAlt className="text-5xl text-primary" />
          </div>
          <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
          <FaBusAlt className="text-5xl text-secondary" />
          <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
          <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>;
};

export default Services;
