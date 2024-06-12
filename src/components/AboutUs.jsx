import React from "react";
import man from "../assets/images/webp/about-us/about-man.webp";
import dotsVec from "../assets/images/svg/about-us/dots-vec.svg";
import arrow from "../assets/images/svg/about-us/button-arrow.svg";
import lineVector from "../assets/images/svg/about-us/left-line-vec.svg";
import ellipse from "../assets/images/svg/about-us/left-ellipse.svg";
const AboutUs = () => {
  return (
    <div className="bg-offOrange relative overflow-hidden">
      <img className="absolute pointer-events-none lg:max-w-full sm:max-w-[40ox] lg:block hidden -bottom-[43%]" src={lineVector} alt="vector" />
      <img className="absolute start-0 top-[50%] md:block hidden pointer-events-none -translate-y-[50%]" src={ellipse} alt="ellipse" />
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-6 lg:gap-0 sm:pt-16 md:py-20 sm:py-16 py-12 lg:py-24 xl:pb-28 xl:mb-1">
          <div className="relative">
            <img
              className="absolute -bottom-6 xl:-bottom-[12%] max-w-[70px] lg:max-w-[100px] xl:max-w-full -end-5 xl:-end-[15%] pointer-events-none -z-0"
              src={dotsVec}
              alt="vector"
            />
            <img
              className="sm:max-w-[450px] max-w-[350px] md:max-w-[539px] relative z-10 object-cover md:h-[380px] lg:h-[400px] xl:h-[450px] "
              src={man}
              alt="man"
            />
          </div>
          <div className="flex flex-col max-w-[900px] items-center lg:items-start lg:max-w-[462px] xl:max-w-full justify-center mt-6 xl:ps-32 ms-1">
            <div className="flex items-center w-full gap-[11px] justify-center lg:justify-start">
              <span className="bg-black w-[22.89px] h-[2.36px] rounded-sm"></span>
              <p className="font-poppins leading-auto tracking-wide text-black text-xs sm:text-sm md:text-base font-medium">
                About US
              </p>
              <span className="bg-black w-[22.89px] h-[2.36px] rounded-sm"></span>
            </div>
            <h2 className="text-center lg:text-start text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 lg:mt-4 leading-sm font-hurme-bold">
              Get to Know Us:
              <span className="ff_hurmethin"> Where Innovation </span>
              Meet Sky
            </h2>
            <p className="text-center lg:text-start leading-md text-sm sm:text-base lg:max-w-[462px] font-poppins sm:pt-3 pt-2 md:pt-4 text-darkGrey">
              We at Hartley Aerial cherish the role that we play in the drone
              service industry. We make it easy for your company, regardless of
              its size, to acquire professional drone imagery and data, anywhere
              you may need it.
            </p>
            <button className="whitespace-nowrap hover:bg-black duration-300 hover:text-white flex items-center mt-8 bg-orange rounded-[106px] sm:px-6 xl:px-[26px] px-[18px] py-2 sm:py-3 xl:py-[13px] font-poppins lg:text-lg text-white">
              Meet the Team
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
