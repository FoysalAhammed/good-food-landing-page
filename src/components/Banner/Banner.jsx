import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BannerImgleafe from "../../assets/png/leaf.png"
import BannerImgtomato from "../../assets/png/tomato.png"
import BannerImglemon from "../../assets/png/lemon.png"
import BannerImgapple from "../../assets/png/apple.png"
import BannerImgkiwi from "../../assets/png/kiwi.png"
const Banner = () => {
  return (
    <div className="container py-14 relative">
      <div className="relative z-20">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-dark text-center aos-init aos-animate"
        >
          Taste the Healthy Difference
        </h1>

      <div className="space-y-10">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 aos-init aos-animate"
        >
          <div className="">
            <p className="">
              We know that
              <span className="text-primary">time</span>
              is the greatest value in the modern world.Our healthy meal plan
              delivery service Good Food in Miami is the answer for those who
              want to eat healthily, saving time for buying food and preparing
              delicious, healthy meals.
            </p>
          </div>
          <div className=""></div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 aos-init"
        >
          <div className=""></div>
          <div className="">
            <p className="">
              We know that
              <span className="text-primary">time</span>
              is the greatest value in the modern world.Our healthy meal plan
              delivery service Good Food in Miami is the answer for those who
              want to eat healthily, saving time for buying food and preparing
              delicious, healthy meals.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex justify-center mt-10 sm:mt-14 aos-init"
      >
        <div className="flex items-center group">
          <button className="bg-primary h-[40px] text-white px-3 py-2">
            Choose Your Meal Plan{" "}
          </button>
          <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white" />
        </div>
      </div>
    </div>
    <div  data-aos="fade-right" className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 aos-init aos-animate">
        <img data-aos="fade-right" src={BannerImgleafe} alt="" className="max-w-[160px] aos-init aos-animate" />
    </div>
    <div  data-aos="fade-right" className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 aos-init">
        <img  src={BannerImgtomato} alt="" className="max-w-[280px]" />
    </div>
    <div  data-aos="fade-left" className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100 aos-init aos-animate">
        <img  src={BannerImglemon} alt="" className="max-w-[200px]" />
    </div>
    <div  data-aos="fade-left" className="hidden sm:block absolute bottom-0 right-0 aos-init aos-animate">
        <img  src={BannerImgapple} alt="" className="max-w-[200px]" />
    </div>
    <div  data-aos="fade" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100 aos-init aos-animate">
        <img  src={BannerImgkiwi} alt="" className="max-w-[180px]" />
    </div>
    </div>
  );
};

export default Banner;
