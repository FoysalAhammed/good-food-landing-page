import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
   <div className="text-white mt-20">
    <div data-aos="fade-down" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl aos-init aos-animate">
      <h1 className="py-10 text-3xl font-bold text-yellow text-center">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center"><FaLocationDot className="text-5xl" /></div>
          <p>Gulshan Dhaka,<br />Bangladesh</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center"><MdEmail   className="text-5xl"/></div>
          <p>hanif.mia2233@gmail.com<br />faizafortv@gmail.com</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center"><MdOutlineAddIcCall  className="text-5xl"  /></div>
          <p>01778821588 - CEO,<br /> 01576697562 - Hiring Team<br /> 0177788877-Product Managment</p>
        </div>
      </div>
      <div className="flex justify-between p-4 items-center">
        <p>© 2022 <a href="https://www.fiverr.com/foysalahamme392">Foysal Ahammed</a> All rights reserved</p>
        <div className="flex items-center gap-6">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
