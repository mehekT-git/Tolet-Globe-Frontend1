import "animate.css";
import BottomBg from "./BottomBg";
import React, { useEffect, useState } from "react";
import drop from "../../../assets/property/drop.png";
import SelectLocation from "../../../pages/property/listingComponents/SelectLocation";

const HomeLap = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [city, setCity] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div className="flex justify-center items-center h-full mb-20 mt-16">
        <div className="w-10/12 md:w-8/12 lg:w-6/12">
          <h1
            className={`absolute transform max-sm:top-32 max-sm:text-center max-sm text-2xl font-extrabold sm:font-light sm:text-3xl sm:text-[2.3rem]  text-white tracking-widest transition-all lg:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms]  ease-in-out ${
              isScrolled
                ? "left-[5%] top-[12.5rem] lg:top-[19rem] opacity-100"
                : "left-[30%] top-[12.5rem] lg:top-[19rem] opacity-0"
            } `}
          >
            Welcome to To-Let Globe
          </h1>
          <h6
            className={`absolute transform max-sm:top-44 max-sm:text-xs mt-1 text-center text-[#c8a21c] font-light transition-all lg:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms] ease-in-out ${
              isScrolled
                ? "max-sm:left-[27%] max-sm:top-[22%] left-[5%] top-[17rem] lg:left-[8%] lg:top-[23rem] opacity-100"
                : "left-[30%] top-[17rem] lg:top-[23rem] opacity-0"
            } `}
          >
            <span className="max-sm:block">NO BROKERAGE ON </span>
            <span className="max-sm:block">PGS | FLATS | HOUSES | OFFICES</span>
          </h6>
          <div
            className={` absolute transform transition-all max-sm:top-52 g:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms] ease-in-out w-[20%] ${
              isScrolled
                ? "left-[5%] w-[20%] top-[42%] lg:top-[59%] lg:w-[33%] opacity-100"
                : "left-[30%] w-[20%] top-[39%] lg:top-[56%] lg:w-[33%] opacity-0"
            } `}
            id="inputGroup"
          >
            <div className="flex">
              <input
                className="flex-1 py-2 px-4 border border-gray-300 bg-white rounded-l-md"
                placeholder="Search PG, Flats and Houses"
                aria-label="Search PG, Flats and Houses"
              />
              <button
                className="bg-[#40b5a8] text-white rounded-r-md px-4"
                onClick={() => console.log("connect")}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomBg />
    </div>
  );
};

export default HomeLap;