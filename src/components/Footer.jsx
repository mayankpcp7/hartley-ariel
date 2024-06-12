import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/webp/footer/footer-logo.webp";
import { Instagram, Telegram, YouTube } from "./common/Icon";
import { links } from "./common/Helper";
import ellipse from "../assets/images/svg/footer/ellipse.svg";
import vector from "../assets/images/svg/about-us/left-line-vec.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offBlack pt-11 relative overflow-hidden">
      <img
        className="absolute top-[-119%] pointer-events-none start-0 2xl:block hidden"
        src={vector}
        alt="vector"
      />
      <img
        className="absolute end-0 bottom-0 pointer-events-none -z-0"
        src={ellipse}
        alt="ellipse"
      />
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-wrap gap-8 lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <Link to="/home">
              <img
                className="sm:max-w-[80px] cursor-pointer max-w-[75px] md:max-w-[98.39px] object-cover"
                src={logo}
                alt="logo"
              />
            </Link>
            <p className="font-poppins text-lightGrey leading-md max-w-[600px] sm:text-base text-sm lg:max-w-[388px] mt-2 font-normal">
              Lorem ipsum dolor sit amet consectetur. Vulputate ac amet commodo
              adipiscing interdum netus id.
            </p>
            <div className="flex mt-7 gap-3">
              <span className="rounded-[50%] cursor-pointer hover:bg-orange duration-300 h-[36px] w-[36px] bg-iconGrey flex items-center justify-center">
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </Link>
              </span>
              <span className="rounded-[50%] cursor-pointer hover:bg-orange duration-300 bg-iconGrey flex items-center justify-center w-[36px] h-[36px]">
                <Link
                  to="https://www.telegram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Telegram />
                </Link>
              </span>
              <span className="rounded-[50%] cursor-pointer hover:bg-orange duration-300 w-[36px] h-[36px] bg-iconGrey flex items-center justify-center">
                <Link
                  to="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube />
                </Link>
              </span>
            </div>
          </div>
          <div className="flex justify-between max-w-[900px] flex-wrap gap-5 md:gap-8 lg:gap-12">
            {links.map((linkGroup, index) => (
              <ul key={index}>
                <h6 className="font-poppins text-white font-medium leading-md pb-[10px]">
                  {linkGroup.heading}
                </h6>
                {linkGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`pb-[10px] ${
                      idx === linkGroup.items.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <Link
                      to={item.to}
                      className="text-lightGrey sm:text-base text-sm font-poppins font-normal leading-md duration-300 hover:text-white"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <span className="border border-white w-full mt-9 flex opacity-20"></span>
      <p className="text-lightGrey font-poppins py-4 sm:py-5 leading-md text-center sm:text-base text-sm font-normal">
        © {currentYear} Hartley Aerial. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
