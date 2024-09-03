"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import handleDownload from "./DownloadCv";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12" id="home">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
              Hello, I am<br></br> {""}
            </span>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000, 
                "Nick Wen",
                1000, 
                "an aspiring software developer",
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="type-animation-text"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-green-400 to-blue-500">
              {
                "Software developer, Recent graduate, Looking for new opportunity"
              }
            </span>
          </p>

          <div>
            <button className="transition ease-in-out delay-150 px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 hover:bg-slate-200 text-white hover:-translate-y-1 hover:scale-100 duration-300"   
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
            >
              Contact me
            </button>

            <button className="px-6 py-3 rounded-full w-full mt-2 sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white border border-green-500 border-2 hover:border-green-300"
              onClick={handleDownload}>
              Download CV
            </button>
              
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-green-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-yellow-200">
            <Image
              src="/images/pics.png"
              width={250}
              height={250}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[100%] h-[100%] "
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
