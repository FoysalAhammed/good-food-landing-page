import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroImg from "../../assets/hero.png"
const Hero = () => {
  return <div className="relative ">
    <div className="container py-16 sm:py-0 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
        <div className="space-y-7 text-dark order-2 sm:order-1 ">
          <h1 className="text-5xl aos-init aos-animate" data-aos="fade-up">Fresh & Healthy Meal Plan <span className="text-secondary font-cursive text-7xl">in Miami</span></h1>
          <p className="lg:pr-64 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Delicious Meals Delivered to Your Door From $132.95 per week</p>
          <div data-aos="fade-up" data-aos-delay="500" className="aos-init aos-animate">
            <div className="flex items-center group">
              <button className="bg-primary h-[40px] text-white px-3 py-2">Choose Your Meal Plan</button>
              <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white"/>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" className="relative z-30 order-1 sm:order-2 aos-init aos-animate" >
          <img src={HeroImg} alt="" className="w-full sm:scale-125 sm:translate-y-16" />
        </div>
      </div>
    </div>
  </div>;
};

export default Hero;
