import React from "react";
import aircraft from "../assets/images/webp/choose-us/aircraft.webp";
import drone from "../assets/images/webp/choose-us/drone.webp";
import boats from "../assets/images/webp/choose-us/boats.webp";
import rightvec from "../assets/images/svg/choose-us/right-line-vector.svg";
import leftvec from "../assets/images/svg/choose-us/dots-vector.svg";
import rightEllipse from "../assets/images/svg/choose-us/top-right-ellipse.svg";
const ChooseUs = () => {
  return (
    <>
      <div className="bg-white relative xl:mb-2 xl:pb-36 xl:pt-28 lg:py-24 md:py-20 sm:py-16 py-12 overflow-hidden">
        <img
          className="absolute lg:block hidden right-0 top-0 pointer-events-none -z-0"
          src={rightvec}
          alt="vector"
        />
        <img
          className="absolute -top-[10%]  md:block hidden start-0 pointer-events-none -z-0"
          src={leftvec}
          alt="vector"
        />
        <img
          className="absolute end-0 pointer-events-none -z-0 -top-[40%]"
          src={rightEllipse}
          alt="ellipse"
        />
        <div className="max-w-[1164px] mx-auto px-3 xl:mt-7">
          <div className="flex items-center w-full gap-[11px] justify-center">
            <span className="bg-black w-[22.89px] h-[2.36px] rounded-sm"></span>
            <p className="font-poppins leading-auto tracking-wide text-black text-xs sm:text-sm md:text-base font-medium">
              WHY CHOOSE US
            </p>
            <span className="bg-black w-[22.89px] h-[2.36px] rounded-sm"></span>
          </div>
          <h2 className="text-center text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 leading-sm ff_hurmebold">
            Unmatched
            <span className=" ff_hurmethin"> Expertise, Unrivalled </span>
            Results
          </h2>
          <div className="flex justify-center relative z-20 flex-row gap-5 lg:gap-0 lg:-mx-3 flex-wrap mt-6 sm:mt-8 lg:mt-12 ">
            <div className=" max-w-[400px] sm:w-5/12 lg:w-4/12 lg:px-3">
              <div className="flex flex-col bg-white min-h-[323px] border rounded-[10px] hover:border-lightOrange duration-300 transition-all hover:shadow-expertise p-3 border-grey">
                <div className="rounded-xl overflow-hidden">
                  <img
                    className="lg:max-w-[340px] w-full h-[165px] object-cover"
                    src={aircraft}
                    alt="aircraft"
                  />
                </div>

                <h5 className="font-poppins text-xl text-black font-semibold leading-md mt-4">
                  Experience
                </h5>
                <p className="text-darkGrey font-poppins font-normal pt-3 text-sm md:text-base leading-md lg:max-w-[309px]">
                  With years of industry experience, we understand the unique
                  challenges of each project.
                </p>
              </div>
            </div>
            <div className=" max-w-[400px] sm:w-5/12 lg:w-4/12 lg:px-3">
              <div className="flex bg-white flex-col-reverse sm:flex-col sm:justify-start justify-end  min-h-[323px] border rounded-[10px] hover:border-lightOrange duration-300 transition-all hover:shadow-expertise p-3 border-grey">
                <div className="flex flex-col-reverse sm:flex-col">
                  <h5 className="font-poppins text-xl text-black font-semibold leading-md pt-[10px]">
                    Quality
                  </h5>
                  <p className="text-darkGrey font-poppins font-normal mt-[12px] text-sm md:text-base leading-md lg:max-w-[309px]">
                    We prioritize quality in every aspect of our service, from
                    equipment to data analysis.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden mt-[10px]">
                  <img
                    className="lg:max-w-[340px] w-full h-[165px] object-cover"
                    src={boats}
                    alt="boats"
                  />
                </div>
              </div>
            </div>
            <div className=" max-w-[400px] sm:w-5/12 lg:w-4/12 lg:px-3">
              <div className="flex flex-col bg-white h-[323px] border rounded-[10px] hover:border-lightOrange duration-300 transition-all hover:shadow-expertise p-3 border-grey">
                <div className="rounded-xl overflow-hidden">
                  <img
                    className="lg:max-w-[340px] w-full h-[165px] object-cover"
                    src={drone}
                    alt="drone"
                  />
                </div>
                <h5 className="font-poppins text-xl text-black font-semibold leading-md mt-4">
                  Reliability
                </h5>
                <p className="text-darkGrey font-poppins font-normal pt-3 text-sm md:text-base leading-md lg:max-w-[334px]">
                  Count on us for dependable, timely, and professional drone
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
